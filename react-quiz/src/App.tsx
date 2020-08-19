import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter label="Counter" count={count} onIncrement={()=>{setCount(count+1)}} />
    </div>
  );
}

export default App;
