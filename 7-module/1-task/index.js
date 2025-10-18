import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
  }
  createRibbon() {
    this._elem = createElement(`<div class="ribbon"></div>`);

    let leftArrowButton = this.createButton();
    leftArrowButton.classList.add("ribbon__arrow_left");

    let rightArrowButton = this.createButton();
    rightArrowButton.classList.add(
      "ribbon__arrow_right",
      "ribbon__arrow_visible"
    );

    let ribbonInner = this.createRibbonInner();

    this._elem.append(leftArrowButton);
    this._elem.append(ribbonInner);
    this._elem.append(rightArrowButton);

    this._elem.addEventListener("click", (event) => {
      if (event.target.closest(".ribbon__arrow_right")) {
        ribbonInner.scrollBy(350, 0);
      }
      if (event.target.closest(".ribbon__arrow_left")) {
        ribbonInner.scrollBy(-350, 0);
      }
      if (event.target.classList.contains("ribbon__item")) {
        event.preventDefault();
        this._elem
          .querySelectorAll(".ribbon__item")
          .forEach((el) => el.classList.remove("ribbon__item_active"));
        event.target.classList.add("ribbon__item_active");

        let myEvent = new CustomEvent("ribbon-select", {
          detail: event.target.dataset.id,
          bubbles: true,
        });
        this._elem.dispatchEvent(myEvent);
      }
    });

    ribbonInner.addEventListener("scroll", () => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollRight =
        ribbonInner.scrollWidth - scrollLeft - ribbonInner.clientWidth;

      scrollLeft === 0
        ? leftArrowButton.classList.remove("ribbon__arrow_visible")
        : leftArrowButton.classList.add("ribbon__arrow_visible");

      scrollRight < 1
        ? rightArrowButton.classList.remove("ribbon__arrow_visible")
        : rightArrowButton.classList.add("ribbon__arrow_visible");
    });
    return this._elem;
  }

  createButton() {
    let button = createElement(`<button class="ribbon__arrow">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`);
    return button;
  }

  createRibbonInner() {
    let bodyNav = document.createElement("nav");
    bodyNav.classList.add("ribbon__inner");
    for (let category of this.categories) {
      let link = createElement(
        `<a href="#" class="ribbon__item" data-id=${category.id}>${category.name}</a>`
      );
      bodyNav.append(link);
    }
    return bodyNav;
  }

  get elem() {
    if (!this._elem) {
      this.createRibbon();
    }
    return this._elem;
  }
}
