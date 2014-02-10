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
