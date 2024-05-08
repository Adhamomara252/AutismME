function toggleSeeMore(contentId) {
  var content = document.getElementById(contentId);
  var moreText = content.querySelector("#more" + contentId.substr(7)); // Remove "content" from contentId to get the id of the more text
  var btnText = content.querySelector("button");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    btnText.textContent = "See less -";
  } else {
    moreText.style.display = "none";
    btnText.textContent = "See more +";
  }
}
let navbar = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 290) {
    navbar.classList.add("top");
  } else {
    navbar.classList.remove("top");
  }
});
