import React, { Component } from 'react';
import {connect} from 'react-redux';
import { GET_SUM_OF_TRANSACTIONS } from '../../constants/ACTION_TYPES';
import { NO_TRANSACTIONS_WERE_MADE } from '../../constants/VARIABLES';

class SumOfTransactions extends Component {
    state = {  }
    componentDidUpdate(){
        if (this.props.historyOfAllTransactions.length > 0){
        const allTransactionsValues = this.props.historyOfAllTransactions.map(transaction => {return transaction.valueOfNewTransaction})
        const sumOfAllTransactions = allTransactionsValues.reduce((prevVal, currentVal) => {return prevVal + currentVal})
        const roundedSumOfAllTransactions = Math.floor(sumOfAllTransactions * 100) / 100
        this.props.dispatch({type:GET_SUM_OF_TRANSACTIONS, sumOfAllTransactions:roundedSumOfAllTransactions})
        }else{
            this.props.dispatch({type:GET_SUM_OF_TRANSACTIONS, sumOfAllTransactions:NO_TRANSACTIONS_WERE_MADE})
            
        }
    }
    render() { 
        return ( 
            <div>
                Sum of transactions: {this.props.sumOfAllTransactions}
            </div>
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