document.addEventListener('DOMContentLoaded', function () {
  // Use buttons as primary interactive element (anchors inside buttons are invalid HTML and cause issues)
  const tabs = Array.from(document.querySelectorAll('.shop__tab'));
  const anchors = Array.from(document.querySelectorAll('.shop__tab a'));
  const contents = Array.from(document.querySelectorAll('.shop__content'));

  console.log('shop.js initializing', {
    tabs: tabs.length,
    anchors: anchors.length,
    contents: contents.length,
  });

  function hideAllContents() {
    contents.forEach((c) => c.setAttribute('hidden', ''));
  }

  function showContentByName(name) {
    if (!name) return;
    const targetClass = 'shop__content--' + name;
    let found = false;
    contents.forEach((c) => {
      if (c.classList.contains(targetClass)) {
        c.removeAttribute('hidden');
        found = true;
      } else {
        c.setAttribute('hidden', '');
      }
    });
    if (!found) console.warn('shop.js: no content found for', targetClass);
  }

  function setActiveAnchor(anchor) {
    anchors.forEach((a) => a.classList.remove('active'));
    if (anchor) anchor.classList.add('active');
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', function (e) {
      // Find anchor inside (if present)
      const a = tab.querySelector('a');
      if (a) {
        e.preventDefault();
        const href = a.getAttribute('href') || '';
        const name = href.replace(/^#/, '');
        // If anchor has no fragment (href="#"), fallback to data-tab on the button
        if (!name) {
          const dt = tab.getAttribute('data-tab');
          if (dt) {
            const index = parseInt(dt, 10) - 1;
            if (!Number.isNaN(index) && contents[index]) {
              hideAllContents();
              contents[index].removeAttribute('hidden');
              const anchorToActivate = anchors[index];
              if (anchorToActivate) setActiveAnchor(anchorToActivate);
              console.log(
                'shop.js: activated by data-tab index (from empty href)',
                index,
              );
              return;
            }
          }
          // nothing to do if no fallback
          return;
        }

        setActiveAnchor(a);
        showContentByName(name);
        console.log('shop.js: activated', name);
        return;
      }

      // Fallback: use data-tab mapping (1->first content, etc.)
      const dt = tab.getAttribute('data-tab');
      if (dt) {
        const index = parseInt(dt, 10) - 1;
        if (!Number.isNaN(index) && contents[index]) {
          hideAllContents();
          contents[index].removeAttribute('hidden');
          // also toggle anchors if present
          const anchorToActivate = anchors[index];
          if (anchorToActivate) setActiveAnchor(anchorToActivate);
          console.log('shop.js: activated by data-tab index', index);
        }
      }
    });
  });

  // Initial state: prefer existing .active anchor; otherwise default to 'face'
  const initialActive = document.querySelector('.shop__tab a.active');
  if (initialActive) {
    const name = (initialActive.getAttribute('href') || '').replace(/^#/, '');
    setActiveAnchor(initialActive);
    showContentByName(name);
    console.log('shop.js: initial active', name);
  } else {
    const defaultName = 'face';
    const defaultAnchor = document.querySelector(
      '.shop__tab a[href="#' + defaultName + '"]',
    );
    if (defaultAnchor) setActiveAnchor(defaultAnchor);
    showContentByName(defaultName);
    console.log('shop.js: no initial active - defaulting to', defaultName);
  }

  // Handle "all products" button: show only header, .products and footer
  const allBtn = document.querySelector('.shop__button');
  const main = document.querySelector('main');
  const productsSection = document.querySelector('.products');
  let previousState = null; // store which children were hidden so we can restore
  let productsOriginalParent = null;
  let productsNextSibling = null;
  let headerPreviousState = null;

  if (allBtn && main && productsSection) {
    allBtn.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('shop.js: allBtn click handler start', {
        allBtn,
        main,
        productsSection,
      });

      const isShowingOnlyProducts =
        document.body.classList.contains('show-only-products');
      if (isShowingOnlyProducts) {
        // restore previous view
        // move productsSection back to its original parent/position
        if (productsOriginalParent) {
          try {
            if (
              productsNextSibling &&
              productsNextSibling.parentNode === productsOriginalParent
            ) {
              productsOriginalParent.insertBefore(
                productsSection,
                productsNextSibling,
              );
            } else {
              productsOriginalParent.appendChild(productsSection);
            }
          } catch (err) {
            // fallback: append to original parent
            try {
              productsOriginalParent.appendChild(productsSection);
            } catch (err2) {
              /* ignore */
            }
          }
          productsOriginalParent = null;
          productsNextSibling = null;
        }

        // restore main visibility and children hidden states
        if (main) main.removeAttribute('hidden');
        if (previousState && previousState.length) {
          previousState.forEach(({ node, hidden }) => {
            if (hidden) node.setAttribute('hidden', '');
            else node.removeAttribute('hidden');
          });
        }

        // restore header children visibility
        const headerElRestore = document.querySelector('header');
        if (
          headerElRestore &&
          headerPreviousState &&
          headerPreviousState.length
        ) {
          headerPreviousState.forEach(({ node, hidden }) => {
            try {
              if (hidden) node.setAttribute('hidden', '');
              else node.removeAttribute('hidden');
            } catch (err) {
              /* ignore */
            }
          });
        }
        headerPreviousState = null;

        document.body.classList.remove('show-only-products');
        allBtn.textContent = 'all products';
        // show shop area again
        const shopSection = document.querySelector('.shop');
        if (shopSection) shopSection.removeAttribute('hidden');
        // show first shop tab content
        showContentByName('face');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // store previous hidden state so we can restore exactly
      previousState = Array.from(main.children).map((child) => ({
        node: child,
        hidden: child.hasAttribute('hidden'),
      }));

      // store original parent and nextSibling for productsSection
      try {
        productsOriginalParent = productsSection.parentNode;
        productsNextSibling = productsSection.nextSibling;
      } catch (err) {
        productsOriginalParent = null;
        productsNextSibling = null;
      }

      // store header children state and hide everything except .header__container
      try {
        const headerEl = document.querySelector('header');
        if (headerEl) {
          headerPreviousState = Array.from(headerEl.children).map((child) => ({
            node: child,
            hidden: child.hasAttribute('hidden'),
          }));
          Array.from(headerEl.children).forEach((child) => {
            if (
              child.classList &&
              child.classList.contains('header__container')
            ) {
              child.removeAttribute('hidden');
            } else {
              child.setAttribute('hidden', '');
            }
          });
        }
      } catch (err) {
        headerPreviousState = null;
      }

      // move productsSection right after the header so it remains visible
      const headerEl = document.querySelector('header');
      if (headerEl && productsSection) {
        try {
          headerEl.parentNode.insertBefore(
            productsSection,
            headerEl.nextSibling,
          );
        } catch (err) {
          // fallback: append to body
          try {
            document.body.appendChild(productsSection);
          } catch (err2) {
            /* ignore */
          }
        }
      }

      // hide the entire main (so header + products + footer remain)
      if (main) main.setAttribute('hidden', '');

      // ensure productsSection is visible
      if (productsSection) {
        productsSection.removeAttribute('hidden');
        try {
          productsSection.style.display = '';
        } catch (err) {}
        productsSection.removeAttribute('aria-hidden');
      }

      document.body.classList.add('show-only-products');
      allBtn.textContent = 'back to shop';
      // scroll products into view
      try {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      } catch (err) {}
      console.log('shop.js: all products view activated (moved out of main)');
    });
  }

  // Wire products back button (floating) to toggle the same all-products behavior
  const productsBack = document.querySelector('.products__back');
  if (productsBack && allBtn) {
    productsBack.addEventListener('click', function (e) {
      e.preventDefault();
      // trigger the same toggle as the main allBtn
      try {
        allBtn.click();
      } catch (err) {
        // fallback: directly remove show-only-products state
        document.body.classList.remove('show-only-products');
        if (main) main.removeAttribute('hidden');
      }
    });
  }

  // Open product card when clicking any shop product
  const shopProducts = Array.from(document.querySelectorAll('.shop__product'));
  function populateProductsSectionFromProduct(prodEl) {
    if (!productsSection) return;
    try {
      const img = prodEl.querySelector('img');
      const name = prodEl.querySelector('.shop__product-name');
      const price = prodEl.querySelector('.shop__product-price');

      const prodNameEl = productsSection.querySelector('.products__name');
      const prodPriceEl = productsSection.querySelector('.products__price');
      const prodImgEl = productsSection.querySelector('img');

      if (prodNameEl && name) prodNameEl.textContent = name.textContent.trim();
      if (prodPriceEl && price)
        prodPriceEl.textContent = price.textContent.trim();
      if (prodImgEl && img) {
        prodImgEl.src = img.getAttribute('src');
        prodImgEl.alt = img.getAttribute('alt') || '';
      }
    } catch (err) {
      console.warn('shop.js: failed to populate productsSection', err);
    }
  }

  shopProducts.forEach((p) => {
    p.addEventListener('click', function (e) {
      // allow buttons/anchors inside to not interfere
      e.preventDefault();
      populateProductsSectionFromProduct(p);

      // If not already showing only products, trigger the all-products toggle
      if (!document.body.classList.contains('show-only-products')) {
        if (allBtn) allBtn.click();
      } else {
        // already visible, just scroll into view
        try {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        } catch (err) {}
      }
    });
  });
});
