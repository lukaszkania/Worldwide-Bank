import React, { Component } from 'react';
import {connect} from 'react-redux';

class CurrencyConverter extends Component {
    state = {}
    changeExchangeValue = () => {}
    render() { 
        return ( 
            <div>
                CurrencyConverterasdasd
                <div>
                    Aktualny kurs Euro: 1 EUR = (euroToZlotyExchangeRate) 
                </div>
                <div>
                    <form>
                        Zmień kurs Euro: {this.props.exchangeValueRate}
                        <input type="number" min="0.01" step="0.01" value={this.props.exchangeValueRate} placeholder="$"></input>
                        <button type="submit">Potwierdź</button>
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