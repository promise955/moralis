import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import {MoralisProvider} from 'react-moralis'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark'
  }
})

const appId = 'sMqlbfpOdlO2X6KBlPvnmF1k5mq9Y2hNigtDBrUs'
const serverUrl = 'https://slht7bgqysqy.usemoralis.com:2053/server'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider  theme={theme}>
        <App />
      </ChakraProvider>
  </MoralisProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
