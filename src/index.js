import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import MyComponent from './MyComponent';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyComponent />
  </StrictMode>
);
