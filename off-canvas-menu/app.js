/* ------------------------------------ *\
    # Show menu
\* ------------------------------------ */
var bodyEl = document.body;
var content = document.querySelector('.content');
var openbtn = document.querySelector('[data-trigger="show-menu"]');
var closebtn = document.querySelector('[data-trigger="close-menu"]');
var isOpen = false;

function toggleMenu() {
  if (isOpen) {
    bodyEl.removeAttribute('data-menu');
  } else {
    bodyEl.setAttribute('data-menu', 'visible');
  }

  isOpen = !isOpen;
}

openbtn.addEventListener('click', function click(event) {
  event.preventDefault();
  toggleMenu();
});

if (closebtn) {
  closebtn.addEventListener('click', toggleMenu);
}

// close the menu element if the target it´s not the menu element or one of its descendants..
content.addEventListener('click', function click(ev) {
  if ((isOpen) && ev.target === content) {
    bodyEl.removeAttribute('data-menu');
    isOpen = false;
  }
});
