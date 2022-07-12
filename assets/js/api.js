// FEC-------------------------------------------

function fecApiStateSearch(stateCode) {
  var requestURL =
    "https://api.open.fec.gov/v1/candidates/search/?state=" +
    stateCode +
    "&api_key=XOqxKwdKYFd2FoLmHqrB69B1wFom8jVX9phrLv2D";
  console.log(stateCode);
  window.stateCode = stateCode;

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.results);
      for (var i = 0; i < data.results.length; i++) {
        console.log(data.results[i].name);
        stateResults.append(`
        <li>${data.results[i].name}</li>
        <button id=${data.results[i].candidate_id} data-year=${data.results[i].active_through}>Show Me the Money!</button>
        `);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}
// BUTTON CLICK-------------------

function showMoney(event) {
  event.preventDefault();
  console.log(event.target.id);
  propubApi(event.target.id, event.target.dataset.year);
  var requestURL =
    "https://api.open.fec.gov/v1/candidate/" +
    event.target.id +
    "/totals/?sort_nulls_last=false&page=1&sort_null_only=false&sort=-cycle&api_key=DEMO_KEY&sort_hide_null=false&per_page=20";

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.results);
      // for (var i = 0; i < data.results.length; i++) {
      //   console.log(data.results[i].contributions);

      infoDisplay.append(`
    <h1>$${data.results[0].contributions}</h1>`);

      // }
    });
}
// PROPUBLICA----------------

var stateCode = $("#state");
function propubApi(candidateId, year) {
  const requestURL =
    "https://salty-mountain-68764.herokuapp.com/https://api.propublica.org/campaign-finance/v1/" +
    year +
    "/candidates/" +
    candidateId +
    ".json";

  console.log(stateCode);
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
      console.log(data.results);
      for (var i = 0; i < data.results.length; i++) {
        console.log(data.results[i].fec_uri);
      }
      infoDisplay.append(`
    <a>${data.results[0].fec_uri}</a>`);
    })

    .catch(function (error) {
      console.error(error);
    });
}

$("#stateResults").on("click", showMoney);
