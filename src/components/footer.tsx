/*
 * Author: Saravanakumar
 * Description: This is reusable stateless function component and it's to be used to all inner pages
 * TODO:  Make it to rich UI
 */
import React from 'react';

const Footer = () => {
  return (
    <div
      className="text-center"
      style={{
        backgroundColor: '#e0dcce',
      }}
    >
      Copyright &copy; {new Date().getFullYear()} axiongroup.com
    </div>
  );
};
export default Footer;
