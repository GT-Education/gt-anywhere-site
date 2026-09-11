#!/usr/bin/env python3
"""M10 "The Map": the geometry generator, so the SVG path data in index.html is reproducible rather than drawn by hand.

Source data (downloaded once into a scratch directory; not committed, because the mock repository carries no data files):
  * Natural Earth 1:50m Admin 1 - States, Provinces, version 5.1.1 (public domain, CC0).
    https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.1/geojson/ne_50m_admin_1_states_provinces.geojson
    sha256 69a0e06e640b2d505858ae1cb63034e4677f3000b35a98e16312932b98c426b9
  * Natural Earth 1:50m Admin 0 - Countries, version 5.1.1 (public domain, CC0), for the United States inset.
    https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.1/geojson/ne_50m_admin_0_countries.geojson
  * Georgetown city, Texas internal point 30.668136 N, 97.698744 W, from the U.S. Census Bureau 2024 Gazetteer
    Places file for Texas (https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_gaz_place_48.txt),
    a U.S. Government work in the public domain.

Method: project (equidistant cylindrical with a standard parallel), fit to the target box, simplify with
Douglas-Peucker at a tolerance stated in SVG user units, round to one decimal place, emit one `d` string.

Usage: python3 qa/M10-geometry.py <scratch-dir>
"""
import json, math, sys, os

GEORGETOWN = (-97.698744, 30.668136)   # lon, lat


def project(points, phi0):
    """Equidistant cylindrical (plate carree) with standard parallel phi0: x = lon * cos(phi0), y = -lat."""
    k = math.cos(math.radians(phi0))
    return [(lon * k, -lat) for lon, lat in points]


def dp(points, tol):
    """Douglas-Peucker, tolerance in the units of `points`."""
    if len(points) < 3:
        return points[:]
    keep = [False] * len(points)
    keep[0] = keep[-1] = True
    stack = [(0, len(points) - 1)]
    while stack:
        a, b = stack.pop()
        if b - a < 2:
            continue
        ax, ay = points[a]; bx, by = points[b]
        dx, dy = bx - ax, by - ay
        den = math.hypot(dx, dy)
        worst, wi = -1.0, None
        for i in range(a + 1, b):
            px, py = points[i]
            d = abs(dx * (ay - py) - (ax - px) * dy) / den if den else math.hypot(px - ax, py - ay)
            if d > worst:
                worst, wi = d, i
        if worst > tol:
            keep[wi] = True
            stack.append((a, wi)); stack.append((wi, b))
    return [p for p, k in zip(points, keep) if k]


def fit(rings, box):
    """Scale every ring into `box` = (x, y, w, h), preserving the aspect ratio. Returns (rings, transform)."""
    xs = [p[0] for r in rings for p in r]; ys = [p[1] for r in rings for p in r]
    x0, x1, y0, y1 = min(xs), max(xs), min(ys), max(ys)
    bx, by, bw, bh = box
    s = min(bw / (x1 - x0), bh / (y1 - y0))
    ox = bx + (bw - (x1 - x0) * s) / 2
    oy = by + (bh - (y1 - y0) * s) / 2
    t = lambda p: (ox + (p[0] - x0) * s, oy + (p[1] - y0) * s)
    return [[t(p) for p in r] for r in rings], t


def d_string(rings, places=1):
    out = []
    for r in rings:
        f = lambda v: ('%.*f' % (places, v)).rstrip('0').rstrip('.')
        seg = ['M%s %s' % (f(r[0][0]), f(r[0][1]))]
        prev = None
        for p in r[1:]:
            s = '%s %s' % (f(p[0]), f(p[1]))
            if s != prev:
                seg.append('L' + s)
            prev = s
        out.append(''.join(seg) + 'Z')
    return ''.join(out)


def rings_of(geom, min_pts=6):
    if geom['type'] == 'Polygon':
        polys = [geom['coordinates']]
    else:
        polys = geom['coordinates']
    out = []
    for poly in polys:
        for ring in poly:                       # outer ring plus holes; Texas and the lower 48 have none
            if len(ring) >= min_pts:
                out.append([(p[0], p[1]) for p in ring])
            break                               # outer ring only
    return out


