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

  const snackbar = document.createElement('div');

  // create snackbar
  function showSnackbar(message) {

    snackbar.classList.add('snackbar');
    document.querySelector('body').appendChild(snackbar);

    snackbar.textContent = message;
    snackbar.classList.add('active');
    setTimeout(() => snackbar.classList.remove('active'), 4000);
  }

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
      showSnackbar('You found a match');
      snackbar.style.backgroundColor = '#81b29a';
      cards[optionOneId].setAttribute('src', 'img/white.png');   // hidden the pictures
      cards[optionTwoId].setAttribute('src', 'img/white.png');   
      cardsWon.push(cardsChosen);
      console.log(cardsWon);
    } else {
      cards[optionOneId].setAttribute('src', 'img/blank.png');
      cards[optionTwoId].setAttribute('src', 'img/blank.png');
      showSnackbar('Sorry, try again');
      snackbar.style.backgroundColor = '#e76f51';
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
      console.log(cardArray.length);
      resultDisplay.textContent = 'Congratulations! You found them all!';
      setTimeout(() => location.reload(), 4000);
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
