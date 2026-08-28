#!/usr/bin/env bash
# Verification server for gt-anywhere-site. Serves the repo root over
# http://127.0.0.1:<port>/ inside a dedicated tmux session so cleanup can
# kill exactly what this run started — never processes by name.
#
# usage: server.sh {start|doctor|stop} [port]     (default port 8213)
# session name: $GTA_VERIFY_SESSION, default gt-anywhere-verify-http
# (suffixed -http: agent runners often already occupy a gt-anywhere-verify session)
set -euo pipefail

CMD="${1:-}"
PORT="${2:-8213}"
SESSION="${GTA_VERIFY_SESSION:-gt-anywhere-verify-http}"
ROOT="$(cd "$(dirname "$0")/../../../.." && pwd)"
URL="http://127.0.0.1:${PORT}"

case "$CMD" in
  start)
    if tmux has-session -t "=$SESSION" 2>/dev/null; then
      echo "refusing: tmux session '$SESSION' already exists (stop it, or set GTA_VERIFY_SESSION)" >&2
      exit 1
    fi
    if curl -s -o /dev/null --max-time 2 "$URL/"; then
      echo "refusing: port $PORT is already serving something this run did not start" >&2
      exit 1
    fi
    tmux new-session -d -s "$SESSION" -c "$ROOT" "python3 -m http.server $PORT --bind 127.0.0.1"
    for _ in $(seq 1 20); do
      if curl -s -o /dev/null "$URL/"; then
        echo "ready: $URL/ (tmux session: $SESSION, root: $ROOT)"
        exit 0
      fi
      sleep 0.25
    done
    echo "server did not come up on $URL" >&2
    exit 1
    ;;
  doctor)
    fail=0
    tmux has-session -t "=$SESSION" 2>/dev/null || { echo "FAIL: tmux session '$SESSION' not running"; fail=1; }
    tmp="$(mktemp)"
    code="$(curl -s -o "$tmp" -w '%{http_code}' --max-time 5 "$URL/" || true)"
    if [ "$code" != "200" ]; then
      echo "FAIL: GET / returned '$code'"; fail=1
    elif ! cmp -s "$tmp" "$ROOT/index.html"; then
      echo "FAIL: served / differs from $ROOT/index.html (wrong root or foreign server)"; fail=1
    fi
    rm -f "$tmp"
    code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 5 "$URL/advisors/" || true)"
    [ "$code" = "200" ] || { echo "FAIL: GET /advisors/ returned '$code'"; fail=1; }
    [ "$fail" -eq 0 ] && echo "OK: $URL serving $ROOT (tmux session: $SESSION)"
    exit "$fail"
    ;;
  stop)
    if tmux has-session -t "=$SESSION" 2>/dev/null; then
      tmux kill-session -t "=$SESSION"
      echo "stopped tmux session $SESSION"
    else
      echo "no tmux session '$SESSION'; nothing to stop"
    fi
    ;;
  *)
    echo "usage: server.sh {start|doctor|stop} [port]   (default port 8213)" >&2
    exit 2
    ;;
esac
