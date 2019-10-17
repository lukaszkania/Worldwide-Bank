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
<header>
Worldwide Bank Account
</header>
<section>
  <CurrencyConverter />
  <AddTransaction />
</section>
<section>
  <HistoryOfTransactions />
  <SumOfTransactions />
  <BiggestTransaction />
</section>
<footer>
&copy; All rights reserved 2019
</footer>
      </div>
    </Provider>
  );
}

export default App;
