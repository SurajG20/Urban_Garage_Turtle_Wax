import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import { CarProvider } from './CarsContent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <QueryClientProvider client={queryClient}>
        <CarProvider>
          <App />
        </CarProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
