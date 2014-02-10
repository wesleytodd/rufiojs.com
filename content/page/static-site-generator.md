Title: Why A Static Site Generator
Date: Sun Feb 09 2014 19:24:00 GMT-0600 (CST)
Description: 
Status: Published
Order: 3
--META--

Back in the day, a website was just a set of html files, and it was fantastic, fast and relatively simple to manage with tools like Dreamweaver.  Then things got complicated, CMS's became the norm.  To get a website running you needed a database, server side scripting language, complicated web server configurations and a lot more knowledge about how to manage these things.  With tools like WordPress and Drupal, web developers were able to construct dynamic websites. But with this power comes a lot of other issues, performance and security concerns become very important.  

## Performance

Most traditional CMS's are powered by a database and a scripting language like PHP.  When a request comes in for a page, all the data for that page is assembled and then a static html page is delivered back.  Every time that page is requested the server goes through the same process to construct the page.  Seems wasteful, right?  There are methods for mitigating this, caching being the most important and widely used.  But even with caching, the performance of a scripting language is nowhere near that of serving a static file.

## Security

With a platform like WordPress which is open-source and widely used, security vulnerabilities are found all the time.  If you have managed many WordPress sites you can probably attest to the fact that hackers prey on out of date installations.  So if you let your site go without updates you can become a host to maleware or loose your database to a malicious hacker.  Specially crafted requests that exploit the features of the CMS can be sent to your server at any time.  Static files, on the other hand, are not vulnerable to these kind of attacks.  The only way a hacker can gain access to the server of a static site is through the underlying server technology.  Servers like Nginx and Apache are generally considered very secure.

