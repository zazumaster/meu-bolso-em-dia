import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Carousel } from './styles';
import mobile1 from '../../../../assets/img/mobile-1.png';
import mobile2 from '../../../../assets/img/mobile-2.png';
import mobile3 from '../../../../assets/img/mobile-3.png';

function MobileFeatured() {
  return (
    <section className="featured-mobile d-md-none d-md-block d-lg-none">
      <div className="row no-gutters">
        <Carousel
          indicators={false}
          nextIcon={<IoIosArrowForward className="carousel-icon" />}
          prevIcon={<IoIosArrowBack className="carousel-icon" />}
        >
          <Carousel.Item>
            <div className="post-home">
              <figure className="post-mobile">
                <a href="#">
                  <img src={mobile1} alt="" width="100%" />
                  <figcaption>
                    <div className="line-h" />
                    <h4>5 NOVAS ideias de renda extra</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </p>
                    <p className="fc-blue-light fs12">
                      Finanças | 24 de Outubro | 2020
                    </p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="post-home">
              <figure className="post-mobile">
                <a href="#">
                  <img src={mobile2} alt="" width="100%" />
                  <figcaption>
                    <div className="line-h" />
                    <h4>5 NOVAS ideias de renda extra</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </p>
                    <p className="fc-blue-light fs12">
                      Finanças | 24 de Outubro | 2020
                    </p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="post-home">
              <figure className="post-mobile">
                <a href="#">
                  <img src={mobile3} alt="" width="100%" />
                  <figcaption>
                    <div className="line-h" />
                    <h4>5 NOVAS ideias de renda extra</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod
                    </p>
                    <p className="fc-blue-light fs12">
                      Finanças | 24 de Outubro | 2020
                    </p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}

export default MobileFeatured;
