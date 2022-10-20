import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Welcome } from './pages/Welcome';
const queryClient = new QueryClient()

function App() {

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Welcome />
      </QueryClientProvider>
    </div>
  );
}

export default App;
