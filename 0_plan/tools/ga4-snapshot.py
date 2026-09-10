#!/usr/bin/env python3
"""Read-only GA4 snapshot for the GT web estate. Prints markdown tables.

Usage: python3 0_plan/tools/ga4-snapshot.py [--days 28] [--property 516065070]
Auth:  ~/.gt-analytics-token.json (OAuth user token; analytics.readonly is enough).
Never writes to GA. Never prints secrets.
"""
import argparse, json, os, sys, datetime as dt
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request
from googleapiclient.discovery import build

ap = argparse.ArgumentParser()
ap.add_argument('--days', type=int, default=28)
ap.add_argument('--property', default='516065070')
ap.add_argument('--token', default=os.path.expanduser('~/.gt-analytics-token.json'))
a = ap.parse_args()

d = json.load(open(a.token))
creds = Credentials(d.get('token'), refresh_token=d['refresh_token'], token_uri=d['token_uri'],
                    client_id=d['client_id'], client_secret=d['client_secret'], scopes=d.get('scopes'))
creds.refresh(Request())
admin = build('analyticsadmin', 'v1beta', credentials=creds, cache_discovery=False)
data = build('analyticsdata', 'v1beta', credentials=creds, cache_discovery=False)
P = f'properties/{a.property}'
end = dt.date.today(); start = end - dt.timedelta(days=a.days)
print(f"# GA4 snapshot: {P}, {start} to {end} ({a.days} days), generated {dt.datetime.now():%Y-%m-%d %H:%M}\n")

def table(rows, headers):
    print('| ' + ' | '.join(headers) + ' |'); print('|' + '---|' * len(headers))
    for r in rows: print('| ' + ' | '.join(str(x) for x in r) + ' |')
    print()

def safe(label, fn):
    try: return fn()
    except Exception as e:
        print(f"_{label}: failed: {str(e)[:200]}_\n"); return None

# --- Admin: property, streams, key events, custom dimensions, links
prop = safe('property.get', lambda: admin.properties().get(name=P).execute())
if prop:
    table([[prop.get('displayName'), prop.get('parent'), prop.get('timeZone'), prop.get('currencyCode'), prop.get('serviceLevel'), prop.get('createTime','')[:10]]],
          ['Property', 'Account', 'Time zone', 'Currency', 'Service level', 'Created'])
streams = safe('dataStreams.list', lambda: admin.properties().dataStreams().list(parent=P).execute().get('dataStreams', []))
if streams is not None:
    table([[s.get('displayName'), s.get('type'), s.get('webStreamData',{}).get('measurementId',''), s.get('webStreamData',{}).get('defaultUri',''), s.get('createTime','')[:10]] for s in streams],
          ['Data stream', 'Type', 'Measurement ID', 'Default URI', 'Created'])
kes = safe('keyEvents.list', lambda: admin.properties().keyEvents().list(parent=P).execute().get('keyEvents', []))
if kes is not None:
    table([[k.get('eventName'), k.get('countingMethod'), k.get('createTime','')[:10]] for k in kes] or [['(none)','','']], ['Key event', 'Counting', 'Created'])
cds = safe('customDimensions.list', lambda: admin.properties().customDimensions().list(parent=P).execute().get('customDimensions', []))
if cds is not None:
    table([[c.get('displayName'), c.get('parameterName'), c.get('scope')] for c in cds] or [['(none)','','']], ['Custom dimension', 'Parameter', 'Scope'])
ads = safe('googleAdsLinks.list', lambda: admin.properties().googleAdsLinks().list(parent=P).execute().get('googleAdsLinks', []))
if ads is not None:
    table([[l.get('customerId'), l.get('adsPersonalizationEnabled'), l.get('createTime','')[:10]] for l in ads] or [['(none)','','']], ['Google Ads link (customer)', 'Personalization', 'Created'])

# --- Data API reports
def report(dims, mets, limit=25, order=None, filt=None):
    body = {'dateRanges': [{'startDate': str(start), 'endDate': str(end)}],
            'dimensions': [{'name': x} for x in dims], 'metrics': [{'name': x} for x in mets], 'limit': limit}
    if order: body['orderBys'] = [{'metric': {'metricName': order}, 'desc': True}]
    if filt: body['dimensionFilter'] = filt
    r = data.properties().runReport(property=P, body=body).execute()
    return [[*(v['value'] for v in row['dimensionValues']), *(v['value'] for v in row['metricValues'])] for row in r.get('rows', [])]

rows = safe('sessions by hostname', lambda: report(['hostName'], ['sessions', 'totalUsers', 'keyEvents'], 25, 'sessions'))
if rows is not None: print('## Sessions by hostname\n'); table(rows, ['Hostname', 'Sessions', 'Users', 'Key events'])
rows = safe('channel groups', lambda: report(['sessionDefaultChannelGroup'], ['sessions', 'keyEvents'], 15, 'sessions'))
if rows is not None: print('## Sessions by default channel group\n'); table(rows, ['Channel group', 'Sessions', 'Key events'])
rows = safe('source/medium', lambda: report(['sessionSourceMedium'], ['sessions', 'keyEvents'], 20, 'sessions'))
if rows is not None: print('## Sessions by source / medium (top 20)\n'); table(rows, ['Source / medium', 'Sessions', 'Key events'])
rows = safe('campaigns', lambda: report(['sessionCampaignName'], ['sessions', 'keyEvents'], 15, 'sessions'))
if rows is not None: print('## Sessions by campaign (top 15)\n'); table(rows, ['Campaign', 'Sessions', 'Key events'])
rows = safe('landing pages', lambda: report(['landingPagePlusQueryString'], ['sessions'], 15, 'sessions'))
if rows is not None: print('## Landing pages (top 15)\n'); table([[r[0][:90], r[1]] for r in rows], ['Landing page', 'Sessions'])
rows = safe('events', lambda: report(['eventName'], ['eventCount'], 30, 'eventCount'))
if rows is not None: print('## Events (top 30)\n'); table(rows, ['Event', 'Count'])
rows = safe('device', lambda: report(['deviceCategory'], ['sessions'], 5, 'sessions'))
if rows is not None: print('## Device category\n'); table(rows, ['Device', 'Sessions'])
rows = safe('region', lambda: report(['region'], ['sessions'], 12, 'sessions'))
if rows is not None: print('## Region (top 12)\n'); table(rows, ['Region', 'Sessions'])
