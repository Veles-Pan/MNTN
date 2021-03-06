const linksScroll = document.querySelectorAll('.scroll-to');

const cards = document.querySelectorAll('.card');

const lineScroll = document.querySelector('.scroll__position');

const intro = document.querySelector('.intro').offsetTop;

const cardFirst = document.querySelector('#card-1').offsetTop;
const cardSecond = document.querySelector('#card-2').offsetTop;
const cardThird = document.querySelector('#card-3').offsetTop;

const socialLinks = document.querySelector('.social');
const scrollMenu = document.querySelector('.scroll');

function handleButtonClick (cardID) {
    const cardElement = document.querySelector(`#${cardID}`);
    cardElement.scrollIntoView({block: "center", behavior: "smooth"});
}

function scrollLine (scrollY) {
    if (scrollY <= intro + 700) {
        lineScroll.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        socialLinks.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
        scrollMenu.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
      } else if (scrollY <= cardFirst + 500) {
        lineScroll.style.transform = 'matrix(1, 0, 0, 1, 0, 60)';

      } else if (scrollY <= cardSecond + 500) {
        lineScroll.style.transform = 'matrix(1, 0, 0, 1, 0, 120)';
    } else if (scrollY <= cardThird + 500) {
        lineScroll.style.transform = 'matrix(1, 0, 0, 1, 0, 180)';
    }

    if (scrollY >= cardFirst - 600) {
        socialLinks.style.transform = 'matrix(1, 0, 0, 1, 0, -280)';
        scrollMenu.style.transform = 'matrix(1, 0, 0, 1, 0, -280)';
    }
}


linksScroll.forEach(element => {
    element.addEventListener('click', function() {
        const cardID = element.id.slice(3);
        handleButtonClick(cardID);
    })
});

document.addEventListener('scroll', function() {
    let scrollY = window.pageYOffset;
    scrollLine(scrollY);
})