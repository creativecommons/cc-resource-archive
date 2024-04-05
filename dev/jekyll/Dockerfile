# https://docs.docker.com/engine/reference/builder/

# Unfortunately, the official jekyll docker images are out of date and contain
# errors: https://hub.docker.com/u/jekyll
# Also see: https://github.com/envygeeks/jekyll-docker/issues
#
# This file was created based, in part, on:
# https://github.com/BretFisher/jekyll-serve/issues/82

# https://hub.docker.com/_/ruby
FROM ruby:slim

# Configure apt not to prompt during docker build
ARG DEBIAN_FRONTEND=noninteractive

# Configure apt to avoid installing recommended and suggested packages
RUN apt-config dump \
| grep -E '^APT::Install-(Recommends|Suggests)' \
| sed -e's/1/0/' \
| tee /etc/apt/apt.conf.d/99no-recommends-no-suggests

# Resynchronize the package index
RUN apt-get update

# Install system dependencies
RUN apt-get install -y build-essential git

# Install Ruby dependencies
RUN gem install bundler

WORKDIR /srv/jekyll

# Install site dependencies
COPY Gemfile Gemfile.lock ./
RUN bundle install

CMD [ "bundle", "exec", "jekyll", "serve", "--force_polling", \
"--incremental", "-H", "0.0.0.0", "-P", "4000" ]
