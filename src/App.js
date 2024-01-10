// App.js
import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import './Header.css'; 


const App = () => {
  return (
    <div>
      <Header />
      {/* Other components or content */}
      <Home />
      <Footer />
    </div>
  );
};

export default App;
