import store from "./store/index.js";

import Count from "./components/Count.js";
import List from "./components/List.js";
import Status from "./components/Status.js";

const formElement = document.querySelector(".js-form");
const inputElement = document.querySelector("#new-item-field");

formElement.addEventListener("submit", evt => {
  evt.preventDefault();
  const value = inputElement.value.trim();

  if (value.length) {
    store.dispatch("addItem", value);
    inputElement.value = "";
    inputElement.focus();
  }
});

const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Status();

countInstance.render();
listInstance.render();
statusInstance.render();
