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


/* ------------------------------------ *\
    # Show sub-menu
\* ------------------------------------ */

var menuList = document.querySelector('#main-nav > ul');
var itemList = document.querySelectorAll('#main-nav > ul > li[data-childmenu]');
var childMenu;

for (var i = 0; i < itemList.length; i++) {
  childMenu = itemList[i].querySelector('[data-trigger="child-menu"]');
  if (childMenu) {
    childMenu.addEventListener('click', function click(ev) {
      var target = ev.target.parentElement;

      // Hide other items
      var sibling;
      var siblings = Array.prototype.filter.call(
        ev.target.parentNode.parentNode.children,
        function iterate(child) {
          return child !== ev.target.parentNode;
        }
      );
      while (siblings.length > 0) {
        sibling = siblings.shift();
        sibling.setAttribute('data-childmenu', '');
      }

      if (target.getAttribute('data-childmenu') !== 'visible') {
        target.setAttribute('data-childmenu', 'visible');
      } else {
        target.setAttribute('data-childmenu', '');
      }

      // Set open state if one item is opened
      if (menuList.querySelector('[data-childmenu="visible"]')) {
        menuList.setAttribute('data-has-opened-menu', 'true');
      } else {
        menuList.setAttribute('data-has-opened-menu', 'false');
      }
    });
  }
}

// close the menu element if the target it´s not the menu element or one of its descendants..
content.addEventListener('click', function click(ev) {
  if ((isOpen) && ev.target === content) {
    bodyEl.removeAttribute('data-menu');
    isOpen = false;
  }
});
