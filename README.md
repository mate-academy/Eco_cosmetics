# Eco cosmetics landing page
Implement landing page according to [Figma design](https://www.figma.com/file/Jryi2RU2LgK2bfwsxldABC/brand_of_eco-cosmetics-(Copy)) - Use BEM and SCSS
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

## Instructions
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





html {
  font-family: Arial, sans-serif;
}

body {
  margin: 0;
}

.people {
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-gap: 30px 40px;
  justify-content: center;
}

.person {
  position: relative;
  transition: transform 1s linear, border-radius 1s linear;
  margin-bottom: -20px;
}

.person__photo {
  position: relative;
}

.person__rank {
  width: 32px;
  height: 32px;
  font-weight: bold;
  font-size: 16px;
  line-height: 32px;
  text-align: center;
  color: #8B0000;
  position: absolute;
  top: calc(50% - 16px);
  right: 10px;
  background-color: #fff;
  border-radius: 50%;
}

.person__img {
  border-radius: 50%;
  width: 100%;
}

.person__details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.person__name {
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #2F4F4F;
  margin-top: 8px;
}

.person__sport {

}

.person__extra {
  font-size: 21.6px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  /* margin-top: 11px; */

  /* visibility: hidden; */
  position: absolute;
  opacity: 0;
  z-index: -1;
}

.person:hover .person__extra {
  opacity: 1;
  z-index: 0;
  bottom: -30px;
}

@media (max-width: 1000px) {
  .people {
    display: grid;
    grid-template-columns: repeat(2, 200px);
  }
}
