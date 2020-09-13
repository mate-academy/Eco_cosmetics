# POTR POTS
TAP **[PREVIEW LINK](https://andrii256.github.io/eco_cosmetics_demo/)** TO SEE DEMO

## Technologies

 - JavaScript (native)
 - HTML5
 - CSS3
 - Sass (SCSS)
 - CSS animations
 - BEM
 - Google page speed insights
 - npm
 - git


## Code Description and Features


This is online shop of Ukrainian fairy.

At first glance, this may seem simple, but there were a range of non-technical issues:
The first one is the design. As for me, there were not very beautiful colors, so I changed them (variables saved my life).
The second one is bad photos from the designer, so I changed them too.
The third one is the content. There were not the base of products, so I visited official Instagram page of this brand and get all needed data from there. It was a boring job, but life requires sometimes to do boring things, so I did.

In general, here are usual layout and there are not what new to respond, so I will talk about unusual blocks:

**Shop**
The shop is a slider with multiple logic:
- Scroll via default scroll. It is realized via `overflow scroll`. I could hide scrollbar, but I didn't because it is the hint of a user about current position.
- Scroll using buttons. It was quite difficult because my layout is responsive and the width of slides sometimes can be float (not integer). And js DOM instruments like `getComputedWidth` returns only integer numbers. There were many problems to fix this, but I did it.
- Chapters navigation. It would be easy to implement, just set `face.onclick = () => {slider.scrollLeft = cardWidth * 8}`, but what if the order of chapters will change? What if the admin will change products in the current chapter? What if admin will add a new chapter? This is the case when we really need Js and its opportunities.
I found answers to all these questions and made proper solution. You can see details [here](https://github.com/Andrii256/Eco_cosmetics/blob/develop/src/scripts/slider.js).

**Checkout**
(touch on product, then touch 'by now' to open this block) or follow this [link](https://andrii256.github.io/eco_cosmetics_demo/product-cards/checkout.html).
There is one big slider when one slide is one stage. And all its logic implemented using CSS only. I know, it is not very good for code quality. There are in real projects better to use JS. But I made it deliberately to train my mind. And I could it.

## Links

Figma design: [link](https://www.figma.com/file/YYe1t6RnMqNemJOzdWchj7/eco_cosmetics?node-id=0%3A1)

Page speed insights: [link](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fandrii256.github.io%2Feco_cosmetics_demo%2F&tab=desktop)

Demonstration: [link](https://andrii256.github.io/eco_cosmetics_demo/)

## My Contacts
Andrii Hrushetskyi

Ukraine

Phone: +380 68 4344 676 (telegram and viber available too) Email: [hrushetskyi.andrii@gmail.com](mailto:hrushetskyi.andrii@gmail.com)

[Skype](https://join.skype.com/invite/g14s4nvGNzCx) | [LinkedIn](https://www.linkedin.com/in/andrii256/) | [GitHub](https://github.com/Andrii256)