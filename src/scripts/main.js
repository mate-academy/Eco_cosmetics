'use strict';

const tabLinks = Array.from(document.getElementsByClassName('tabs__link'));
const tabContent = Array.from(document.getElementsByClassName('tabs__content'));

tabLinks.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', () => {
    const currentBtn = item;
    const tabID = currentBtn.firstElementChild.innerHTML;
    const currentTab = document.getElementById(tabID);

    if (!currentBtn.classList.contains('tabs__link--active')) {
      tabLinks.forEach((tabLink) => {
        tabLink.classList.remove('tabs__link--active');
      });

      tabContent.forEach((content) => {
        content.style.display = 'none';
      });

      currentBtn.classList.add('tabs__link--active');
      currentTab.style.display = 'block';
    }
  });
};

document.getElementById('defaultOpen').click();