def main(scratch):
    a1 = json.load(open(os.path.join(scratch, 'ne50_admin1.geojson')))
    tx = next(f for f in a1['features']
              if f['properties'].get('name') == 'Texas' and f['properties'].get('admin') == 'United States of America')
    tx_rings = rings_of(tx['geometry'], min_pts=12)          # drops the five barrier-island slivers of 7 to 11 points
    print('Texas source rings kept: %d, points %s' % (len(tx_rings), [len(r) for r in tx_rings]))

    c0 = json.load(open(os.path.join(scratch, 'ne50_countries.geojson')))
    us = next(f for f in c0['features'] if f['properties'].get('ADMIN') == 'United States of America')
    lower48 = max((p[0] for p in us['geometry']['coordinates']),
                  key=lambda r: (max(x for x, y in r) - min(x for x, y in r)) * (max(y for x, y in r) - min(y for x, y in r)))
    lower48 = [(p[0], p[1]) for p in lower48]
    print('United States lower-48 ring: %d points' % len(lower48))

    # Each outline is emitted ONCE, drawn from its own top-left corner, so the page can place it with
    # <use transform="translate(...)"> in both the portrait and the landscape composition.
    report = []
    for name, width, phi0, rings, tol, pin in [
        # (label, width in SVG user units, standard parallel, rings, DP tolerance in user units, pin lon/lat or None)
        ('texas', 320.0, 31.17, tx_rings,  0.9, GEORGETOWN),
        ('us',    200.0, 39.50, [lower48], 1.30, GEORGETOWN),
    ]:
        proj = [project(r, phi0) for r in rings]
        xs = [p[0] for r in proj for p in r]; ys = [p[1] for r in proj for p in r]
        aspect = (max(xs) - min(xs)) / (max(ys) - min(ys))
        fitted, t = fit(proj, (0.0, 0.0, width, width / aspect))
        simp = [dp(r, tol) for r in fitted]
        d = d_string(simp)
        px, py = t(project([pin], phi0)[0]) if pin else (None, None)
        report.append((name, d, simp, px, py))
        print('\n--- %s ---' % name)
        print('points %s -> %s, tolerance %.2f user units, d is %d bytes'
              % ([len(r) for r in fitted], [len(r) for r in simp], tol, len(d.encode('utf-8'))))
        xs = [p[0] for r in simp for p in r]; ys = [p[1] for r in simp for p in r]
        print('bbox %.1f %.1f %.1f %.1f (aspect %.4f)' % (min(xs), min(ys), max(xs), max(ys), aspect))
        if pin:
            print('Georgetown pin at %.2f %.2f  (fraction across %.4f, down %.4f)'
                  % (px, py, (px - min(xs)) / (max(xs) - min(xs)), (py - min(ys)) / (max(ys) - min(ys))))
        print(d)
    # Texas inside the United States inset: the SAME fit transform as the inset outline, so the state sits where
    # it really sits in the country rather than being placed by eye.
    proj_us = [project(lower48, 39.5)]
    xs = [p[0] for r in proj_us for p in r]; ys = [p[1] for r in proj_us for p in r]
    aspect = (max(xs) - min(xs)) / (max(ys) - min(ys))
    _, t_us = fit(proj_us, (0.0, 0.0, 200.0, 200.0 / aspect))
    tx_in_us = [[t_us(p) for p in project(r, 39.5)] for r in tx_rings]
    simp = [dp(r, 0.35) for r in tx_in_us]
    d = d_string(simp)
    report.append(('texas-in-us', d, simp, None, None))
    print('\n--- texas-in-us ---')
    print('points %s -> %s, tolerance 0.35 user units, d is %d bytes'
          % ([len(r) for r in tx_in_us], [len(r) for r in simp], len(d.encode('utf-8'))))
    xs = [p[0] for r in simp for p in r]; ys = [p[1] for r in simp for p in r]
    print('bbox %.1f %.1f %.1f %.1f' % (min(xs), min(ys), max(xs), max(ys)))
    print(d)

    ship = sum(len(d.encode('utf-8')) for _, d, _, _, _ in report)
    print('\ncommitted path data (Texas outline + United States inset + Texas inside the inset): %d bytes' % ship)


if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else '.')
