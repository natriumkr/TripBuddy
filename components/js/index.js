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


  const recommendedPlans = [
  {
    name: "서울",
    imageUrl: ""
  },
  {
    name: "부산",
    imageUrl: ""
  },
  {
    name: "제주도",
    imageUrl: ""
  }
];

recommendedPlans.forEach((plan, index) => {
  const card = document.querySelectorAll(".destinations-grid .card")[index];
  if(card) {
    card.innerHTML = `
      <img src="${plan.imageUrl}" alt="${plan.name}" style="width:100%; height:auto; border-radius: 8px;" />
      <h3>${plan.name}</h3>
    `;
  }
});
