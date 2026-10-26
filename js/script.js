
"use strict";

// TASK 0 — PERSONALIZED WELCOME

const guestNameInput = document.getElementById("guestName");
const welcomeButton = document.querySelector("#welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

if (guestNameInput && welcomeButton && welcomeMessage) {
  welcomeButton.addEventListener("click", function () {
    const guestName = guestNameInput.value.trim();

    welcomeMessage.textContent = guestName
      ? `Welcome to Aurora Hotel, ${guestName}!`
      : "Please enter your name to receive a welcome.";
  });
}


// TASK 1 — LIGHT / DARK THEME

const themeButton = document.getElementById("themeBtn");

if (themeButton) {
  themeButton.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-theme");

    themeButton.textContent = isDark ? "Light mode" : "Dark mode";
    themeButton.setAttribute("aria-pressed", String(isDark));
  });
}


// TASK 2 — FAQ SHOW / HIDE

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const answer = document.getElementById(
      question.getAttribute("aria-controls")
    );

    if (!answer) return;

    answer.hidden = !answer.hidden;

    question.setAttribute(
      "aria-expanded",
      String(!answer.hidden)
    );

    const symbol = question.querySelector(".faq-chevron");

    if (symbol) {
      symbol.textContent = answer.hidden ? "+" : "−";
    }
  });
});


// TASK 3 — LIVE ROOM SEARCH

const roomSearch = document.getElementById("roomSearch");
const roomCards = document.querySelectorAll(".rooms-grid .room-card");
const roomCount = document.getElementById("roomCount");
const noResults = document.getElementById("noResults");

if (roomSearch && roomCount && noResults) {

  function filterRooms() {
    const query = roomSearch.value.trim().toLocaleLowerCase();
    let matches = 0;

    roomCards.forEach(function (card) {
      const title = card.querySelector(".room-title");

      const matchesTitle = Boolean(
        title && title.textContent.toLocaleLowerCase().includes(query)
      );

      card.hidden = !matchesTitle;

      if (matchesTitle) {
        matches += 1;
      }
    });

    roomCount.textContent =
      `${matches} ${matches === 1 ? "room" : "rooms"} found`;

    noResults.hidden = matches !== 0;
  }

  roomSearch.addEventListener("input", filterRooms);
  filterRooms();
}


// TASK 4 — ADD / REMOVE FAVOURITES

const favouritesForm = document.getElementById("favouritesForm");
const favouriteInput = document.getElementById("favouriteInput");
const favouritesList = document.getElementById("favouritesList");
const favouritesCount = document.getElementById("favouritesCount");
const favouritesError = document.getElementById("favouritesError");

if (
  favouritesForm &&
  favouriteInput &&
  favouritesList &&
  favouritesCount &&
  favouritesError
) {

  function updateFavouritesCount() {
    const count = favouritesList.children.length;

    favouritesCount.textContent =
      `${count} ${count === 1 ? "item" : "items"}`;
  }

  favouritesForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = favouriteInput.value.trim();

    if (!text) {
      favouritesError.textContent =
        "Please enter an item before adding it.";

      favouriteInput.focus();
      return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const removeButton = document.createElement("button");

    label.textContent = text;

    removeButton.type = "button";
    removeButton.className = "remove-btn";
    removeButton.textContent = "Remove";

    removeButton.setAttribute("aria-label", `Remove ${text}`);

    removeButton.addEventListener("click", function () {
      item.remove();
      updateFavouritesCount();
    });

    item.append(label, removeButton);
    favouritesList.appendChild(item);

    favouriteInput.value = "";
    favouritesError.textContent =
      "Add another item whenever you like.";

    favouriteInput.focus();
    updateFavouritesCount();
  });

  updateFavouritesCount();
}
