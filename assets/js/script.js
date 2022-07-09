var searchTerm = "jones";

function getApi() {
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

getApi();


function getApi2() {
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

getApi2();
console.log("wellwellwell");
