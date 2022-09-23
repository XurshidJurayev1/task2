import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './redux';
import { RotateLoader } from 'react-spinners';
import { BrowserRouter } from 'react-router-dom';


const store = setupStore();

export const Loader = () => {
  return (<div>
    <div
      style={{ width: '100%', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <RotateLoader color="#5FB5F3" size={70} speedMultiplier="2" />
    </div>
  </div>);
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </BrowserRouter>
</Provider>);
