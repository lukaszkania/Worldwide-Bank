import React, { Component } from 'react';
import {connect} from 'react-redux';
import { DELETE_TRANSACTION_SUCCESS } from '../../constants/ACTION_TYPES';

class HistoryOfTransactions extends Component {
    state = {  }

    deleteTransaction = (event) => {
        const transactionToRemove = (this.props.historyOfAllTransactions.filter(transaction => transaction.transactionId == event.target.value))[0]
        const indexOfTransactionToRemove = this.props.historyOfAllTransactions.indexOf(transactionToRemove)
        this.props.dispatch({type:DELETE_TRANSACTION_SUCCESS, indexOfRemovedTransaction: indexOfTransactionToRemove})
    }

    render() { 
        return ( 
            <div>
                HistoryOfTransactions
                {this.props.historyOfAllTransactions.map(transaction => {
                    return (
                    <div key={transaction.transactionId}>
                    {transaction.transactionId}
                    {transaction.newTransactionTitle}
                    {transaction.valueOfNewTransaction}
                    <button value={transaction.transactionId} onClick={this.deleteTransaction}>Usuń transakcje</button>
                    </div>
                    )
                })}
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return {
        historyOfAllTransactions: state.historyOfAllTransactions
    }
}

export default connect(mapStateToProps)(HistoryOfTransactions);