import React, { Component } from 'react';
import {connect} from 'react-redux';
import { CHANGE_EXCHANGE_VALUE_RATE } from '../../constants/ACTION_TYPES';

class CurrencyConverter extends Component {

    // Handling exchange value rate and updating global state
    changeExchangeValue = (event) => {
        this.props.dispatch({type:CHANGE_EXCHANGE_VALUE_RATE, newExchangeValueRate:event.target.value})
        event.preventDefault()
    }

    render() { 
        return ( 
            <div>
                <div>
                    Aktualny kurs Euro: 1 EUR = {this.props.exchangeValueRate} PLN
                </div>
                <div>
                    <form>
                        Zmień kurs Euro: 
                        <input onChange={this.changeExchangeValue} type="number" name="newExchangeValueRate" min="0.01" step="0.01" defaultValue={this.props.exchangeValueRate} required></input>
                    </form>
                </div>
                
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        exchangeValueRate: state.exchangeValueRate
    }
}

export default connect(mapStateToProps)(CurrencyConverter);