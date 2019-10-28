import React from 'react';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import {Provider} from 'react-redux';
import store from './store';
import AddTransaction from './components/AddTransaction/AddTransaction';
import HistoryOfTransactions from './components/HistoryOfTransactions/HistoryOfTransactions';
import BiggestTransaction from './components/BiggestTransaction/BiggestTransaction';
import SumOfTransactions from './components/SumOfTransactions/SumOfTransactions';
import AppBar from './components/material-ui/AppBar';
import Paper from '@material-ui/core/Paper';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
<header>
<AppBar />
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
  <Paper>
&copy; All rights reserved 2019
</Paper>
</footer>
      </div>
    </Provider>
  );
}

export default App;
