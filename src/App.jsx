import { Provider } from 'react-redux';
import Router from './shared/Router';
import store from './redux/config/store';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
