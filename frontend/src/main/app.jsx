import React from 'react';
import '../common/template/dependencies';

import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';

const App = props => (
  <div className='wrapper'>
    <Header />
    <Sidebar />
    <div className='content-wrapper'>
      <h1>Content</h1>
    </div>
    <Footer />
  </div>
);

export default App;
