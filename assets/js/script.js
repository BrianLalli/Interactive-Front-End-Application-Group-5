
var searchTerm = "smith" ;

function getApi() {
  var requestURL= ("https://api.propublica.org/campaign-finance/%7Bversion%7D/")
  


     

  fetch (requestURL,{
    headers :  {
      "X-API-Key": "E6u8viCVj13rNseXzDKAbmffq8AfGmvQgHmXl687"
      
    }
  })

  .then(function (response) {
    return response.json();
  })
  .then(function (data){
    console.log(data)
  
}) 
}

getApi()

console.log("---------------")
function getApi2() {
var requestURL= ("https://api.open.fec.gov/v1/names/candidates/?q=" + searchTerm + "&api_key=XOqxKwdKYFd2FoLmHqrB69B1wFom8jVX9phrLv2D")
fetch (requestURL)
.then(function (response) {
     
      return response.json();
    })
    .then(function (data){
      console.log(data)

})
    }




getApi2()
console.log ('wellwellwell') ;




function redirect(event) {
  event.preventDefault();
  console.log(event);
  let url = "https://github.com/BrianLalli/Show-Me-The-Money";
  window.location.replace(url);
}
document.getElementById("#GitHub").onclick = function () {
  location.href = "https://github.com/BrianLalli/Show-Me-The-Money";
};
