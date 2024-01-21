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
