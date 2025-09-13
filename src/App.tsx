import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <Outlet />
    </QueryClientProvider>
  );
};

export default App;
