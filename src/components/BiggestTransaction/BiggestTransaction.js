import React, { Component } from 'react';
import {connect} from "react-redux";
import { GET_THE_BIGGEST_TRANSACTION } from '../../constants/ACTION_TYPES';
import { NO_TRANSACTIONS_WERE_MADE } from '../../constants/VARIABLES';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class BiggestTransaction extends Component {
    // Update biggestTransaction variable if value of new transaction that was added is bigger than actual 
    componentDidUpdate(){
        if(this.props.historyOfAllTransactions.length > 0){
        // Sorting array of transactions objects by its valueOfNewTransaction and getting the highest (first) object
        const biggestTransaction = this.props.historyOfAllTransactions.sort((a, b) => (a.valueOfNewTransaction < b.valueOfNewTransaction) ? 1 : -1)[0]
        this.props.dispatch({type:GET_THE_BIGGEST_TRANSACTION, biggestTransaction:biggestTransaction})
        }else{
            // Assigne NO_TRANSACTIONS_WERE_MADE const variable to biggestTransaction cause the history of all transactions is empty
            this.props.dispatch({type:GET_THE_BIGGEST_TRANSACTION, biggestTransaction:NO_TRANSACTIONS_WERE_MADE})

        }
    }

    // Function which helps convert EURO to PLN
    changeFromEuroToPln = amountInEuro => {
        return Math.floor(amountInEuro * this.props.exchangeValueRate * 100) / 100
    }

    render() { 
        // Our main component which can change when new transactions will be added or the old ones will be removed
        let MainBiggestTransactionComponentt = this.props.historyOfAllTransactions.length > 0 ? (
            
            <Paper>
                <Typography variant="h6" component="h5">
                Największa transakcja: <br/>
                Nr transakcji: {this.props.biggestTransaction.transactionId}<br/>
                Tytuł transakcji: {this.props.biggestTransaction.newTransactionTitle}<br/>
                Kwota transakcji: {this.props.biggestTransaction.valueOfNewTransaction} EURO<br/>
                Kwota transakcji: {this.changeFromEuroToPln(this.props.biggestTransaction.valueOfNewTransaction)} PLN<br/>
                </Typography>
            </Paper>
        ) : (
            <Paper>
            <Typography variant="h6" component="h5">
            Nie znaleziono największej transakcji...
            </Typography>
            </Paper>
        )

        return ( 
        
            MainBiggestTransactionComponentt

         );
    }
}

const mapStateToProps = state => {
    return {
        historyOfAllTransactions: state.historyOfAllTransactions,
        biggestTransaction: state.biggestTransaction,
        exchangeValueRate: state.exchangeValueRate
    }
}

export default connect(mapStateToProps)(BiggestTransaction);