const eventsStore = [
  {
    title: "INFJ Personality Type- Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    date: new Date(2024, 2, 23, 15).toString(),
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto= format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx 8fA%3D%3D%201037w ",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
  },
  {
    title:
      "NYC AI Users- AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    date: new Date(2024, 2, 23, 11, 30).toString(),
    image:
      "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=f ormat&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8 fA%3D%3D ",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
  },
  {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14).toString(),
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto= format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx 8fA%3D%3D",
    type: "online",
    attendees: null,
    category: "Technology",
    distance: 10,
  },
  {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11).toString(),
    image:
      "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870& auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufD B8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
  },
  {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    date: new Date(2024, 2, 14, 11).toString(),
    image:
      "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870& auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufD B8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
  },
  {
    title: "All Nations- Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    date: new Date(2024, 2, 14, 11).toString(),
    image:
      "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870& auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufD B8fHx8fA%3D%3D",
    type: "offline",
    attendees: null,
    category: "Health and Wellbeing",
    distance: 15,
  },
];

const filtredEventCards = document.getElementById(`filtred-event-cards`);
const filtredEventCardsAll = document.querySelector(`#filtred-event-cards`);

const filterType = document.getElementById(`filter-type`);
const filterTypeAll = document.querySelector(`#filter-type`);

const filterDistance = document.getElementById(`filter-distance`);
const filterDistanceAll = document.querySelector(`#filter-distance`);

const filterCategory = document.getElementById(`filter-category`);
const filterCategoryAll = document.querySelector(`#filter-category`);

const filterDay = document.getElementById(`filter-day`);
const filterDayAll = document.querySelector(`#filter-day`);

const createCard = (element) => {
  const filtredEventCard = document.createElement(`div`);

  filtredEventCards.appendChild(filtredEventCard);

  filtredEventCard.classList.add(`filtred-event-card`);

  if (element.attendees) {
    filtredEventCard.innerHTML += `
              <img src="${element.image}" />
              <div class="text-filtred-event-card">
                <div class="info-event-card">
                  <p class="date">${element.date.toString().slice(0, 21)}</p>
                  <a href="" class="event-title">${element.title}</a>
                  <p class="theme">
                    ${element.category} 
                    (${element.distance}km)
                  </p>
                </div>
                <div class="attsendees">
                  <p>${element.attendees} attsendees</p>
                </div>
      `;
  } else {
    filtredEventCard.innerHTML += `
              <img src="${element.image}" />
              <div class="text-filtred-event-card">
                <div class="info-event-card">
                  <p class="date">${element.date.toString().slice(0, 21)}</p>
                  <a href="" class="event-title">${element.title}</a>
                  <p class="theme">
                    ${element.category} 
                    (${element.distance}km)
                  </p>
                </div>
              </div>
      `;
  }
};

const filteredType = (e) => {
  if (e.target.tagName !== `LI`) return false;

  filtredEventCards.innerHTML = ``;

  eventsStore.forEach((item) => {
    if (item.type === `online` && e.target.id === `online`) {
      createCard(item);
    }

    if (item.type === `offline` && e.target.id === `offline`) {
      createCard(item);
    }
  });
};

const filteredDistance = (e) => {
  if (e.target.tagName !== `LI`) return false;

  filtredEventCards.innerHTML = ``;

  eventsStore.forEach((item) => {
    if (item.distance === 10 && e.target.id === `10km`) {
      createCard(item);
    }

    if (item.distance === 15 && e.target.id === `15km`) {
      createCard(item);
    }

    if (item.distance === 25 && e.target.id === `25km`) {
      createCard(item);
    }

    if (item.distance === 50 && e.target.id === `50km`) {
      createCard(item);
    }

    if (item.distance === 75 && e.target.id === `75km`) {
      createCard(item);
    }

    if (item.distance === 100 && e.target.id === `100km`) {
      createCard(item);
    }
  });
};

const filteredCategory = (e) => {
  if (e.target.tagName !== `LI`) return false;
  filtredEventCards.innerHTML = ``;

  eventsStore.forEach((item) => {
    if (
      item.category === `Social Activities` &&
      e.target.id === `social-activities`
    ) {
      createCard(item);
    }

    if (
      item.category === `Hobbies and Passions` &&
      e.target.id === `hobbies-and-passions`
    ) {
      createCard(item);
    }

    if (
      item.category === `Health and Wellbeing` &&
      e.target.id === `health-and-wellbeing`
    ) {
      createCard(item);
    }

    if (item.category === `Business` && e.target.id === `business`) {
      createCard(item);
    }

    if (item.category === `Technology` && e.target.id === `technology`) {
      createCard(item);
    }
  });
};

