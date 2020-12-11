document.addEventListener('DOMContentLoaded', () => {

  // card options
  const cardArray = [
    
    {
      name: 'fries',
      img: 'img/fries.png'
    },
    {
      name: 'fries',
      img: 'img/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'img/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'img/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'img/hotdog.png'
    },
    {
      name: 'hotdog',
      img: 'img/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'img/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'img/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'img/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'img/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'img/pizza.png'
    },
    {
      name: 'pizza',
      img: 'img/pizza.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  const cardsWon = [];

  // create you board
  function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'img/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);

    }
  }

  // check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img');   // Take the img elements
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'img/white.png');   // hidden the pictures
      cards[optionTwoId].setAttribute('src', 'img/white.png');   
      cardsWon.push(cardsChosen);
      console.log(cardsWon);
    } else {
      cards[optionOneId].setAttribute('src', 'img/blank.png');
      cards[optionTwoId].setAttribute('src', 'img/blank.png');
      alert('Sorry, try again');
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      console.log(cardArray.length);
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

  // flip your card
  function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    console.log(this);
    this.setAttribute('src', cardArray[cardId].img);   // show the card 
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }


  createBoard();

});
