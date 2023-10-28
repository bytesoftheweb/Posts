const toggleButton = document.querySelector(".navigation-toggle");
const toggleNavbar = document.querySelector(".navigation");
// Check if elements are found in the DOM
if (toggleButton && toggleNavbar) {
  toggleButton.addEventListener("click", () => {
    // Toggle the 'active' class on the target element
    toggleNavbar.classList.toggle("active");
  });
}
// Listener to handle window resize events
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    // If the viewport is more than 1024px wide, we assume the dropdown is visible
    toggleNavbar.classList.remove("active");
  }
});
