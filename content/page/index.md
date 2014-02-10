Title: Home
Date: Sun Feb 09 2014 15:04:58 GMT-0600 (CST)
Description: 
Status: Published
Order: 1
--META--

# A Static Site Generator With Magic Fairy Dust

Rufio is a static site generator built on top of Node.  The goal of Rufio is to make it easy to create a website with structured content and publish it anywhere.  Rufio gets things setup and then get out of your way by making very few assumptions about how you should to work with your content.  Rufio's specialty is creating single page applications using the JSON plugin and a front-end framework like Angular.  Rufio also comes with a server plugin which allows developers to create dynamic functionally on top of Express.

## Configuration

Rufio uses one configuration file, `rufio.json`, which is located in the root of your site.  Almost everything in a Rufio site is configurable through this file.  You can configure directories, provide global configurations values, include plugins and change url structures.  Check out the [configuration for this site](https://github.com/wesleytodd/rufiojs.com/blob/master/rufio.json) on GitHub for an example.

## Content

Content types in Rufio are completely configurable.  They are defined in the `rufio.json` file under the types key.  Content types can have an unlimited number of items, which are defined simply by creating a file in the content directory for that type.

Content items are text files in a content directory.  Example of a content item is a page or a post.  Most basic content items will be markdown format, but with filters can be any format you like.

## Plugins

Rufio has a plugin architecture which allows for developers to create re-usable functionality from site to site.  Plugins can be found and installed via npm, `npm install --save rufio-rss`.  Here are some basic plugins:

- [RSS Feeds Generator](https://github.com/wesleytodd/rufio-rss)
- [JSON Writer](https://github.com/wesleytodd/rufio-json)
- [Google Analytics](https://github.com/wesleytodd/rufio-google-analytics)

## Assets

Rufio creates a Gruntfile for you when you scaffold the site.  This Gruntfile has most of the common needs for asset compilation.  It has support for Sass/Compass, minifying your css, js and html, compressing your images and svg's, and building your Rufio content.  The default task will do all of the above and output it to the active build directory.
