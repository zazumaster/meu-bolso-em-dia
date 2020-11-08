/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

// CUSTOM IMPORTS
import theme from '../../../styles/theme';

function NextLink({ children, hoverColor, style, ...rest }) {
  const [hovered, setHovered] = React.useState(false);
  const linkColor = hovered ? hoverColor : theme.color.primary;

  return (
    <Link {...rest} hoverColor={hoverColor}>
      <a
        style={{ ...style, color: linkColor, textDecoration: 'none' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </a>
    </Link>
  );
}

NextLink.propTypes = {
  children: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  style: PropTypes.object,
};

NextLink.defaultProps = {
  hoverColor: theme.color.background,
  style: null,
};

export default NextLink;
