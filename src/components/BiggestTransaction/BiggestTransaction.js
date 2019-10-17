import React, { Component } from 'react';
import {connect} from "react-redux";
import { GET_THE_BIGGEST_TRANSACTION } from '../../constants/ACTION_TYPES';

class BiggestTransaction extends Component {
    state = {  }
    componentDidUpdate(){
        const biggestTransaction = this.props.historyOfAllTransactions.sort((a, b) => (a.valueOfNewTransaction < b.valueOfNewTransaction) ? 1 : -1)[0]
        this.props.dispatch({type:GET_THE_BIGGEST_TRANSACTION, biggestTransaction:biggestTransaction})
    }
    render() { 

        let MainBiggestTransactionComponentt = this.props.historyOfAllTransactions.length != 0 ? (
            <div>
                jest coś
            </div>
        ) : (
            <div>
            nnie ma nic
            </div>
        )

        return ( 
            <div>
                {MainBiggestTransactionComponentt}
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        historyOfAllTransactions: state.historyOfAllTransactions,
        biggestTransaction: state.biggestTransaction
    }
}

export default connect(mapStateToProps)(BiggestTransaction);