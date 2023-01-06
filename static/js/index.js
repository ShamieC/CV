var sections = document.getElementsByClassName("sections");

function showContent(sectionName) {
  for (section of sections) {
    section.classList.remove("displayed");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(sectionName).classList.add("displayed");
}
