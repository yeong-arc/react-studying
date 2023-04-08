import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <DigitalClock />
//     </React.StrictMode>
//   );
// }, 1000);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
