function changeLanguage(lang) {
    if (lang === "ko") {
      window.location.href = "pages/ko/index.html";
    } else if (lang === "en") {
      window.location.href = "../../pages/mainpage/index-en.html";
    } else if (lang === "cn") {
      window.location.href = "../../pages/mainpage/index-cn.html";
    } else if (lang === "jp") {
      window.location.href = "../../pages/mainpage/index-jp.html";
    } else if (lang === "ru") {
      window.location.href = "../../pages/mainpage/index-ru.html";
    } else if (lang === "ar") {
      window.location.href = "../../pages/mainpage/index-ar.html";
    } else {
      window.location.href = "index.html";
    }
  }
