# https://docs.docker.com/engine/reference/builder/

# https://hub.docker.com/r/jekyll/builder
FROM jekyll/minimal:pages

# 2023-02-24: Inexplicably!?! the jekyll/minimal:pages cannot run github-pages
# because it one of the dependencies is racc, which failes to compile without
# the packages specified below
#
# https://pkgs.alpinelinux.org/packages
RUN apk --no-cache add gcc make musl-dev
