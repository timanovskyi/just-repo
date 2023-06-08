import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
