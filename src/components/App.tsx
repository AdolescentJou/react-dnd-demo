import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Chess from './Chess';
import ArbitrarilyDrag from './arbitrarilyDrag';
import CardSort from './cardSort';
import CardAssemble from './cardAssemble';
import ListSort from './listSort';
import DragPreview from './dragPreview';

function App({ ...props }) {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path={'/chess'} element={<Chess />} />
          <Route path={'/word'} element={<ArbitrarilyDrag />} />
          <Route path={'/cardSort'} element={<CardSort />} />
          <Route path={'/dragCardSort'} element={<CardAssemble />} />
          <Route path={'/listSort'} element={<ListSort />} />
          <Route path={'/'} element={<DragPreview />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