const filtredDate = (e) => {
  if (e.target.tagName !== `LI`) return false;
  filtredEventCards.innerHTML = ``;

  console.log(e.target.id);

  eventsStore.forEach((item) => {
    if (
      item.date === new Date(2024, 2, 13, 11).toString() &&
      e.target.id === `mar-13-11-00`
    ) {
      console.log(e.target);
      createCard(item);
    }

    if (
      item.date === new Date(2024, 2, 14, 11).toString() &&
      e.target.id === `mar-14-11-00`
    ) {
      createCard(item);
    }

    if (
      item.date === new Date(2024, 2, 14, 20).toString() &&
      e.target.id === `mar-14-20-00`
    ) {
      createCard(item);
    }

    if (
      item.date === new Date(2024, 2, 16, 14).toString() &&
      e.target.id === `mar-16-14-00`
    ) {
      createCard(item);
    }

    if (
      item.date === new Date(2024, 2, 23, 11, 30).toString() &&
      e.target.id === `mar-23-11-30`
    ) {
      createCard(item);
    }

    if (
      item.date === new Date(2024, 2, 23, 15).toString() &&
      e.target.id === `mar-23-15-00`
    ) {
      createCard(item);
    }
  });
};

const setEventCard = (arr, element, cardClass) => {
  arr.forEach((item) => {
    const filtredEventCard = document.createElement(`div`);

    element.appendChild(filtredEventCard);

    filtredEventCard.classList.add(cardClass);

    if (item.attendees) {
      filtredEventCard.innerHTML += `
              <img src="${item.image}" />
              <div class="text-filtred-event-card">
                <div class="info-event-card">
                  <p class="date">${item.date.toString().slice(0, 21)}</p>
                  <a href="" class="event-title">${item.title}</a>
                  <p class="theme">${item.category} (${item.distance}km)</p>
                </div>
                <div class="attsendees">
                  <p>${item.attendees} attsendees</p>
                </div>
      `;
    } else {
      filtredEventCard.innerHTML += `
              <img src="${item.image}" />
              <div class="text-filtred-event-card">
                <div class="info-event-card">
                  <p class="date">${item.date.toString().slice(0, 21)}</p>
                  <a href="" class="event-title">${item.title}</a>
                  <p class="theme">${item.category} (${item.distance}km)</p>
                </div>
              </div>
      `;
    }
  });
};

const visibleFilterList = () => {
  const filterListDistance =
    document.getElementsByClassName(`filter-list-distance`);
};

const init = () => {
  setEventCard(eventsStore, filtredEventCards, `filtred-event-card`);

  filterType.addEventListener(`click`, () => {
    const filterListType = document.getElementById(`filter-list-type`);
    const filterPointer = document.getElementById(`filter-pointer-type`);

    const pointer = document.getElementById(`filter-pointer-type`);

    pointer.classList.toggle(`reverse-pointer`);
    filterListType.classList.toggle(`hidden`);
  });

  filterDistance.addEventListener(`click`, () => {
    const filterListDistance = document.getElementById(`filter-list-distance`);
    const pointer = document.getElementById(`filter-pointer-distance`);

    pointer.classList.toggle(`reverse-pointer`);

    filterListDistance.classList.toggle(`hidden`);
  });

  filterCategory.addEventListener(`click`, () => {
    const filterListCategory = document.getElementById(`filter-list-category`);
    const pointer = document.getElementById(`filter-pointer-category`);

    pointer.classList.toggle(`reverse-pointer`);

    filterListCategory.classList.toggle(`hidden`);
  });

  filterDay.addEventListener(`click`, () => {
    const filterListDay = document.getElementById(`filter-list-day`);
    const pointer = document.getElementById(`filter-pointer-day`);

    pointer.classList.toggle(`reverse-pointer`);

    filterListDay.classList.toggle(`hidden`);
  });

  filterCategoryAll.addEventListener(`click`, filteredCategory);

  filterDistanceAll.addEventListener(`click`, filteredDistance);

  filterTypeAll.addEventListener(`click`, filteredType);

  filterDayAll.addEventListener(`click`, filtredDate);
};

init();
