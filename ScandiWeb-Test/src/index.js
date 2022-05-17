import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import './index.css';
import App from './App'


const container = document.getElementById('root');
const root = createRoot(container);

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
})


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
