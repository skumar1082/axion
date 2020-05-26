import React from 'react';
import Page from './dashboard';
import Header from '../../../components/header';
import Footer from '../../../components/footer';

const Dashboard = () => {
  // TO DO: NEED TO DO EXACT HEIGHT CALCULATION AND SET HERE. FOR NOW HARDCODED AND IT SHOULD BE DETACT RESIZE/SCREEN ROTATE AND UPDATE
  let h = document.documentElement.clientHeight - 130;
  return (
    <div>
      <Header />
      <div style={{ overflowY: 'scroll', height: `${h}px`, padding: '1rem' }}>
        <Page />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
