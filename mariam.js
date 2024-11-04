function toggleMenu() {
  const navBar = document.getElementById("nav-bar");
  const cancelBtn = document.getElementById("cancel-btn");
  const navLinks = document.getElementById("nav-links");

  // Check if navLinks is currently visible
  if (navLinks.style.display === "block" || navLinks.style.display === "") {
    navLinks.style.display = "none";
    navBar.style.display = "inline";
    cancelBtn.style.display = "none";
  } else {
    navLinks.style.display = "block";
    navBar.style.display = "none";
    cancelBtn.style.display = "inline";
  }
}
