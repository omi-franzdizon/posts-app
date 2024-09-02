import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Posts from './posts';
import RootWrapper from './rootwrapper';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <RootWrapper>
        <Posts />
      </RootWrapper>
    </ApolloProvider>
  )
}

export default App
