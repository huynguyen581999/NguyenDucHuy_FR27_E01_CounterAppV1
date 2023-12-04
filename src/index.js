import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './components/counter/Counter';
import Counter2 from './components/counter/Counter2';


const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Counter />
const element2 = <Counter2 />
root.render(element2);
