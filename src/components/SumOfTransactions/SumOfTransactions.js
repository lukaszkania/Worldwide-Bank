import React, { Component } from 'react';
import {connect} from 'react-redux';
import { GET_SUM_OF_TRANSACTIONS } from '../../constants/ACTION_TYPES';

class SumOfTransactions extends Component {
    state = {  }
    componentDidUpdate(){
        const allTransactionsValues = this.props.historyOfAllTransactions.map(transaction => {return transaction.valueOfNewTransaction})
        const sumOfAllTransactions = allTransactionsValues.reduce((prevVal, currentVal) => {return prevVal + currentVal})
        this.props.dispatch({type:GET_SUM_OF_TRANSACTIONS, sumOfAllTransactions:sumOfAllTransactions})
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