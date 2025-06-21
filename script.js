const title = document.getElementById("title");
const events = document.getElementById("events");
const selector = document.getElementById("languageSelector");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");
const search_section1 = document.getElementById("search_section1")

function setLanguage(lang) {
  title.textContent = translations[lang].title;
  events.textContent = translations[lang].events;
  header1.textContent = translations[lang].header1;
  header2.textContent = translations[lang].header2;
  search_section1.textContent = translations[lang].search_section1;
  localStorage.setItem("lang", lang); // 저장
}

// 초기 설정
const savedLang = localStorage.getItem("lang") || "ko";
selector.value = savedLang;
setLanguage(savedLang);

// 이벤트 리스너
selector.addEventListener("change", (e) => {
  setLanguage(e.target.value);
});


/* ───────── Helpers ───────── */
const timeline = document.getElementById("timeline");
const libraryItems = document.querySelectorAll(".destination");

function createDay(index) {
  const day = document.createElement("div");
  day.className = "day";
  day.innerHTML = `
    <div class="day-header">Day ${index}</div>
    <div class="slots"></div>
  `;
  timeline.appendChild(day);

  // 기본 3개 슬롯 생성
  const slotsContainer = day.querySelector(".slots");
  for (let i = 0; i < 1; i++) {
    const slot = document.createElement("div");
    slot.className = "slot";
    enableSlotDnD(slot);
    slotsContainer.appendChild(slot);
  }
}

function enableSlotDnD(slot) {
  slot.addEventListener("dragover", (e) => {
    e.preventDefault();
    slot.style.borderColor = "var(--primary)";
  });

  slot.addEventListener("dragleave", () => {
    slot.style.borderColor = "var(--gray)";
  });

  slot.addEventListener("drop", (e) => {
    e.preventDefault();
    slot.style.borderColor = "var(--gray)";

    const text = e.dataTransfer.getData("text/plain");
    if (!text) return;

    const activity = document.createElement("div");
    activity.className = "activity";
    activity.textContent = text;
    activity.setAttribute("draggable", "true");
    activity.addEventListener("dragstart", activityDragStart);
    slot.innerHTML = ""; // 한 슬롯에 하나만 배치 (원하면 수정 가능)
    slot.appendChild(activity);
  });
}

function activityDragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.textContent);
  e.dataTransfer.effectAllowed = "move";
}

// 초기 Day 1, Day 2 생성
for (let i = 1; i <= 2; i++) createDay(i);

// 라이브러리 아이템 드래그 기능 적용
libraryItems.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", item.textContent);
    e.dataTransfer.effectAllowed = "copy";
  });
});

// Day 추가 버튼
document.getElementById("add-day").addEventListener("click", () => {
  createDay(timeline.children.length + 1);
});

// 더블클릭으로 활동 제거
document.addEventListener("dblclick", (e) => {
  if (e.target.classList.contains("activity")) {
    const parentSlot = e.target.parentElement;
    e.target.remove();
    // 빈 슬롯 테두리 다시 보이게
    parentSlot.classList.add("slot");
  }
});