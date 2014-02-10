Title: Themes
Date: Sun Feb 09 2014 22:05:08 GMT-0600 (CST)
Description: 
Status: Published
Order: 5
--META--

Rufio themes are pretty simple.  They are basically a set of Lodash templates bundled with assets.  If you are familiar with WordPress themes, then you should be very comfortable with a Rufio theme.  A Rufio theme is responsible for installing all of it's assets, and so will often contain a `bower.json` file.  The default theme looks like this:

```
|- images/
|- js/
|- scss/
|- filters/
|  |- navList.js
|- partials/
|  |- footer.html
|  |- header.html
|  |- livereload.html
|  |- oldie.html
|  |- scripts.html
|  |- styles.html
|- bower.json
|- index.html
|- page.html
|- post.html
```

Content types load the templates in a hierarchy very similarly to WordPress.  So as you can see our default theme defined a custom page and post template.  If Rufio cannot find a template for the given type, it will fall back to the `index.html`.

Inside a template you have access to all of the Rufio API's and all of the compiled content data.  Here is an example of a basic content type template:

```html
<%= include('partials/header.html') %>
	<div class="content">
		<header class="page-header">
			<h1><%- meta.title %></h1>
		</header>
		<section class="page-content">
			<%= content %>
		</section>
	</div>
<%= include('partials/footer.html') %>
```

The item's meta data is available under the `meta` key, so you can access the item's title like this: `meta.title`.  The item's content is in the `content` key, which has been parsed with the type's content filters.  Rufio also provides a shortcut to the `include` filter to easily pull in template partials.  In this example, we include `partials/header.html`, which is resolved relative to the theme root directory.  Lets take a look at that partial:

```html
<!DOCTYPE html>
<html class="no-js" lang="en">
    <head>
        <meta charset="utf-8">
        <title><%- meta.title %></title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<link rel="shortcut icon" href="/v/<%= config.get('build:active') %>/images/favicons/favicon.ico"/>
		<link rel="canonical" href="<%- meta.absUrl %>" />
		<meta name="description" content="<%- meta.description %>">
		<%= include('partials/styles.html') %>
		<%= include('partials/scripts.html') %>
    </head>
    <body>
		<%= include('partials/oldie.html') %>
		<header id="navigation">
			<a href="#navigation" class="open">Open Navigation</a>
			<nav class="page-nav">
				<div class="page-nav-inner">
					<h1 class="page-logo"><a href="/index.html" title="<%- config.get('hostname') %> - <%- config.get('tagline') %>"><%- config.get('hostname') %> - <%- config.get('tagline') %></a></h1>
					<%= filters.apply('navList', { items: types.page.items, classes: 'pages', sortBy: 'order' }) %>
				</div>
			</nav>
		</header>
```

This template shows off quite a few more features available in the template system.  We have access to the configuration values, `config.get('build:active')`, so we can reference anything from the `rufio.json` file.  Also, you can include partials inside partials, partial inception :).  You can see us applying a filter to output the nav list.  Any available filter can be called inside a template to modify the content, you can think of these filters like helper functions which can be used to do all sorts of things.  In the navList filter we pass a configuration object:

```
filters.apply('navList', {
	items: types.page.items,
	classes: 'pages',
	sortBy: 'order'
	sortOrder: 'asc'
});
```

In this expanded example, we show all the options available in the navList filter.  We pass in the page items from the compiled site data and some other options for how to output the navigation list.  This is a good example of the things you can do with a filter function that is beyond just modifying a string.
