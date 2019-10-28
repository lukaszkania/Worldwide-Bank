import React, { Component } from 'react';
import {connect} from 'react-redux';
import { DELETE_TRANSACTION_SUCCESS } from '../../constants/ACTION_TYPES';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class HistoryOfTransactions extends Component {
    // Handling button click and removing transaction
    deleteTransaction = (event) => {
        const transactionToRemove = (this.props.historyOfAllTransactions.filter(transaction => transaction.transactionId === parseFloat(event.target.value)))[0]
        const indexOfTransactionToRemove = this.props.historyOfAllTransactions.indexOf(transactionToRemove)
        this.props.dispatch({type:DELETE_TRANSACTION_SUCCESS, indexOfRemovedTransaction: indexOfTransactionToRemove})
    }

    // Function which helps convert EURO to PLN
    changeFromEuroToPln = amountInEuro => {
        return Math.floor(amountInEuro * this.props.exchangeValueRate * 100) / 100
    }

    // Sorting array by transaction id / date
    sortArrayByTransactionId = ( a, b ) => {
        if ( a.transactionId > b.transactionId ){
          return -1;
        }
        if ( a.transactionId < b.transactionId ){
          return 1;
        }
        return 0;
      }

    render() { 
        return ( 
            <Paper>
                <br/>
                <Typography variant="h4" component="h2">
                Historia transakcji
                </Typography>
                {/* DISPLAYING ALL TRANSACTIONS THAT WERE MADE */}
                {this.props.historyOfAllTransactions.sort(this.sortArrayByTransactionId).map(transaction => {
                    return (
                    <Typography key={transaction.transactionId} variant="h6" component="h5">
                    Nr transakcji: {transaction.transactionId} <br></br>
                    Tytuł: {transaction.newTransactionTitle} <br></br>
                    Kwota w euro: {transaction.valueOfNewTransaction} EURO <br></br>
                    Kwota w zł: {this.changeFromEuroToPln(transaction.valueOfNewTransaction)} PLN <br></br>
                    <button type="submit" value={transaction.transactionId} onClick={this.deleteTransaction}>Usuń transakcje</button>
                    </Typography>
                    )
                })}
            </Paper>
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