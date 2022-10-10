import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ChessDemo from './Chess';
import WordClassification from './wordClassification';
import CardSort from './cardSort';

function App({ ...props }) {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path={'/chess'} element={<ChessDemo />} />
          <Route path={'/word'} element={<WordClassification />} />
          <Route path={'/'} element={<CardSort />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
