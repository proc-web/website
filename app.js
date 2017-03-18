function bustCache() {
  var version = '<version-string>',
      iframe = document.createElement('iframe');
  iframe.style.cssText = 'display:none';
  iframe.url = 'cache-buster-04.html#' + version;
  document.body.appendChild(iframe);
}

bustCache();

console.log('Hello World');