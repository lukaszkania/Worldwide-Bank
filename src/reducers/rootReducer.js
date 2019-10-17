import { CHANGE_EXCHANGE_VALUE_RATE, ADD_NEW_TRANSACTION_SUCCESS, DELETE_TRANSACTION_SUCCESS, GET_THE_BIGGEST_TRANSACTION, GET_SUM_OF_TRANSACTIONS } from "../constants/ACTION_TYPES";
import { NO_TRANSACTIONS_WERE_MADE } from "../constants/VARIABLES";

const initialState = {
        exchangeValueRate: 1,
        historyOfAllTransactions: [],
        sumOfAllTransactions: NO_TRANSACTIONS_WERE_MADE,
        biggestTransaction: {},
        actualRateInputed: 0
}

function rootReducer(state=initialState, action){
    switch(action.type){
        case ADD_NEW_TRANSACTION_SUCCESS:
            return {
                ...state,
                historyOfAllTransactions: [...state.historyOfAllTransactions, action.newTransaction]
            }
        case DELETE_TRANSACTION_SUCCESS:
            return {
                ...state,
                historyOfAllTransactions:[
                ...state.historyOfAllTransactions.slice(0, action.indexOfRemovedTransaction),
                ...state.historyOfAllTransactions.slice(action.indexOfRemovedTransaction + 1)
                ]
            }
        case CHANGE_EXCHANGE_VALUE_RATE:
            return {
                ...state,
                exchangeValueRate:action.newExchangeValueRate
            }
        case GET_THE_BIGGEST_TRANSACTION:
            return {
                ...state,
                biggestTransaction:action.biggestTransaction
            }
        case GET_SUM_OF_TRANSACTIONS:
            return {
                ...state,
                sumOfAllTransactions:action.sumOfAllTransactions
            }
        default:
            return state
    }
}

export default rootReducer;