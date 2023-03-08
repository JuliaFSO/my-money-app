import React from 'react';
import { HashRouter } from 'react-router-dom'

import '../common/template/dependencies';

import Header from '../common/template/header';
import Sidebar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Routes from './routes';
import Messages from '../common/msg/messages';

const App = props => (
  <HashRouter>
    <div className='wrapper'>
      <Header />
      <Sidebar />
      <Routes />
      <Footer />
      <Messages />
    </div>
  </HashRouter>
);

export default App;
