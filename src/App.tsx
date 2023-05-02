import React from 'react';

import s from './index.module.css';
import { Counter } from './components/counter/counter';

function App() {
  return (
    <div className={s.App}>
      <Counter />
    </div>
  );
}

export default App;
