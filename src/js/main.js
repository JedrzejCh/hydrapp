"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

const btnAdd = document.querySelector(".btn__add-js");
const btnDel = document.querySelector(".btn__delete-js");
const key = new Date().toISOString().slice(0, 10);
const counterValue = document.querySelector("span.counter__value");

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
  counterValue.innerHTML = "0";
} else {
  counterValue.innerHTML = localStorage.getItem(key);
}

btnAdd.addEventListener("click", () => {
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  counterValue.innerHTML = localStorage.getItem(key);
});

btnDel.addEventListener("click", () => {
  const value = parseInt(localStorage.getItem(key));
  if (value > 0) {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
    counterValue.innerHTML = localStorage.getItem(key);
  }
});
