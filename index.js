"use strict";
console.log("hello");

const mobileBtn = document.querySelector(".mobile-btn");

const header = document.querySelector(".header");

mobileBtn.addEventListener("click", (event) => {
  header.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      console.log("hehe");
    }

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
      console.log("tete");
    }

    header.classList.remove("nav-open");
  });
});
