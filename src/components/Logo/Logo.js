import React from 'react';
import { Link } from 'gatsby';
import { Title } from '../Core';
import imgFavicon from '../../assets/favicon.png';

const Logo = ({ color = 'front', height, className = '', ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      <Title color={color} variant="cardLg" className="mb-0">
        <img src={imgFavicon} alt="" height="40" width="40" />
      </Title>
    </Link>
  );
};

export default Logo;
