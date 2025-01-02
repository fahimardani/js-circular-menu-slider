const body = document.querySelector('body')
const slider = document.querySelector('ul');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('img')
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

const animeData = [
  { title: 'Solo Leveling Season 2', 
    img: 'images/solo-leveling-cover.webp',
    description: "It's been over ten years since gates that lead to another dimension have begun appearing across the world." },
  { title: 'Re:Zero Season 3',  
    img: 'images/rezero-cover.jpg',
    description: "Subaru savors a life of fulfillment while Emilia’s camp stands united for the royal selection. " },
  { title: 'Shangri-la Frontier Season 2',  
    img: 'images/shangrila-cover.jpg',
    description: "This is a world in the near future where games that use display screens are classified as retro." },
  { title: 'The 100 Girlfriends Season 2', 
    img: 'images/100gf-cover.webp',
    description: "Rentaro Aijo was rejected 100 times in middle school. He visits a shrine and prays for better luck in high school." },
  { title: 'The Apothecary Diaries Season 2', 
    img: 'images/kusuriya-cover.webp', 
    description: "Maomao must keep her wits sharp, not only to protect the concubine but also against rising dangers in the palace. " },
  { title: 'Sakamoto Days',  
    img: 'images/sakamoto-cover.jpg', 
    description: 'Bad guys feared Taro Sakamoto! Assassins revered him! But then one day he quit, got married, and had a baby.' }
];

let currentIndex = 0;

function updateSliderPosition() {
  const angle = -(360 / animeData.length) * currentIndex; 
  slider.style.transform = `rotate(${angle}deg) rotateX(180deg) rotateY(180deg)`;
  
  let imgObject = animeData[currentIndex].img
  body.style.background = `url(${imgObject})`;
  body.style.backgroundSize = `100%`;

  h2.innerHTML = animeData[currentIndex].title;
  p.innerHTML = animeData[currentIndex].description;
}

prev.onclick = () => {
  currentIndex = (currentIndex === 0) ? animeData.length - 1 : currentIndex - 1;
  updateSliderPosition();
};

next.onclick = () => {
  currentIndex = (currentIndex === animeData.length - 1) ? 0 : currentIndex + 1;
  updateSliderPosition();
};

updateSliderPosition();