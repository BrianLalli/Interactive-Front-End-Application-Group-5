function propubApi() {
  var requestURL =
    "https://salty-mountain-68764.herokuapp.com/https://api.propublica.org/campaign-finance/v1/2016/candidates/search.json?query=Wilson";

  fetch(requestURL, {
    method: "GET",
    headers: {
      "X-API-KEY": "E6u8viCVj13rNseXzDKAbmffq8AfGmvQgHmXl687",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

function fecApiNameSearch(searchTerm = "jones") {
  var requestURL =
    "https://api.open.fec.gov/v1/names/candidates/?q=" +
    searchTerm +
    "&api_key=XOqxKwdKYFd2FoLmHqrB69B1wFom8jVX9phrLv2D";
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

async function fecApiStateSearch(stateCode) {
  var requestURL =
    "https://api.open.fec.gov/v1/candidates/search/?state=" +
    stateCode +
    "&api_key=XOqxKwdKYFd2FoLmHqrB69B1wFom8jVX9phrLv2D";
    fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

