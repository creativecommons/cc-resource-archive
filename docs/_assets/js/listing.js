// This is the JavaScript code for listing of filtered resources in the "all.html" page. 
// The all.html page is based on the layout listing.html


// Function to get the selected filters for Topic, Medium and Language
function getUrlVars() {
    const vars = {};
    const filterString = window.location.search.slice(1);  // slice(1) removes the "?" from window.location.search
    const hashes = filterString.split("&");

    hashes.forEach(hash => {
        const [key, value] = hash.split("=");
        vars[key] = value;
    });

    return vars;
}

// assigning variable to the filters selected by user (retrieved by getUrlVars)
const { topic, language, medium } = getUrlVars();


// Setting every thumbnailbox to display:none by creating a new element "dynamicStyle".
// This "dynamicStyle" element can be used to create all the dynamic styles.
const dynamicStyle = document.createElement('style');
dynamicStyle.type = 'text/css';
dynamicStyle.innerHTML = '.thumbnailbox { display: none; }';
document.head.appendChild(dynamicStyle);

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