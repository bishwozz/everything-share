import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';

const App = () => (
  <div>
    <h1>Hello from React!</h1>
    <Home/>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
