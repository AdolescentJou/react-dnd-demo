import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ChessDemo from './Chess';
import WordClassification from './wordClassification';
import CardSort from './cardSort';
import DragCarSort from './dragCardSort';

function App({ ...props }) {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path={'/chess'} element={<ChessDemo />} />
          <Route path={'/word'} element={<WordClassification />} />
          <Route path={'/cardSort'} element={<CardSort />} />
          <Route path={'/'} element={<DragCarSort />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
