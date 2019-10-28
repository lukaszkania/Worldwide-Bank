import React, { Component } from 'react';
import {connect} from 'react-redux';
import { GET_SUM_OF_TRANSACTIONS } from '../../constants/ACTION_TYPES';
import { NO_TRANSACTIONS_WERE_MADE } from '../../constants/VARIABLES';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class SumOfTransactions extends Component {
    // Updating sum of all transactions after any change of array of all transactions
    componentDidUpdate(){
        if (this.props.historyOfAllTransactions.length > 0){
        const allTransactionsValues = this.props.historyOfAllTransactions.map(transaction => {return transaction.valueOfNewTransaction}) // Getting array of all values of transactions that were made
        const sumOfAllTransactions = allTransactionsValues.reduce((prevVal, currentVal) => {return prevVal + currentVal}) // Getting sum of made array
        const roundedSumOfAllTransactions = Math.floor(sumOfAllTransactions * 100) / 100 // Rounding sum to two decimal places and down
        this.props.dispatch({type:GET_SUM_OF_TRANSACTIONS, sumOfAllTransactions:roundedSumOfAllTransactions})
        }else{
            this.props.dispatch({type:GET_SUM_OF_TRANSACTIONS, sumOfAllTransactions:NO_TRANSACTIONS_WERE_MADE})
            
        }
    }
    render() { 
        return ( 
            <Paper>
                <Typography variant="h6" component="h5">
                {this.props.sumOfAllTransactions === 0 ? (
                <div>
                    {NO_TRANSACTIONS_WERE_MADE}
                </div>
                ):(
                <div>
                    Suma wszystkich wykonanych transakcji: {this.props.sumOfAllTransactions}
                </div>)}
                </Typography>
                </Paper>
         );
    }
}
 
const mapStateToProps = state => {
    return {
    historyOfAllTransactions: state.historyOfAllTransactions,
    sumOfAllTransactions: state.sumOfAllTransactions
    }
}

export default connect(mapStateToProps)(SumOfTransactions);