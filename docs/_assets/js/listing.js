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


// If no filter is selected, display all the resources by "display:block"
if (!topic && !medium && !language) {
    dynamicStyle.innerHTML += ' .thumbnailbox { display: block; }';
  } 
else {
    // If filter(s) is/are selected, display all the resources which have all the filters
    let selectedFilters = '';
    if (topic) {
      selectedFilters += `.${topic}`;
    }
    if (medium) {
      selectedFilters += `.${medium}`;
    }
    if (language) {
      selectedFilters += `.${language}`;
    }
    dynamicStyle.innerHTML += `${selectedFilters} { display: block; }`;
}

// If user has selected some Topic filter, add class resourcenavtopicknown with "display:block".
// Otherwise, add class resourcenavtopicunknown with "display:block"
// This is for displaying the list of available filters to be selected from
let isFilterSelected = '';
if (topic) {
  isFilterSelected += ' .resourcenavtopicknown';
} else {
  isFilterSelected += ' .resourcenavtopicunknown';
}
if (medium) {
  isFilterSelected += ', .resourcenavmediumknown';
} else {
  isFilterSelected += ', .resourcenavmediumunknown';
}
if (language) {
  isFilterSelected += ', .resourcenavlanguageknown';
} else {
  isFilterSelected += ', .resourcenavlanguageunknown';
}
dynamicStyle.innerHTML += `${isFilterSelected} { display: block; }`;
