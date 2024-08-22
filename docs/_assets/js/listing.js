// This is the JavaScript code for listing of filtered resources in the "all.html" page.
// The all.html page is based on the layout listing.html

//Valid filter inputs for the URL parameters
const validTopics = [
  "licenses",
  "publicdomain",
  "oer",
  "oa",
  "openscience",
  "openpolicy",
  "opendata",
];

const validMedia = [
  "print",
  "video",
  "infographic",
  "website",
  "course",
  "slides",
];

const validLanguages = [
  "ar",
  "de",
  "en",
  "fr",
  "hy",
  "it",
  "ja",
  "ko",
  "lg",
  "mn",
  "pl",
  "ro",
  "ru",
  "sv",
  "tl",
];

// Function to get the selected filters for Topic, Medium and Language
function getUrlVars() {
  const vars = {};
  const filterString = window.location.search.slice(1); // slice(1) removes the "?" from window.location.search
  const hashes = filterString.split("&");

  hashes.forEach((hash) => {
    let validKey;
    let validValue;
    const [key, value] = hash.split("=");
    if (key == "topic" && validTopics.includes(value)) {
      validKey = key;
      validValue = value;
    }

    if (key == "medium" && validMedia.includes(value)) {
      validKey = key;
      validValue = value;
    }

    if (key == "language" && validLanguages.includes(value)) {
      validKey = key;
      validValue = value;
    }
    vars[validKey] = validValue;
  });

  return vars;
}

// assigning variable to the filters selected by user (retrieved by getUrlVars)
const { topic, language, medium } = getUrlVars();

// Function to update the visibility of elements based on filters
function updateVisibility() {

  const thumbnailBoxes = document.querySelectorAll(".thumbnailbox");
  thumbnailBoxes.forEach(box => {
    box.classList.toggle("hidden", true);
  });

if (!topic && !medium && !language) {
  thumbnailBoxes.forEach(box => {
    box.classList.toggle("hidden", false);
  });
} else {
  // If filter(s) is/are selected, display all the resources which have all the filters
  let selectedFilters = "";
  if (topic) {
    selectedFilters += `.${topic}`;
  }
  if (medium) {
    selectedFilters += `.${medium}`;
  }
  if (language) {
    selectedFilters += `.${language}`;
  }
  document.querySelectorAll(selectedFilters).forEach(box => {
    box.classList.toggle("hidden", false);
  });
}

// If user has selected some Topic filter, add class resourcenavtopicknown with "display:block".
// Otherwise, add class resourcenavtopicunknown with "display:block"
// This is for displaying the list of available filters to be selected from
let isFilterSelected = "";
if (topic) {
  isFilterSelected += " .resourcenavtopicknown";
} else {
  isFilterSelected += " .resourcenavtopicunknown";
}
if (medium) {
  isFilterSelected += ", .resourcenavmediumknown";
} else {
  isFilterSelected += ", .resourcenavmediumunknown";
}
if (language) {
  isFilterSelected += ", .resourcenavlanguageknown";
} else {
  isFilterSelected += ", .resourcenavlanguageunknown";
}
document.querySelectorAll(isFilterSelected).forEach(nav => {
  nav.classList.toggle("hidden", false);
});

}

// Initial call to update visibility based on URL parameters
updateVisibility();
