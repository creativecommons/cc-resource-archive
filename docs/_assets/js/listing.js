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

// Setting every thumbnailbox to display:none 
const allThumbnailBoxes = document.querySelector('.thumbnailbox')

allThumbnailBoxes.forEach((box)=>{
  box.classList.toggle('hidden', true)
})

// If no filter is selected, display all the resources 
allThumbnailBoxes.forEach((box)=>{
  let matchesFilters = true

  if (topic && !box.classList.contains(topic)){
    matchesFilters = false
  }
  if (medium && !box.classList.contains(medium)) {
    matchesFilters = false;
  }
  if (language && !box.classList.contains(language)) {
    matchesFilters = false;
  }

  box.classList.toggle("hidden", !matchesFilters); 
})
// If user has selected some Topic filter, add class resourcenavtopicknown with "display:block".
// Otherwise, add class resourcenavtopicunknown with "display:block"
// This is for displaying the list of available filters to be selected from
topicKnown.classList.toggle("hidden", !topic);
topicUnknown.classList.toggle("hidden", !!topic);

mediumKnown.classList.toggle("hidden", !medium);
mediumUnknown.classList.toggle("hidden", !!medium);

languageKnown.classList.toggle("hidden", !language);
languageUnknown.classList.toggle("hidden", !!language);
