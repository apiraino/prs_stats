#!/usr/bin/env bash

if [ -z "$JWT_AUTH_TOKEN" ]; then
    echo "Missing JWT_AUTH_TOKEN"
    exit 0
fi

# Q="https://api.github.com/repos/rust-lang/rust/pulls/108640/comments"

# --offline
http --auth-type=jwt --session gh-session.json "${@}"
