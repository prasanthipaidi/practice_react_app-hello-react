import {createStore,combineReducers} from 'redux';

const inputData={
    username:'',
    password:''
};

const signupData={
    username:'',
    password:'',
    email:''
};

const condition={app:false};

const addressDetails = [];

const cardDetails = [];

const inputLoginReducer = (state=inputData,action) => {
        if(action.type==='login') {
            return {...action.payload};
        }
        return state;
};

const inputSignupReducer = (state=signupData,action) => {
    if(action.type==='signup') {
        return {...action.payload};
    }
    return state;
};

const conditionReducer = (state=condition,action) => {
    if(action.type==='conditionData') {
        return {...action.payload};
    }
    return state;
};

const addressReducer = (state=addressDetails,action) => {
    if(action.type==='addressData') {
        return [...action.payload];
    }
    return state;
};

const cardReducer = (state=cardDetails,action) => {
    if(action.type==='cardData') {
        return [...action.payload];
    }
    return state;
};
const rootReducer = combineReducers(
    {inputLoginReducer,
    inputSignupReducer,
    conditionReducer,
    addressReducer,
    cardReducer}
    );

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;