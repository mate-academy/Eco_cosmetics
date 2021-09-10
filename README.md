# Eco cosmetics landing page
Implement landing page according to [Figma design](https://www.figma.com/file/Fz588JKGuPS2Bk21De4KE5/brand_of_eco-cosmetics-(Edit)?node-id=1%3A2
) - Use BEM and SCSS
- Large screens 2560px
- Full HD 1920px
- The design 1600px
- Notebook 1280px
- Tablet 1024
- Mobile (> 320px)

1. Implement the header with `nav`.
1. Implement `Brand of eco-cosmetics and magic candles` block.
1. Implement `If you choose the gifts of nature and care about it’s - scroll down` block.
1. Implement `About our brand` block.
1. Implement `Shop` block:
  - implement tabs
  - implement slider
1. Implement `About the creators` block.
1. Implement `Ayurvedic Tooth Powder` block.
1. Implement `Contact us` block.
1. Implement footer.

## Fonts
Use `Sharp Sans No2 Medium` and `Avenir`, which you can find in fonts directory.


## HR important moments

- Скорость анимаций на всем лендинге одинаковые (например увеличение при наведении или выезд блоков при скроле)
- Placeholder в формах подсказывают что именно ввести, а если стоит валидация формы, то понятно в каком формате вводить номер телефона 
- Убедитесь, что с мобильных выглядит все аккуратно и без горизонтальной прокрутки
- Добавьте favicon
- Форма "contact us" при отправке должна самоочищаться и не показывать 404/405 ошибок
- Важно, чтобы у пользователя была возможность удобно написать текст в 2-3 строки в поле message
- Форма не должна принимать некорректные данные в поле с номером телефона (например, я ввела номер с буквой и не было никакой ошибки), лучше предусмотреть так, чтобы форма отправлялась только тогда, когда все поля заполнены корректно
- Было бы реалистичней, если бы кнопка "корзина" была кликабельной
- Кнопки “shop”, “to contact us”, “all products”, “learn more” должны быть с hover-стилями
- Все иконки соц сетей в футере должны быть кликабельны с hover-стилями и открывать в новой вкладке социальные сети.
- Номер телефона и почта в футере должны быть кликабельны и при клике брайзер должен предалагать позвонить по указаному номеру или написать письмо по указанной почте.


## Github flow
1. **Fork** the repo.
2. **Clone** the forked one. (The project link should have your name but not `mate-academy`)
3. Run `npm install` (or just `npm i`).
4. Run `npm start`.
5. Open one more terminal window for the next steps.
6. `git checkout -b develop` - to create new branch and switch on it.
7. Write you code in `src` folder.
8. Run `npm run lint` and fix code style errors.
9. Run `npm run deploy` to deploy your solution to `gh-pages`.
10. `git add . && git commit -m 'solution'` to save your changes.
11. `git push origin develop` - to send you code for PR.
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://<your_account>.github.io/Eco_cosmetics/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.
