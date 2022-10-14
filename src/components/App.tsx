import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Chess from './Chess';
import ArbitrarilyDrag from './arbitrarilyDrag';
import CardSort from './cardSort';
import CardAssemble from './cardAssemble';
import ListSort from './listSort';
import DragPreviewImg from './dragPreviewImg';
import DragPreviewDom from './dragPreviewDom';

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
          <Route path={'/dragPreviewImg'} element={<DragPreviewImg />} />
          <Route path={'/'} element={<DragPreviewDom/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
