/*
    Assignment 5
    {Your name here}
*/

$(document).ready(function () {
  class ContentCard {
    id;
    title;
    description;
    category;

    constructor(id, title, description, category) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.category = category;
    }

    updateContent(title, description, category) {
      if (title) {
        this.title = title;
      }
      if (description) {
        this.description = description;
      }
      if (category) {
        this.category = category;
      }
    }

    toString() {
      return `
        <div id="content-${this.id}" style="border: 1px solid gray; margin:5px 0; padding:5px; ">
            <h4>${this.title}</h4>
            <p>${this.description}</p>
            <div>${this.category}</div>
        </div>
    `;
    }
  }

  const cards = [
    new ContentCard(
      1,
      "Pikachu",
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
      "Mouse"
    ),
    new ContentCard(
      2,
      "Bulbasaur",
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      "Seed"
    ),
    new ContentCard(
      3,
      "Charmander",
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      "Lizard"
    ),
    new ContentCard(
      4,
      "Butterfree",
      "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
      "Butterfly"
    ),
    new ContentCard(
      5,
      "Charmeleon",
      "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
      "Lizard"
    ),
  ];

  cards.forEach((card) => {
    const cardHtml = card.toString();
    $("div#content-list").append(cardHtml);
  });
});

// cards[1].updateContent(null, null, "fire");
