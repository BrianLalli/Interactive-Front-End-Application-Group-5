// FEC-------------------------------------------

function fecApiStateSearch(stateCode) {
  var requestURL =
    "https://api.open.fec.gov/v1/candidates/search/?state=" +
    stateCode +
    "&api_key=XOqxKwdKYFd2FoLmHqrB69B1wFom8jVX9phrLv2D&sort_hide_null=false&per_page=10";
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
        <button class= buttonStyle id=${data.results[i].candidate_id} data-year=${data.results[i].active_through} data-name=${data.results[i].name}>Show Me the Money!</button>
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
  const contributionResult = document.getElementById("contributionResult");
  if (contributionResult != null) {
    contributionResult.remove();
  }
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
    <h1 id="contributionResult">Latest Active Year Contributions: $${data.results[0].contributions}</h1>`);

      // }
    });
}
// PROPUBLICA----------------

var stateCode = $("#state");
function propubApi(candidateId, year) {
  const urlResultSpan = document.getElementById("urlResultSpan");
  if (urlResultSpan != null) {
    urlResultSpan.remove();
  }
  const urlResult = document.getElementById("urlResult");
  if (urlResult != null) {
    urlResult.remove();
  }
  const nameResult = document.getElementById("nameResult");
  if (nameResult != null) {
    nameResult.remove();
  }
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
    <span id="urlResultSpan">Fiscal Profile:</span>
    <a id="urlResult" href=${data.results[0].fec_uri}>
     ${data.results[0].fec_uri}</a>`);
      infoDisplay.append(`
      <h2 id="nameResult">${data.results[0].name}</h2>`);
    })

    .catch(function (error) {
      console.error(error);
    });
}

$("#stateResults").on("click", showMoney);

// $("").paging({limit:});