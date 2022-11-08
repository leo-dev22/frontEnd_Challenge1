const menuToggle = document.querySelector('.menu-toggle');

const navigation = document.querySelector(".menu-list");
console.log(navigation)
 
// console.log(navigation, mobileToggle);
menuToggle.addEventListener("click", () => {
  const visibility = navigation.getAttribute("data-visible");
   console.log(visibility);
  if (visibility === "false") {
    navigation.setAttribute("data-visible", true);
    menuToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    navigation.setAttribute("data-visible", false);
    menuToggle.setAttribute("aria-expanded", false);
  }
});
