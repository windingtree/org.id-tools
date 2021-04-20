#!/usr/bin/env bash

set -o errexit

echo "Emitting dispatch event \"release_to_npm\" for the repo windingtree/org.id-tools";

curl \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: Bearer $1" \
  https://api.github.com/repos/windingtree/org.id-tools/dispatches \
  -d "{\"event_type\":\"release_to_npm\", \"client_payload\": {\"packageName\": \"$2\"}}"