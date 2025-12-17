//your JS code here. If required.
const button = document.querySelector('input[type="button"]');

button.addEventListener("click", () => {
  const select = document.getElementById("colorSelect");

  select.remove(select.selectedIndex);
});
