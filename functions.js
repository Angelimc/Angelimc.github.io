function ShowContent(content) {
  document.getElementById("home").style.display = 'none';
  document.getElementById("projects").style.display = 'none';
  document.getElementById("resume").style.display = 'none';
  document.getElementById(content).style.display = 'block';
}
