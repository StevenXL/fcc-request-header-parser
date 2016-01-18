'use strict';

module.exports = function(app) {
  app.route("/api/whoami")
    .get(function(req, res) {
      var ip = req.ip,
          language = parseLanguage(req.get('Accept-Language')),
          software = parseSoftware(req.get('User-Agent'));

      var json = {"ipaddress": ip, "language": language, "software": software};

      res.json(json);
    });
};

function parseLanguage(str) {
  var pattern = /\w{2}-\w{2}/;
  var match = str.match(pattern);

  if (match) {
    return match[0];
  }
}

function parseSoftware(str) {
  var pattern = /\(.+\)/;
  var match = str.match(pattern);

  if (match) {
    return match[0].slice(1, -1);
  }
}
