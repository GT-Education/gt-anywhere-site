import { createRequire } from 'node:module';
import http from 'node:http';
import { readFileSync, existsSync, statSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, extname } from 'node:path';
const REPO='/Users/johnny/projects/gt-school/gt-anywhere-site-v2';
const base='/Users/johnny/.npm/_npx/9833c18b2d85bc59/node_modules/playwright';
const { chromium } = createRequire(base+'/package.json')(base);
const TYPES={'.html':'text/html','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf','.ico':'image/x-icon'};
const srv=http.createServer((q,r)=>{
  let p=join(REPO,decodeURIComponent(q.url.split('?')[0]));
  if(existsSync(p)&&statSync(p).isDirectory()) p=join(p,'index.html');
  if(!existsSync(p)||!statSync(p).isFile()){r.writeHead(404);return r.end()}
  r.writeHead(200,{'content-type':TYPES[extname(p)]||'application/octet-stream'});r.end(readFileSync(p));
});
await new Promise(r=>srv.listen(0,r)); const port=srv.address().port;
const exe='/Users/johnny/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing';
const b=await chromium.launch({executablePath:exe});
const out=join(REPO,'0_plan/kb/exemplars/estate'); mkdirSync(out,{recursive:true});
let blocked=0; const record={}; const blockedHosts={};
for (const [w,h,tag] of [[390,844,'390'],[1440,900,'1440']]) {
  const ctx=await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:1});
  await ctx.route('**/*',(route)=>{
    const u=new URL(route.request().url());
    const FONTS=['fonts.googleapis.com','fonts.gstatic.com','ajax.googleapis.com'];
    if(u.hostname!=='127.0.0.1'&&u.hostname!=='localhost'&&!FONTS.includes(u.hostname)){blocked++;blockedHosts[u.hostname]=(blockedHosts[u.hostname]||0)+1;return route.abort()}
    route.continue();
  });
  const pg=await ctx.newPage();
  await pg.goto(`http://127.0.0.1:${port}/index.html`,{waitUntil:'domcontentloaded'});
  await pg.evaluate(()=>document.fonts?document.fonts.ready:null).catch(()=>{});
  await pg.waitForTimeout(2600);
  await pg.screenshot({path:join(out,`anywhere-home-${tag}-firstscreen.jpg`),quality:82,type:'jpeg'});
  // header strip
  await pg.screenshot({path:join(out,`anywhere-header-${tag}.jpg`),quality:88,type:'jpeg',clip:{x:0,y:0,width:w,height:Math.min(120,h)}});
  const facts=await pg.evaluate(`(()=>{
    // Only elements a reader can actually see. Astra found the first pass sampling .button.is-mobile-app
    // inside a closed navigation dropdown and reporting it as the phone's primary call to action.
    const visible=(el)=>{ if(!el) return false; const cs=getComputedStyle(el); if(cs.display==='none'||cs.visibility==='hidden'||parseFloat(cs.opacity)===0) return false;
      const r=el.getBoundingClientRect(); if(r.width<4||r.height<4) return false;
      for(let p=el.parentElement;p;p=p.parentElement){const pc=getComputedStyle(p); if(pc.display==='none'||pc.visibility==='hidden'||parseFloat(pc.opacity)===0) return false;} return true; };
    const describe=(el,sel)=>{ if(!el) return null; const cs=getComputedStyle(el); const r=el.getBoundingClientRect();
      const T=/rgba\\(\\s*0,\\s*0,\\s*0,\\s*0\\s*\\)|^transparent$/; let fill=cs.backgroundColor, radius=cs.borderRadius, fillFrom='the element itself';
      if(T.test(fill)||/,\\s*0\\)$/.test(fill)){ for(const d of el.querySelectorAll('*')){ const dc=getComputedStyle(d); if(!T.test(dc.backgroundColor)&&!/,\\s*0\\)$/.test(dc.backgroundColor)){ fill=dc.backgroundColor; radius=dc.borderRadius; fillFrom=d.tagName.toLowerCase()+'.'+String(d.className).split(' ')[0]; break; } } }
      return {selector:sel, text:(el.textContent||'').trim().replace(/\\s+/g,' ').slice(0,60), font:cs.fontFamily.split(',')[0].replace(/"/g,''), size:cs.fontSize, weight:cs.fontWeight,
        color:cs.color, bg:fill, fillFrom, radius, pad:cs.padding, transform:cs.textTransform, spacing:cs.letterSpacing,
        box:{x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height)}}; };
    const firstVisible=(sel)=>{ for(const el of document.querySelectorAll(sel)) if(visible(el)) return describe(el,sel); return null; };
    const body=getComputedStyle(document.body);
    const links=[...document.querySelectorAll('a')].filter(visible);
    return {bodyFont:body.fontFamily.split(',')[0].replace(/"/g,''), bodyColor:body.color, bodyBg:body.backgroundColor,
      h1:firstVisible('h1'), h1Italic:firstVisible('h1 em, h1 i, h1 [class*=italic], h1 span'),
      applyActions: links.filter(a=>/begin application/i.test(a.textContent||'')).map(a=>describe(a,'link reading Begin application')),
      firstScreenLinks: links.filter(a=>a.getBoundingClientRect().y<innerHeight).slice(0,14).map(a=>{const d=describe(a,'first-screen link'); return {t:d.text.slice(0,24), y:d.box.y, bg:d.bg, from:d.fillFrom};}),
      visibleLinkCount: links.length,
      headerLinks: links.filter(a=>a.getBoundingClientRect().y<110).map(a=>(a.textContent||'').trim().replace(/\\s+/g,' ').slice(0,28)).filter(Boolean)};
  })()`);
  console.log(tag, JSON.stringify(facts, null, 1));
  record[tag]={viewport:{w,h}, blockedAtThisPoint:blocked, facts};
  // footer: scroll to the bottom and capture the last screen
  await pg.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
  await pg.waitForTimeout(2500); // Astra: 500ms left the footer mid-entrance, with faded and missing text
  await pg.screenshot({path:join(out,`anywhere-footer-${tag}.jpg`),quality:82,type:'jpeg'});

  await ctx.close();
}
record.blocked={total:blocked, byHost:blockedHosts};
record.capturedAt=new Date().toISOString();
record.source='the repository mirror of anywhere.gt.school, served from 127.0.0.1; nothing was loaded from production';
writeFileSync(join(out,'measurements.json'), JSON.stringify(record,null,2));
console.log('third-party requests blocked:', blocked, Object.keys(blockedHosts).join(' '));
await b.close(); srv.close();
