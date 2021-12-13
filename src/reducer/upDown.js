const initialState=5000;
const changeNumber=(state=initialState, action)=>{
    switch(action.type){
        case "INCREMENT": return state+100;
        case "DECREMENT": return state-50;
        default: return state;
    }
}

export default changeNumber;