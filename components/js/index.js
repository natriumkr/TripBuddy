$(function() {
  $("#header").load("../html/header.html");
});


function changeLanguage(lang) {
    if (lang === "ko") {
      window.location.href = "../../pages/ko/index.html";
    } else if (lang === "en") {
      window.location.href = "../../pages/en/index.html";
    } else if (lang === "cn") {
      window.location.href = "../../pages/cn/index.html";
    } else if (lang === "jp") {
      window.location.href = "../../pages/jp/index.html";
    } else if (lang === "ru") {
      window.location.href = "../../pages/ru/index.html";
    } else if (lang === "ar") {
      window.location.href = "../../pages/ar/index.html";
    } else {
      window.location.href = "index.html";
    }
  }
