import React, { Component } from 'react';
import {connect} from 'react-redux';
import { CHANGE_EXCHANGE_VALUE_RATE } from '../../constants/ACTION_TYPES';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class CurrencyConverter extends Component {

    // Handling exchange value rate and updating global state
    changeExchangeValue = (event) => {
        this.props.dispatch({type:CHANGE_EXCHANGE_VALUE_RATE, newExchangeValueRate:event.target.value})
        event.preventDefault()
    }

    render() { 
        return ( 
                <Paper>
                    <br/>
                <Typography variant="h4" component="h2">
                Aktualny kurs Euro: 1 EUR = {this.props.exchangeValueRate} PLN
                </Typography>
                <br/>
                <Typography variant="h5" component="h1">
                Zmień kurs Euro: 
                <br/>
                        <input onChange={this.changeExchangeValue} type="number" name="newExchangeValueRate" min="0.01" step="0.01" defaultValue={this.props.exchangeValueRate} required></input>
                </Typography>
                </Paper>
         );
    }
}

const mapStateToProps = state => {
    return {
        exchangeValueRate: state.exchangeValueRate
    }
}

export default connect(mapStateToProps)(CurrencyConverter);