import { createRequire } from 'node:module';
import http from 'node:http';
import { readFileSync, existsSync, statSync, mkdirSync } from 'node:fs';
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
let blocked=0;
for (const [w,h,tag] of [[390,844,'390'],[1440,900,'1440']]) {
  const ctx=await b.newContext({viewport:{width:w,height:h},deviceScaleFactor:1});
  await ctx.route('**/*',(route)=>{
    const u=new URL(route.request().url());
    const FONTS=['fonts.googleapis.com','fonts.gstatic.com','ajax.googleapis.com'];
    if(u.hostname!=='127.0.0.1'&&u.hostname!=='localhost'&&!FONTS.includes(u.hostname)){blocked++;return route.abort()}
    route.continue();
  });
  const pg=await ctx.newPage();
  await pg.goto(`http://127.0.0.1:${port}/index.html`,{waitUntil:'domcontentloaded'});
  await pg.evaluate(()=>document.fonts?document.fonts.ready:null).catch(()=>{});
  await pg.waitForTimeout(2600);
  await pg.screenshot({path:join(out,`anywhere-home-${tag}-firstscreen.jpg`),quality:82,type:'jpeg'});
  // header strip
  await pg.screenshot({path:join(out,`anywhere-header-${tag}.jpg`),quality:88,type:'jpeg',clip:{x:0,y:0,width:w,height:Math.min(120,h)}});
  // footer: scroll to the bottom and capture the last screen
  await pg.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));
  await pg.waitForTimeout(500);
  await pg.screenshot({path:join(out,`anywhere-footer-${tag}.jpg`),quality:82,type:'jpeg'});
  const facts=await pg.evaluate(`(()=>{
    const pick=(sel)=>{const el=document.querySelector(sel);if(!el)return null;const cs=getComputedStyle(el);const r=el.getBoundingClientRect();
      return {text:(el.textContent||'').trim().slice(0,60),font:cs.fontFamily.split(',')[0].replace(/"/g,''),size:cs.fontSize,weight:cs.fontWeight,color:cs.color,bg:cs.backgroundColor,radius:cs.borderRadius,pad:cs.padding,h:Math.round(r.height),transform:cs.textTransform,spacing:cs.letterSpacing}};
    const body=getComputedStyle(document.body);
    return {bodyFont:body.fontFamily.split(',')[0].replace(/"/g,''), bodyColor:body.color, bodyBg:body.backgroundColor,
      h1:pick('h1'), cta:pick('a.button, .button, [class*=button]'), nav:pick('nav a, .nav a'), footer:pick('footer, .footer')};
  })()`);
  console.log(tag, JSON.stringify(facts));
  await ctx.close();
}
console.log('third-party requests blocked:', blocked);
await b.close(); srv.close();
