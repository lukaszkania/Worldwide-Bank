import React from 'react';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import {Provider} from 'react-redux';
import store from './store';
import AddTransaction from './components/AddTransaction/AddTransaction';
import HistoryOfTransactions from './components/HistoryOfTransactions/HistoryOfTransactions';
import BiggestTransaction from './components/BiggestTransaction/BiggestTransaction';
import SumOfTransactions from './components/SumOfTransactions/SumOfTransactions';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CurrencyConverter />
        <AddTransaction />
        <HistoryOfTransactions />
        <BiggestTransaction />
        <SumOfTransactions />
      </div>
    </Provider>
  );
}

export default App;
