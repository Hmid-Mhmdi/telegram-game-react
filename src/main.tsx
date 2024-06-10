import React from 'react'
import ReactDOM from 'react-dom/client'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk'
import App from './App.tsx'
import './index.css'

WebApp.ready()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://hmid-mhmdi.github.io/telegram-game-react/tonconnect-manifest.json">
       <App />
    </TonConnectUIProvider>
  </React.StrictMode>,
)
