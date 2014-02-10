Title: Getting Started
Date: Sun Feb 09 2014 19:46:43 GMT-0600 (CST)
Description: 
Status: Published
Order: 2
--META--

Rufio has a Yeoman generator which is used to scaffold out the site as well as create new content items and themes.  So to get started, install it globally:

```
$ [sudo] npm install -g generator-rufio
```

Now you can create your first Rufio site, hop on the command line and fire up yo:

```
$ yo rufio
```

This command will prompt you for some information to build your site, answer those questions and then let the generator complete.  It will set you up with the default `rufio.json`, the standard directory configuration and a default theme.  That `rufio.json` file looks like this:

```
{
  "title": "Your New Rufio Site",
  "hostname": "example.com",
  "author": "Your Name",
  "tagline": "An awesome site",
  "titleFormat": "<%= meta.title %> - <%= global.title %> - <%= global.tagline %>",
  "dateFormat": "MM-DD-YY",
  "types": {
    "page": {
      "directory": "content/page",
      "permalink": "/<%= meta.slug %>.html",
      "filters": "template,markdown",
      "jsonPermalink": "/<%= type %>/<%= meta.slug %>.json"
    },
    "post": {
      "directory": "content/post",
      "permalink": "/<%= meta.date.year() %>/<%= meta.date.month() %>/<%= meta.slug %>.html",
      "filters": "template,markdown",
      "jsonPermalink": "/<%= type %>/<%= meta.slug %>.json"
    }
  },
  "themes": {
    "directory": "themes",
    "active": "default"
  },
  "media": {
    "directory": "media"
  },
  "build": {
    "directory": "build",
    "active": "active"
  },
  "plugins": {
    "active": [
      "json"
    ]
  },
  "rufio": {
    "metaEnd": "--META--"
  }
}
```

As you can see, there are two types defined, `page` and `post`.  These are common examples to get you going, but you can define any custom types you want.  Your first page is also created for you, which you can find in `content/page/`.  Content items have two parts, meta data and content, which are split by a token defined in the `rufio.json` as `rufio.metaEnd`.  Your first page looks like this:

```
Title: Home
Date: Sun Feb 09 2014 15:04:58 GMT-0600 (CST)
Description: 
Status: Published
--META--

# Home

Welcoe to your new Rufio site.
```

The part above the `--META--` token is parsed as key/value pairs and are accessable in templates.  The part below is the content of the item, which is process with the filters defined in the configuration file.

To build your site you can use the Grunt task, which will build all the content items, as well as process your sites assets.  In your site root just run `grunt`.  This will build your site into the build directory under the active version specified in the `rufio.json`.

Now all you have to do is get a server going.  Lickily rufio comes with a node server, so just type `rufio serve` and point your borwser to `http://localhost:8080` to check out your new site.
