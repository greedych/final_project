const eventLink = [
  {
    img: `./styles/assets/Link (1).png`,
    title: `Day Trading Idea and Strategy`,
    theme: `Business (5 km)`,
    date: `Mon, Mar 18 · 7:00 PM PDT`,
    goingPeople: `1 going`,
    price: `Free`,
  },
  {
    img: `./styles/assets/Link (2).png`,
    title: `Let's Talk Networking: JPMorgan Chase in Palo Alto`,
    theme: `Business (25 km)`,
    date: `Tue, Mar 19 · 5:00 PM PDT`,
    goingPeople: `41 going`,
    price: `Free`,
  },
  {
    img: `./styles/assets/Link (3).png`,
    title: `Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases`,
    theme: `Technology`,
    date: `Wed, Mar 13 · 6:00 PM PDT`,
    goingPeople: `40 going`,
    price: `Free`,
  },
  {
    img: `./styles/assets/Link (4).png`,
    title: `INFORMS San Francisco Chapter In-Person Event`,
    theme: `Health and Wellbeing (50 km)`,
    date: `Thu, Mar 28 · 5:00 PM PDT`,
    goingPeople: `67 going`,
    price: `Free`,
  },
  {
    img: `./styles/assets/Link (5).png`,
    title: `AI Wednesdays - Meet and Greet!`,
    theme: `Technology (5 km)`,
    date: `Wed, Mar 13 · 6:30 PM PDT`,
    goingPeople: `79 going`,
    price: `Free`,
  },
  {
    img: `./styles/assets/Link (6).png`,
    title: `ROS By-The-Bay March 2024`,
    theme: `Social Activities`,
    date: `Thu, Mar 21 · 6:00 PM PD`,
    goingPeople: `35 going`,
    price: `Free`,
  },
  {
    img: `./styles/assets/Link (7).png`,
    title: `Free Christian Singles'Dinner`,
    theme: `Hobbies and Passions (10 km)`,
    date: `Fri, Mar 29 · 6:00 PM PDT`,
    goingPeople: `12 going`,
    price: `Free`,
  },
  {
    img: `./styles/assets/Link (8).png`,
    title: `In-person: Deep Dive into RAG Architectures (Food served)`,
    theme: `Hobbies and Passions (50 km)`,
    date: `Thu, Mar 14 · 5:00 PM PDT`,
    goingPeople: `19 going`,
    price: `Free`,
  },
];

const onlineEventLink = [
  {
    img: `./styles/assets/online_event(1).png`,
    title: `Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers`,
    theme: `Business (25 km)`,
    date: `Thu, Mar 14 · 6:00 PM PDT`,
    goingPeople: `3 going`,
    price: `Free`,
  },
  {
    img: `./styles/assets/online_event(2).png`,
    title: `Vision Pro Developers Online Meetup`,
    theme: `Technology`,
    date: `Wed, Mar 13 · 7:00 PM PDT`,
    goingPeople: `51 going`,
    price: `Free`,
  },
  {
    img: `./styles/assets/online_event(3).png`,
    title: `Significant Musical Moments`,
    theme: `Hobbies and Passions (10 km)`,
    date: `Wed, Mar 13 · 6:00 PM PDT`,
    goingPeople: `32 going`,
    price: `Free`,
  },
  {
    img: `./styles/assets/online_event(4).png`,
    title: `FREE Webinar : Introduction to Power BI`,
    theme: `Technology`,
    date: `Thu, Mar 14 · 5:30 PM PDT`,
    goingPeople: `33 going`,
    price: `Free`,
  },
];

const categoriesData = [
  {
    img: `./styles/assets/categories/travel.svg`,
    text: `Travel and Outdoor`,
  },
  {
    img: `./styles/assets/categories/social_activities.svg`,
    text: `Social Activities`,
  },
  {
    img: `./styles/assets/categories/hobbies_and_passions.svg`,
    text: `Hobbies and Passions`,
  },
  {
    img: `./styles/assets/categories/sports_and_fitness.svg`,
    text: `Sports and Fitness`,
  },
  {
    img: `./styles/assets/categories/health_and_wellness.svg`,
    text: `Health and Wellbeing`,
  },
  {
    img: `./styles/assets/categories/technology.svg`,
    text: `Technology`,
  },
  {
    img: `./styles/assets/categories/art_and_culture.svg`,
    text: `Art and Culture`,
  },
  {
    img: `./styles/assets/categories/games.svg`,
    text: `Games`,
  },
];

