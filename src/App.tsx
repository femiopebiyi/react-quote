import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Quotes } from './components/Quotes';

function App() {
  const client = new QueryClient({defaultOptions:{
    queries: {
      refetchOnWindowFocus: false
    }
  }})



  return (
    
    <div className="App">
      <QueryClientProvider client={client}>
      <h1 className="title">Random Quotes React</h1>

    <Quotes/>

      </QueryClientProvider>
    </div>
  );
}

export default App;
