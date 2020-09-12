'use strict';
// eslint-disable-next-line
class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      face: true,
      body: false,
      hair: false,
      candles: false,
    };

    return this;
  }

  handleChange(valueToChange) {
    for (const key in this.state) {
      if (key === valueToChange) {
        this.setState({ [key]: true });
      } else {
        this.setState({ [key]: false });
      }
    }
  }

  handleArrow(event) {
    let valueToChange;
    const properties = Object.entries(this.state);

    for (let i = 0; i < properties.length; i++) {
      if (event.target.id === 'arrowRight') {
        if (properties[i][1] === true) {
          valueToChange = properties[i + 1][0];
        }
      }

      if (event.target.id === 'arrowLeft') {
        if (properties[i][1] === true) {
          valueToChange = properties[i - 1][0];
        }
      }
    }
    this.handleChange(valueToChange);
  }

  render() {
    return (
      <section className='container container_shop'>

        <div className='shop' id='shop'>
          <h2 className='shop__heading heading'>Shop</h2>

          <button
            className={`
              shop__item ${this.state.face ? 'shop__item--is-active' : ''}
            `}
            id='face'
            onClick={(event) => {
              this.handleChange(event.target.id);
            }}
          >
            Face
          </button>
          <button
            className={`
              shop__item ${this.state.body ? 'shop__item--is-active' : ''}
            `}
            id='body'
            onClick={(event) => {
              this.handleChange(event.target.id);
            }}
          >
            Body
          </button>
          <button
            className={`
              shop__item ${this.state.hair ? 'shop__item--is-active' : ''}
            `}
            id='hair'
            onClick={(event) => {
              this.handleChange(event.target.id);
            }}
          >
            Hair
          </button>
          <button
            className={`
              shop__item ${this.state.candles ? 'shop__item--is-active' : ''}
            `}
            id='candles'
            onClick={(event) => {
              this.handleChange(event.target.id);
            }}
          >
            Candles
          </button>

          {
            this.state.face && <div className='shop__block_1 shop__block'>

              <div className='shop__product shop__product_1 product'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/face-1.jpg')}
                    alt='Anti-age serum' className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Anti-age serum</a>
                <p className='product__price'>350 uah</p>
              </div>

              <div className='shop__product shop__product_2 product'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/face-2.jpg')}
                    alt='Multi-vitamin face cream'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>
                  Multi-vitamin face cream
                </a>
                <p className='product__price'>440 uah</p>
              </div>

              <div className='shop__product shop__product_3 product'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/face-3.jpg')}
                    alt='Anti-stress mask'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Anti-stress mask</a>
                <p className='product__price'>500 uah</p>
              </div>
            </div>
          }

          {
            this.state.body && <div className='shop__block_2 shop__block'>
              <div className='shop__product product shop__product_1'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/body-1.jpg')}
                    alt='Eastern balm'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Eastern balm</a>
                <p className='product__price'>260 uah</p>
              </div>

              <div className='shop__product product shop__product_2'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/body-2.jpg')}
                    alt='Nourishing cream'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Nourishing cream</a>
                <p className='product__price'>390 uah</p>
              </div>

              <div className='shop__product product shop__product_3'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/body-3.jpg')}
                    alt='Morocco scru'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Morocco scrub</a>
                <p className='product__price'>240 uah</p>
              </div>
            </div>
          }

          {
            this.state.hair && <div className='shop__block_3 shop__block'>

              <div className='shop__product product shop__product_1'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/hair-1.jpg')}
                    alt='Jungle essential oil'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Jungle essential oil</a>
                <p className='product__price'>340 uah</p>
              </div>

              <div className='shop__product product shop__product_2'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/hair-2.jpg')}
                    alt='Avocado conditioner'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Avocado conditioner</a>
                <p className='product__price'>280 uah</p>
              </div>

              <div className='shop__product product shop__product_3'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/hair-3.jpg')}
                    alt='Protein mask'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Protein mask</a>
                <p className='product__price'>270 uah</p>
              </div>
            </div>
          }

          {
            this.state.candles && <div className='shop__block_4 shop__block'>
              <div className='shop__product product shop__product_1'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/candle-1.jpg')}
                    alt='Relax'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Relax</a>
                <p className='product__price'>110 uah</p>
              </div>
              <div className='shop__product product shop__product_2'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/candle-2.jpg')}
                    alt='Autumn mood'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Autumn mood</a>
                <p className='product__price'>170 uah</p>
              </div>
              <div className='shop__product product shop__product_3'>
                <div className='product__imag-wrapper'>
                  <img
                    src={require('../images/shop/candle-3.jpg')}
                    alt='Floral cloud'
                    className='product__img'
                  >
                  </img>
                </div>
                <a href='#' className='product__name'>Floral cloud</a>
                <p className='product__price'>150 uah</p>
              </div>
            </div>
          }

          <div className='shop__arrow arrow'>
            <button
              className='arrow__item arrow__item_left'
              id='arrowLeft'
              onClick={(event) => {
                this.handleArrow(event);
              }}
              disabled={this.state.face}
            >
            </button>
            <button
              className='arrow__item arrow__item_right'
              id='arrowRight'
              onClick={(event) => {
                this.handleArrow(event);
              }}
              disabled={this.state.candles}
            >
            </button>
          </div>
          <div className='shop__button'>
            <button className='button'>All products</button>
          </div>

        </div>
      </section>
    );
  }
}
// eslint-disable-next-line
ReactDOM.render(
  <Shop />,
  document.getElementById('root')
);
