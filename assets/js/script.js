const stateSelect = $("#states");
stateSelect.on("change", changeHandler);
const stateResults = $("#stateResults");
// const nameDisplay = $("#nameDisplay")
const contributionAmount = $("#contributionAmount")
// const financeLink = $("#financeLink")
const infoDisplay = $("#infoDisplay")

function changeHandler() {
  const state = stateSelect.val();
  localStorage.setItem("state", state);
}
const x = localStorage.getItem("state");
stateSelect.val(x);


propubApi(stateSelect.val());
fecApiStateSearch(stateSelect.val());
