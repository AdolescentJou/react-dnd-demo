import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ChessDemo from './Chess';
import WordClassification from './arbitrarilyDrag';
import CardSort from './cardSort';
import DragCardSort from './cardAssemb';
import DragCardMove from './listSort';

function App({ ...props }) {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path={'/chess'} element={<ChessDemo />} />
          <Route path={'/word'} element={<WordClassification />} />
          <Route path={'/cardSort'} element={<CardSort />} />
          <Route path={'/dragCardSort'} element={<DragCardSort />} />
          <Route path={'/'} element={<DragCardMove />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
