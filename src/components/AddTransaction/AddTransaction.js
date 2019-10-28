import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ADD_NEW_TRANSACTION_SUCCESS } from '../../constants/ACTION_TYPES';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

            <Paper>
                <br/>
                <Typography variant="h5" component="h1">
                Wykonaj transakcje:
                </Typography>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} name="newTransactionTitle" type="text" placeholder="Nazwa transakcji" required></input>
                    <input onChange={this.onChange} name="valueOfNewTransaction" type="number" min="0.01" step="0.01" value={this.props.exchangeValueRate} placeholder="Kwota transakcji" required></input>
                    <br/>
                    <br/>
                    <Button type="submit" variant="contained" color="primary" >
                        Dodaj transakcje
                    </Button>
                </form>
            </Paper>
        
         );
    }
}
 
const mapStateToProps = state => {
    return {
        historyOfAllTransactions: state.historyOfAllTransactions
    }
}

export default connect(mapStateToProps)(AddTransaction);