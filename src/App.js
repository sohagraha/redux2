import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCounter from './components/HooksCounter';
import DynamicHooksCounter from './components/DynamicHooksCounter';
import VariableCounter from './components/VariableCounter';

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
          <HooksCounter />
          <DynamicHooksCounter />
          <VariableCounter />
          <VariableCounter dynamic={true} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