const citiesData = [
  {
    img: `./styles/assets/cities/new_york.png`,
    cityName: `New York`,
  },
  {
    img: `./styles/assets/cities/san_francisco.png`,
    cityName: `San Francisco`,
  },
  {
    img: `./styles/assets/cities/chicago.png`,
    cityName: `Chicago`,
  },
  {
    img: `./styles/assets/cities/nashville.png`,
    cityName: `Nashville`,
  },
  {
    img: `./styles/assets/cities/miami.png`,
    cityName: `Miami`,
  },
];

const friendshipsCardData = [
  {
    img: `./styles/assets/friendships_cards/friendship_card_(1).png`,
    title: `I Used Meetup to Make Friends at Brunch`,
    text: `New Jersey-based writer and college student
          Brianna Stryker wanted to meet friends in her
          hometown. Learn how she used Meetup to make
          connections by joining a Girls Night Out Meetup group.`,
  },
  {
    img: `./styles/assets/friendships_cards/friendship_card_(2).png`,
    title: `How to Turn Casual Connections into Close Friendships`,
    text: `It’s proven that close friendships are harder to
          make as an adult. But don’t sweat it: here’s what
          you can do to simplify the process.`,
  },
  {
    img: `./styles/assets/friendships_cards/friendship_card_(3).png`,
    title: `Do You Have the “Right” Number of Friends?`,
    text: `Studies from around the world have tried to help
          people answer this question. Learn about the
          three tiers of friendship and how to fulfill them.`,
  },
];

const eventCont = document.getElementById(`events`);

const onlineEventCont = document.getElementById(`online-events`);

const categories = document.getElementById(`categories`);

const cities = document.getElementById(`cities`);

const friendshipsCards = document.getElementById(`friendships-cards`);

const setEventCard = (arr, element, cardClass) => {
  arr.forEach((item) => {
    const eventCard = document.createElement(`div`);

    element.appendChild(eventCard);

    eventCard.classList.add(cardClass);

    eventCard.innerHTML += `
    <img src="${item.img}" />
    <h2 class="event-card-title">${item.title}</h2>
    <p class="event-card-text">${item.theme}</p>
    <div class="event-date">
      <div class="icon-date"></div>
        <p class="text-event-date">${item.date}</p>
    </div>
    <div class="ticket-going-container">
      <div class="going-people">
        <div class="icon-check"></div>
        <p class="ticket-text">${item.goingPeople}</p>
     </div>
        <div class="ticket-price">
          <div class="icon-ticket"></div>
          <p class="ticket-text">${item.price}</p>
        </div>
      </div>
    `;
  });
};

const setCategories = (arr, element) => {
  arr.forEach((item) => {
    const categorie = document.createElement(`div`);
    element.appendChild(categorie);
    categorie.classList.add(`categorie`);
    categorie.innerHTML = `
    <img src="${item.img}" />
    <a href="#">${item.text}</a>
    `;
  });
};

const setCity = (arr, element) => {
  arr.forEach((item) => {
    const city = document.createElement(`div`);
    element.appendChild(city);
    city.classList.add(`city`);
    city.innerHTML = `
    <img src="${item.img}" />
    <h3>${item.cityName}</h3>
    `;
  });
};

const setFriendshipCard = (arr, element) => {
  arr.forEach((item) => {
    const card = document.createElement(`div`);
    element.appendChild(card);
    card.classList.add(`friendships-card`);

    card.innerHTML = `
      <img src="${item.img}" />
      <h3>${item.title}</h3>
      <p>
        ${item.text}
      </p>
      <a href="#">Read more</a>
    `;
  });
};

const init = () => {
  setEventCard(eventLink, eventCont, `event-card`);

  setEventCard(onlineEventLink, onlineEventCont, `online-event-card`);

  setCategories(categoriesData, categories);

  setCity(citiesData, cities);

  setFriendshipCard(friendshipsCardData, friendshipsCards);
};

init();
