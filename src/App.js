import React from 'react';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import {Provider} from 'react-redux';
import store from './store';
import { CHANGE_EXCHANGE_VALUE_RATE } from './constants/ACTION_TYPES';
import AddTransaction from './components/AddTransaction/AddTransaction';
import HistoryOfTransactions from './components/HistoryOfTransactions/HistoryOfTransactions';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CurrencyConverter />
        <AddTransaction />
        <HistoryOfTransactions />
      </div>
    </Provider>
  );
}

export default App;
