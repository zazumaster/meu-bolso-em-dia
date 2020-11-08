import React from 'react';

import img1 from '../../../assets/img/img-1.png';
import img2 from '../../../assets/img/img-2.png';
import img3 from '../../../assets/img/img-3.png';
import MobileFeatured from './MobileFeatured';

function Featured() {
  return (
    <>
      <section className="featured d-none d-lg-flex">
        <div className="row no-gutters">
          <div className="col-md-7">
            <div className="post-home">
              <figure className="post-spotlight">
                <a href="#">
                  <img src={img1} alt="" style={{ width: '100%' }} />
                  <figcaption>
                    <div className="line-h" />
                    <h4>5 NOVAS ideias de renda extra</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut
                    </p>
                    <p className="fc-green fs12">
                      finanças | 24 de Outubro | 2020
                    </p>
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
          <div className="col-md-5">
            <div className="post-home">
              <figure className="post-content">
                <a href="#">
                  <img src={img3} alt="" style={{ width: '100%' }} />
                  <figcaption>
                    <div className="line-h" />
                    <p className="fc-blue-light fs12">
                      finanças | 24 de Outubro | 2020
                    </p>
                    <h4>
                      Comprar ou alugar? Descubra o que é melhor para o SEU
                      caso!
                    </h4>
                  </figcaption>
                </a>
              </figure>
            </div>

            <div className="post-home">
              <figure className="post-content">
                <a href="#">
                  <img src={img2} alt="" style={{ width: '100%' }} />
                  <figcaption>
                    <div className="line-h" />
                    <p className="fc-blue-light fs12">
                      finanças | 24 de Outubro | 2020
                    </p>
                    <h4>Como saber o quanto fazer de renda extra.</h4>
                  </figcaption>
                </a>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <MobileFeatured />
    </>
  );
}

export default Featured;
