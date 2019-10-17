import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ADD_NEW_TRANSACTION_SUCCESS } from '../../constants/ACTION_TYPES';

class AddTransaction extends Component {
    state = { 
        transactionId: 0,
        newTransactionTitle: "",
        valueOfNewTransaction:"",
        newTransaction:{} // Object which will be pushed to historyOfAllTransactions variable
     }
    //  Handling changes of inputs
    onChange = (event) => {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: target.value,
        })
    }
    onSubmit = (event) => {
        event.preventDefault()
        // Creating new transaction variable
        const newTransaction = {
                transactionId: this.state.transactionId + 1,
                newTransactionTitle: this.state.newTransactionTitle,
                valueOfNewTransaction: parseFloat(this.state.valueOfNewTransaction)
            }
        // Increment transaction ID
        this.setState({
            transactionId: this.state.transactionId + 1
        })
        
        // Modifing history of all transactions
        this.props.dispatch({type:ADD_NEW_TRANSACTION_SUCCESS, newTransaction:newTransaction})

    }

    render() { 
        return ( 
            <div>
                Wykonaj transakcje:
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} name="newTransactionTitle" type="text" placeholder="Nazwa transakcji" required></input>
                    <input onChange={this.onChange} name="valueOfNewTransaction" type="number" min="0.01" step="0.01" value={this.props.exchangeValueRate} placeholder="Nowa transakcja" required></input>
                    <button type="submit">Dodaj</button>
                </form>

            </div>
         );
    }
}
 
const mapStateToProps = state => {
    return {
        historyOfAllTransactions: state.historyOfAllTransactions
    }
}

export default connect(mapStateToProps)(AddTransaction);