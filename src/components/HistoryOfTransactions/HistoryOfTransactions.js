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

    changeFromEuroToPln = amountInEuro => {
        return Math.floor(amountInEuro * this.props.exchangeValueRate * 100) / 100
    }

    render() { 
        return ( 
            <div>
                HistoryOfTransactions
                {this.props.historyOfAllTransactions.map(transaction => {
                    return (
                    <div key={transaction.transactionId}>
                    Nr transakcji: {transaction.transactionId} <br></br>
                    Tytuł: {transaction.newTransactionTitle} <br></br>
                    Kwota: {transaction.valueOfNewTransaction} EURO <br></br>
                    Kwota: {this.changeFromEuroToPln(transaction.valueOfNewTransaction)} PLN <br></br>
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
        historyOfAllTransactions: state.historyOfAllTransactions,
        exchangeValueRate: state.exchangeValueRate
    }
}

export default connect(mapStateToProps)(HistoryOfTransactions);