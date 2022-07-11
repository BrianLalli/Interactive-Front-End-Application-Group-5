const stateSelect = $("#states");
stateSelect.on("change", changeHandler);

function changeHandler() {
  const state = stateSelect.val();
  localStorage.setItem("state", state);
}
const x = localStorage.getItem("state");
stateSelect.val(x);



propubApi();
fecApiStateSearch(stateSelect.val());
