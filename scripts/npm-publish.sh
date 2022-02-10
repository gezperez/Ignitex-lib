#!/bin/sh

set -e

clean_repo() {
  git restore package.json .npmrc
}

DEFAULT_OWNER=cizar

trap clean_repo ERR

read -p "Aurora Package Version: " VERSION

if [ -z "${VERSION}" ]; then
  echo "You must provide a version to publish the package"
  exit 1
fi

read -p "GitHub Registry Owner [${DEFAULT_OWNER}]: " OWNER
OWNER=${OWNER:-$DEFAULT_OWNER}

cd "$(dirname "$0")" && cd ..

TMP=$(mktemp)
jq ".name = \"@${OWNER}/aurora\" | .version = \"${VERSION}\" | .private = false | .repository.url = \"git+https://github.com/${OWNER}/aurora.git\"" package.json > $TMP && mv $TMP package.json

cat << __EOF__ > .npmrc
//npm.pkg.github.com/:_authToken=b93ef5507e0ff2150b20d8e7c7576ea84744a5bb
@${OWNER}:registry=https://npm.pkg.github.com
__EOF__

set +e
npm whoami > /dev/null 2>&1
WHOAMI_ERROR=$?
set -e

if [[ "$WHOAMI_ERROR" -ne 0 ]]; then
  npm login
fi

npm publish

clean_repo