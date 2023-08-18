'use strict';

export const scrollAnimItems = document.querySelectorAll('.scroll-anim-item');

if (scrollAnimItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

  function animOnScroll() {
    for (let i = 0; i < scrollAnimItems.length; i++) {
      const animItem = scrollAnimItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 3;                          // коефіцієнт який регулює старт анімації
      let animItemPoint = window.innerHeight - animItemHeight / animStart;		// точка старту анімації

      if (animItemHeight > window.innerHeight) {									//якщо елем вище вікна браузера
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('scroll-anim-active');
			} else {
				if (!animItem.classList.contains('scroll-anim-no-hide')) {
					animItem.classList.remove('scroll-anim-active');
				}
			}
    }
  }

  function offset(el) {												     // ф-я яка дозволяє отимати висоту елемента від верху/зліва сторінки
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;

		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

  setTimeout(() => {
		animOnScroll(); 											// для спрацювання анімації скролу для елем які видно одразу без скролу
	}, 300);
}
