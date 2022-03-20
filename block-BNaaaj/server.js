let url = require('url');
let parsedUrl = url.parse(
  'https://airindia.com/fares/calculate?from=delhi&to=detroit'
);
console.log(parsedUrl.query);
console.log(parselUrl.pathname, parselUrl.protocol);
