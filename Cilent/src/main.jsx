// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'


// import App from './App'
// import './index.css'
// import { AuthProvider } from './ContextApi/Authcontext'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <AuthProvider>
//        <App />
//     </AuthProvider>
   
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';
import { AuthProvider } from './ContextApi/Authcontext.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
