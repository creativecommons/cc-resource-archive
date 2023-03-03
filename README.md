# cc-resource-archive

Collection of resources on Creative Commons (CC) tools and other open topics


## Overview

Welcome to the CC Resources Archive. The idea of this project is to have a
simple, easy-to-update area for keeping track of all of the useful resources
that people make about Creative Commons licenses and open content topics in
general. The live site is at
[resources.creativecommons.org](https://resources.creativecommons.org/).


## How it works

The website is built using [Jekyll](http://jekyllrb.com/docs/home/), a simple
templating system that's built into GitHub. All of the site pages are in the
`docs/` directory. This readme file and the resource template are in the main
branch.

You don't need to install Jekyll on your machine in order to submit a resource
to the archive, but the benefit of installing is that you'll be able to see
exactly what your submission will look like on the live site and correct any
bugs.

To submit a resource, make a copy of
**[`resourcetemplate.md`](https://github.com/creativecommons/cc-resource-archive/blob/main/resourcetemplate.md)**
and change the values for each field accordingly. The space below the front
matter is freeform, for providing additional information or links. The resource
template also includes explanations of each of the fields.

You can create a resource page in html, markdown, or textile, using the
extensions `.html`, `.md`, or `.textile`. For consistency and understandability
use entire title as the filename and permalink, i.e.:

**Title: Creative Commons Kiwi**
permalink: /creative-commons-kiwi/
File: creative-commons-kiwi.textile

**Title: Six licenses for sharing your work**
permalink: /six-licenses-for-sharing-your-work/
File: six-licenses-for-sharing-your-work.html


### Category URLs

You can format the `resources.creativecommons.org/all?` URL to show any
category or combination of categories you want. For example, videos available
in English about licenses:

http://resources.creativecommons.org/all/?&topic=licenses&medium=video&language=en

You can use any category that's listed in one or more resources pages, not just
the ones available in the menu on "all." For example, resources about music:

http://resources.creativecommons.org/all/?&topic=music

It will also be trivial to create an RSS feed for any category or combination
of categories - for example, to create a feed of all resources available in
Spanish for embedding in an affiliate site. If you need one, submit an issue
through GitHub.


### The index page

The index page pulls up to 16 featured items. Each featured page has a
"featured" variable. The number is the order in which they should appear.


### Menu categories

The list of topics, media, and languages on the homepage is dictated by the
three respective `.yml` files in the `_data/` folder. For each category, we
provide a capitalized name and a lowercase string with no punctuation. For
example:

- name: Licenses
  string: licenses

- name: Public Domain
  string: publicdomain

- name: Open Educational Resources
  string: oer

The reason for setting it up this way is that the "string" value is what's used
in the URLs and CSS classes. It's also what you use in the resource page itself
to identify the category. So these should be relatively short, but still
sensical.


## Local Development

Local development can be previewed by installing Jekyll or by using Docker. We
think the latter experience is easier to setup with more consistent behavior.

### Jekyll setup

1. [Install Ruby Installer](https://rubyinstaller.org/downloads/)
2. To confirm the installation, in your terminal, change directory to where you have cloned this repository
   (or a fork of it)
   ```shell
   ruby -v
   gem -v
   ```
3. **To install bundler jekyll:**
  ```shell
    gem install bundler jekyll
   ```
4. **To run the jekyll site :**
  ```shell
   jekyll serve
   ```
   -The server may be slow .It will take some time to run 

For detailed explaination of setting up github pages locally using Jekyll
1. https://training.nih-cfde.org/en/latest/General-Tools/Web-Development/Jekyll_Tutorial/#step-2-build-jekyll-site-using-template-from-github
2. https://jekyllrb.com/docs/


### Docker Compose setup

1. [Install Docker Engine](https://docs.docker.com/engine/install/)
2. In your terminal, change directory to where you have cloned this repository
   (or a fork of it)
3. **Run the container:**
   ```shell
   docker compose up
   ```
   - This should result in the container being built if it's the first time
   - The docker container may be slow :hourglass_flowing_sand::persevere: When
     it is ready you should see:
     ```
     jekyll-cc-resource-archive  |     Server address: http://0.0.0.0:4000
     jekyll-cc-resource-archive  |   Server running... press ctrl-c to stop.
     ```
   - Once running successfully, you can access the site in your browser at
     [localhost:4000](http://localhost:4000/)
4. **Stop the container:** To stop the app from running, simply open an another
   instance of terminal and type
   ```shell
   docker compose down
   ```
   or you can simply revisit the existing terminal which is running the
   container and type `CTRL + C`


## License


### Code

[`LICENSE`](LICENSE): the code within this repository is licensed under the
Expat/[MIT][mit] license.

[mit]: http://www.opensource.org/licenses/MIT "The MIT License | Open Source Initiative"


### Content/Text

[![CC BY 4.0 license button][cc-by-png]][cc-by]

All the content within this repository is licensed under a [Creative Commons
Attribution 4.0 International License][cc-by] unless otherwise specified.

[cc-by-png]: https://licensebuttons.net/l/by/4.0/88x31.png#floatleft "CC BY 4.0 license button"
[cc-by]: https://creativecommons.org/licenses/by/4.0/ "Creative Commons Attribution 4.0 International License"
