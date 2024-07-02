function getUrlVars() {
    var vars = [],
      hash;
    var hashes = window.location.href
      .slice(window.location.href.indexOf("?") + 1)
      .split("&");
    for (var i = 0; i < hashes.length; i++) {
      hash = hashes[i].split("=");
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }

  document.write("<style>.thumbnailbox { display: none; }</style>");

  var topic = getUrlVars()["topic"];
  var language = getUrlVars()["language"];
  var medium = getUrlVars()["medium"];

  if (
    topic === undefined &&
    medium === undefined &&
    language === undefined
  ) {
    document.write("<style>.thumbnailbox { display: block; }</style>");
  } else {
    document.write("<style>");
    if (topic != undefined) {
      document.write("." + topic);
    }
    if (medium != undefined) {
      document.write("." + medium);
    }
    if (language != undefined) {
      document.write("." + language);
    }
    document.write(" { display: block; }</style>");
  }

  document.write("<style>");
  if (topic != undefined) {
    document.write(" .resourcenavtopicknown");
  } else {
    document.write(" .resourcenavtopicunknown");
  }
  if (medium != undefined) {
    document.write(", .resourcenavmediumknown");
  } else {
    document.write(", .resourcenavmediumunknown");
  }
  if (language != undefined) {
    document.write(", .resourcenavlanguageknown");
  } else {
    document.write(", .resourcenavlanguageunknown");
  }
  document.write(" { display: block; }</style>");