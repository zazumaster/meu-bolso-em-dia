import React from 'react';

import { Anchor } from './styles';
import BackgroundButton from '../../../assets/img/btn.svg';

function Button({ text, ...rest }) {
  return (
    <Anchor {...rest}>
      <svg
        version="1.1"
        id="Camada_1"
        x="0px"
        y="0px"
        viewBox="0 0 136.8 35.9"
        xmlSpace="preserve"
      >
        <path
          className="st0"
          d="M5.3,0.6h126.3c4.7,0,6.5,6.2,2.5,8.6L92.8,34.7c-0.7,0.5-1.6,0.7-2.5,0.7H5.3c-2.6,0-4.7-2.1-4.7-4.7V5.3C0.7,2.7,2.7,0.6,5.3,0.6"
        />
        <text
          id="textid"
          transform="matrix(1 0 0 1 17.9451 22.0927)"
          className="st1 st2 st3"
        >
          {text}
        </text>
      </svg>
    </Anchor>
  );
}

export default Button;
