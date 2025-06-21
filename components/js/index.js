function changeLanguage(lang) {
    if (lang === "ko") {
      window.location.href = "../../pages/mainpage/ko/index.html";
    } else if (lang === "en") {
      window.location.href = "../../pages/mainpage/en/index.html";
    } else if (lang === "cn") {
      window.location.href = "../../pages/mainpage/cn/index.html";
    } else if (lang === "jp") {
      window.location.href = "../../pages/mainpage/jp/index.html";
    } else if (lang === "ru") {
      window.location.href = "../../pages/mainpage/ru/index.html";
    } else if (lang === "ar") {
      window.location.href = "../../pages/mainpage/ar/index.html";
    } else {
      window.location.href = "index.html";
    }
  }
