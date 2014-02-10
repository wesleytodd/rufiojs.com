Title: Filters
Date: Sun Feb 09 2014 22:58:08 GMT-0600 (CST)
Description: 
Status: Published
Order: 6
--META--

Rufio uses filters to transform the content.  There are many filters included by default in Rufio, but you can also define your own.  A filter is simply a function that takes content as the first argument and returns the transformed content.  New filters can be defined by adding a file to your site or theme's filters directory.  The default theme comes with a `navList` filter which takes a set of items and outputs a list of links.  There are also a set of lower level filters in Rufio core:

- camel: Camel cases a string
- date: Takes a date and returns a [Moment.js](http://momentjs.com/) object
- include: Includes a template file, parses the included file with the template filter
- json: JSON Stringify's an object
- lcFirst: Lower cases the first character of a string
- markdown: Parses the content with [marked](https://github.com/chjj/marked)
- status: Filters the status through a defined list of statuses
- template: Passes content and an optional data object to [Lodash's template function](http://lodash.com/docs#template)
- ucFirst: Uppercases the first character of a string

Here is the source from the date filter as an example of how a filter works:

```javascript
var moment = require('../lib/util').moment;

module.exports = function(date, format) {
	return moment(date, format);
};
```

The filter should export a function which will take the content and any extra options you might need.  This one takes the date object or string, and an optional format to ouput.  It wraps the date in the [Moment library](http://momentjs.com/) and return the new date.  If the format was passed, moment will just return the date formatted as specified in the format, otherwise it will return the wrapped date object.  This is a simple filter that just does a small transformation, but what about something more advanced?  Here is the source for the navList filter found in the default theme:

```javascript
module.exports = function(options) {

	// Defaults
	options.items = options.items || [];
	options.limit = options.limit || 10;
	options.classes = options.classes || '';
	options.sortBy = options.sortBy || 'date';
	options.sortOrder = options.sortOrder || 'asc';

	// Sort in reverse cron order
	options.items.sort(function(a, b) {
		if (options.sortOrder == 'desc') {
			return b.meta(options.sortBy) - a.meta(options.sortBy);
		}
		return a.meta(options.sortBy) - b.meta(options.sortBy);
	});

	// Generate markup
	var out = '<nav class="' + options.classes + '"><ul>';
	var c = 0;
	for (var i in options.items) {
		if (i < options.limit && this.ENVIRONMENT == 'dev' || options.items[i].meta('status') == 'Published') {
			out += '<li><a href="' + options.items[i].meta('permalink') + '">' + options.items[i].meta('title') + '</a></li>';
			c++;
		}
	}
	out += '</ul></nav>';

	// Return string
	return out;
};
```

This filter takes an options object as the first paramater.  It uses these options to build a navigation list string with the provided items.  We have access to the Rufio instance because the filter function is bound to the Rufio instance, so you can do things like access the environment, `this.ENVIRONMENT == 'dev'`.
