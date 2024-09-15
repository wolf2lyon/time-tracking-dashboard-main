import { FirstCard } from "./components/FirstCard.js";
import { Card } from "./components/Card.js";
import { fetchData } from "./services/apiService.js";

let optionClick = "daily";

const wrapperHtml = document.getElementById("container");
const renderCards = async ({ wrapperHtml, selectTime }) => {
  while (wrapperHtml.children.length > 1) {
    wrapperHtml.removeChild(wrapperHtml.lastChild);
  }
  const data = await fetchData("./../../data.json");
  data.forEach((item) => {
    const timesPeriod = Object.keys(item.timeframes);
    let cardHtml = "";
    timesPeriod.forEach((timePeriod) => {
      if (selectTime === timePeriod) {
        const props = {
          title: item.title,
          current: item.timeframes[timePeriod].current,
          previous: item.timeframes[timePeriod].previous,
        };
        cardHtml = Card(props);
      }
    });
    const cardTemplate = document.createElement("template");
    cardTemplate.innerHTML = cardHtml;
    wrapperHtml.appendChild(cardTemplate.content.firstChild);
  });
};

const firstCard = FirstCard();

const firstCardHtml = document.createElement("template");
firstCardHtml.innerHTML = firstCard;

wrapperHtml.appendChild(firstCardHtml.content.firstChild);

const buttonContainer = document.getElementById("buttons");

buttonContainer.addEventListener("click", (e) => {
  const clickedButton = e.target;
  if (clickedButton.tagName === "BUTTON") {
    optionClick = clickedButton.dataset.value;
    const firstButton = buttonContainer.children[0];
    const secondButton = buttonContainer.children[1];
    const thirdButton = buttonContainer.children[2];
    if (optionClick === "daily") {
      if (!firstButton.classList.contains("text-white")) {
        firstButton.classList.add("text-white");
        secondButton.classList.remove("text-white");
        thirdButton.classList.remove("text-white");
        const cardsLoad = document.querySelectorAll("#card_load");
        cardsLoad.forEach(card => {
          card.classList.remove("hidden")
          card.classList.add("flex")
        })
        setTimeout(()=>{
          renderCards({ wrapperHtml, selectTime: optionClick });
        },2000)
        
      }
    }
    if (optionClick === "weekly") {
      if (!secondButton.classList.contains("text-white")) {
        secondButton.classList.add("text-white");
        firstButton.classList.remove("text-white");
        thirdButton.classList.remove("text-white");
        const cardsLoad = document.querySelectorAll("#card_load");
        cardsLoad.forEach(card => {
          card.classList.remove("hidden")
          card.classList.add("flex")
        })
        setTimeout(()=>{
          renderCards({ wrapperHtml, selectTime: optionClick });
        },2000)
      }
    }
    if (optionClick === "monthly") {
      if (!thirdButton.classList.contains("text-white")) {
        thirdButton.classList.add("text-white");
        secondButton.classList.remove("text-white");
        firstButton.classList.remove("text-white");
        const cardsLoad = document.querySelectorAll("#card_load");
        cardsLoad.forEach(card => {
          card.classList.remove("hidden")
          card.classList.add("flex")
        })
        setTimeout(()=>{
          renderCards({ wrapperHtml, selectTime: optionClick });
        },2000)
      }
    }
  }
});

renderCards({ wrapperHtml, selectTime: optionClick });
