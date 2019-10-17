import React, { Component } from 'react';
import {connect} from 'react-redux';
import { CHANGE_EXCHANGE_VALUE_RATE } from '../../constants/ACTION_TYPES';

class CurrencyConverter extends Component {
    state = {
        newExchangeValueRate: 0
    }

    // Handling change of input and updating local state
    onChange = (event) => {
        const target = event.target;
        this.replaceCommaWithPeriod(target.value)
        this.setState({
            newExchangeValueRate: parseFloat(target.value),
        })
    }

    // Handling button confirm and updating global state
    changeExchangeValue = (event) => {
        this.props.dispatch({type:CHANGE_EXCHANGE_VALUE_RATE, newExchangeValueRate:this.state.newExchangeValueRate})
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
                        <input onChange={this.onChange} type="number" name="newExchangeValueRate" min="0.01" step="0.01" defaultValue={this.props.exchangeValueRate} required></input>
                        <button onClick={this.changeExchangeValue} type="submit">Potwierdź</button>
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