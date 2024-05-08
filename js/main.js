// navbarChangeColor //

let navbar = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 290) {
    navbar.classList.add("top");
  } else {
    navbar.classList.remove("top");
  }
});

// تحديد الروابط
var homeLink = document.getElementById("homeLink");
var aboutLink = document.getElementById("aboutLink");
var servicesLink = document.getElementById("servicesLink");
var articlesLink = document.getElementById("articlesLink");

// إضافة مُعالج الحدث لكل رابط
homeLink.addEventListener("click", function () {
  // إزالة الـ "class" النشطة من جميع الروابط
  removeActiveClassFromAllLinks();
  // إضافة الـ "class" النشطة للرابط الحالي
  homeLink.classList.add("active");
});

aboutLink.addEventListener("click", function () {
  removeActiveClassFromAllLinks();
  aboutLink.classList.add("active");
});

// scroll buttun عنا //

aboutLink.onclick = () => {
  window.scrollTo({
    left:0,
    top:1450,
    behavior:"smooth",
  })
};

// scroll buttun عنا //

servicesLink.addEventListener("click", function () {
  removeActiveClassFromAllLinks();
  servicesLink.classList.add("active");
});

articlesLink.addEventListener("click", function () {
  removeActiveClassFromAllLinks();
  articlesLink.classList.add("active");
});

// دالة لإزالة الـ "class" النشطة من جميع الروابط
function removeActiveClassFromAllLinks() {
  homeLink.classList.remove("active");
  aboutLink.classList.remove("active");
  servicesLink.classList.remove("active");
  articlesLink.classList.remove("active");
}
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
