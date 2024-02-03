/** @format */

let changeBigShoeImage = (item) => {
  let active =
    item.parentElement.parentElement.getElementsByClassName(
      'border-coral-red',
    )[0];
  if (active !== item) {
    active.classList.remove('border-coral-red');
    active.classList.add('border-transparent');
    item.classList.remove('border-transparent');
    item.classList.add('border-coral-red');
    bigShoeImage.src = item.getElementsByTagName('img')[0].src;
  }
};

let toggleMenu = (btn) => {
  let icon = btn.getElementsByTagName('img')[0];
  if (btn.dataset.state !== undefined && btn.dataset.state == 'revealed') {
    icon.src = 'public/assets/icons/hamburger.svg';
    icon.style.transform = 'rotate(0)';
    btn.dataset.state = 'closed';
    menu.classList.remove('max-lg:left-0');
    menu.classList.add('max-lg:-left-full');
  } else {
    icon.style.transform = 'rotate(90deg)';
    icon.src = 'public/assets/icons/close.svg';
    btn.dataset.state = 'revealed';
    menu.classList.remove('max-lg:-left-full');
    menu.classList.add('max-lg:left-0');
  }
};

window.addEventListener('popstate', () => {
  if (menu.classList.contains('max-lg:left-0')) {
    let icon = menuBtn.getElementsByTagName('img')[0];
    icon.src = 'public/assets/icons/hamburger.svg';
    icon.style.transform = 'rotate(0)';
    menuBtn.dataset.state = 'closed';
    menu.classList.remove('max-lg:left-0');
    menu.classList.add('max-lg:-left-full');
  }
});
