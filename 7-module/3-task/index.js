import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.createSlider();
    this.handler();
  }
  createSlider() {
    this.elem = createElement(` <div class="slider">
    <div class="slider__thumb" style="left: 50%;">
      <span class="slider__value">${this.value}</span>
    </div>
    <div class="slider__progress" style="width: 50%;"></div>

     
    <div class="slider__steps">
    </div>
  </div>`);

    let sliderSteps = this.elem.querySelector(".slider__steps");
    for (let i = 0; i < this.steps; i++) {
      let span = document.createElement("span");
      span.setAttribute("data-id", i);
      if (i === this.value) {
        span.classList.add("slider__step-active");
      }
      sliderSteps.append(span);
    }
    const segments = this.steps - 1;
    const valuePercents = (this.value / segments) * 100;

    this.elem.querySelector(".slider__thumb").style.left = `${valuePercents}%`;
    this.elem.querySelector(
      ".slider__progress"
    ).style.width = `${valuePercents}%`;
  }

  handler() {
    this.elem.addEventListener("click", (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = this.steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      this.value = value;
      
      let valuePercents = (value / segments) * 100;

      let thumb = this.elem.querySelector(".slider__thumb");
      let progress = this.elem.querySelector(".slider__progress");
      let sliderValue = this.elem.querySelector(".slider__value");
      let sladerStepsColl = this.elem.querySelector('.slider__steps');
      let spanColl = sladerStepsColl.querySelectorAll("span");

      spanColl.forEach(el => el.classList.remove('slider__step-active'));
      spanColl[+value].classList.add('slider__step-active');
      
      let leftPercents = valuePercents;  

      sliderValue.innerHTML = value;
      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

      let customEvent = new CustomEvent("slider-change", {
        
        detail: this.value,  
        bubbles: true,  
      });

      this.elem.dispatchEvent(customEvent);
    });
  }
}
