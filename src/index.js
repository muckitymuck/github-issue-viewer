import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './components/Theme';
import App from './App';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from '@apollo/client';
import { ApolloLink } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import apolloLogger from 'apollo-link-logger';
import { BrowserRouter } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  }

})

const client = new ApolloClient({
  link: ApolloLink.from([
    apolloLogger,
    httpLink
  ]),
  cache: new InMemoryCache(),
});
console.log(client)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Theme>
        <App />
      </Theme>
    </ApolloProvider>
  </BrowserRouter>
);

