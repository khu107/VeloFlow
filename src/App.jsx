import { Provider } from 'react-redux';
import Router from './shared/Router';
import store from './redux/config/store';
import { QueryClientProvider, QueryClient } from 'react-query';
const client = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Router />
      </Provider>
    </QueryClientProvider>
  );
}
