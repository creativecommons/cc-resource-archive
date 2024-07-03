// This is the JavaScript code for listing of filtered resources in the "all.html" page.
// The all.html page is based on the layout listing.html

//Valid filter inputs for the URL parameters
const validTopics = [
  "licenses" , "publicdomain", "oer", "oa", "openscience", "openpolicy", "opendata"
];

const validMedia = [
  "print", "video", "infographic", "website", "course", "slides"
];

const validLanguages = [
  "ar", "de", "en", "fr", "hy", "it", "ja", "ko", "lg", "mn", "pl", "ro", "ru", "sv", "tl" 
];

// Function to get the selected filters for Topic, Medium and Language
function getUrlVars() {
  const vars = {};
  const filterString = window.location.search.slice(1); // slice(1) removes the "?" from window.location.search
  const hashes = filterString.split("&");

  hashes.forEach((hash) => {
    const [key, value] = hash.split("=");
    vars[key] = value;
  });

  return vars;
}

// assigning variable to the filters selected by user (retrieved by getUrlVars)
const { topic, language, medium } = getUrlVars();

// Declaring valid variables for topic, medium and languages
let validTopic;
let validMedium;
let validLanguage;
// Checking if the user-entered values match with the valid filter values
if (validTopics.includes(topic)){
  validTopic = topic;
}

if (validMedia.includes(medium)){
  validMedium = medium;
}

if (validLanguages.includes(language)){
  validLanguage = language;
}

// Setting every thumbnailbox to display:none by creating a new element "dynamicStyle".
// This "dynamicStyle" element can be used to create all the dynamic styles.
const dynamicStyle = document.createElement("style");
dynamicStyle.type = "text/css";
dynamicStyle.innerHTML = ".thumbnailbox { display: none; }";
document.head.appendChild(dynamicStyle);

// If no filter is selected, display all the resources by "display:block"
if (!validTopic && !validMedium && !validLanguage) {
  dynamicStyle.innerHTML += " .thumbnailbox { display: block; }";
} else {
  // If filter(s) is/are selected, display all the resources which have all the filters
  let selectedFilters = "";
  if (validTopic) {
    selectedFilters += `.${validTopic}`;
  }
  if (validMedium) {
    selectedFilters += `.${validMedium}`;
  }
  if (validLanguage) {
    selectedFilters += `.${validLanguage}`;
  }
  dynamicStyle.innerHTML += `${selectedFilters} { display: block; }`;
}

// If user has selected some Topic filter, add class resourcenavtopicknown with "display:block".
// Otherwise, add class resourcenavtopicunknown with "display:block"
// This is for displaying the list of available filters to be selected from
let isFilterSelected = "";
if (validTopic) {
  isFilterSelected += " .resourcenavtopicknown";
} else {
  isFilterSelected += " .resourcenavtopicunknown";
}
if (validMedium) {
  isFilterSelected += ", .resourcenavmediumknown";
} else {
  isFilterSelected += ", .resourcenavmediumunknown";
}
if (validLanguage) {
  isFilterSelected += ", .resourcenavlanguageknown";
} else {
  isFilterSelected += ", .resourcenavlanguageunknown";
}
dynamicStyle.innerHTML += `${isFilterSelected} { display: block; }`;
