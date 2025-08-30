const planListItem = document.querySelectorAll(".plan-list__item");
const inputListCheckboxItem = document.querySelectorAll(".checkbox-list__item");

inputListCheckboxItem.forEach((e) => {
  e.addEventListener("click", () => {
    inputListCheckboxItem.forEach((elemet) => {
      elemet.classList.remove("checkbox-list__item--active");
    });
    e.classList.add("checkbox-list__item--active");
  });
});

planListItem.forEach((item) => {
  item.addEventListener("click", () => {
    planListItem.forEach((elemet) => {
      elemet.classList.remove("plan-checkbox--active");
      const icon = elemet.querySelector(".plan-checkbox__check-icon");
      icon?.classList.remove("check-icon--active");
    });
    item.classList.add("plan-checkbox--active");
    const activeIcon = item.querySelector(".plan-checkbox__check-icon");
    activeIcon?.classList.add("check-icon--active");
  });
});
