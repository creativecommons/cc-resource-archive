Welcome to the CC Resources Archive. The idea of this project is to have a simple, easy-to-update area for keeping track of all of the useful resources that people make about Creative Commons licenses and open content topics in general. The live site is it [http://resources.creativecommons.org/](http://resources.creativecommons.org/).

How it works
===================

The website is built using [Jekyll](http://jekyllrb.com/docs/home/
), a simple templating system that's built into Github. All of the site pages are in the gh-pages branch. This readme file and the resource template are in the master branch.

You don't need to install Jekyll on your machine in order to submit a resource to the archive, but the benefit of installing is that you'll be able to see exactly what your submission will look like on the live site and correct any bugs.

To submit a resource, make a copy of **resourcetemplate.md** and change the values for each field accordingly. The space below the front matter is freeform, for providing additional information or links. The resource template also includes explanations of each of the fields.

You can create a resource page in html, markdown, or textile, using the extensions ".html," ".md," or ".textile." For consistency and understandability use entire title as the filename and permalink, i.e.:

**Title: Creative Commons Kiwi**
permalink: /creative-commons-kiwi/
File: creative-commons-kiwi.textile

**Title: Six licenses for sharing your work**
permalink: /six-licenses-for-sharing-your-work/
File: six-licenses-for-sharing-your-work.html


Category URLs
===================

You can format the "resources.creativecommons.org/all?" URL to show any category or combination of categories you want. For example, videos available in English about licenses:

http://resources.creativecommons.org/all/?&topic=licenses&medium=video&language=en

You can use any category that's listed in one or more resources pages, not just the ones available in the menu on "all." For example, resources about music:

http://resources.creativecommons.org/all/?&topic=music

It will also be trivial to create an RSS feed for any category or combination of categories - for example, to create a feed of all resources available in Spanish for embedding in an affiliate site. If you need one, submit an issue through Github.


The index page
===================

The index page pulls up to 16 featured items. Each featured page has a "featured" variable. The number is the order in which they should appear.


Menu categories
===================

The list of topics, media, and languages on the homepage is dictated by the three respective .yml files in the /_data/ folder. For each category, we provide a capitalized name and a lowercase string with no punctuation. For example:

- name: Licenses
  string: licenses
  
- name: Public Domain
  string: publicdomain
  
- name: Open Educational Resources
  string: oer
  
The reason for setting it up this way is that the "string" value is what's used in the URLs and CSS classes. It's also what you use in the resource page itself to identify the category. So these should be relatively short, but still sensical.


Last updated April 25, 2014