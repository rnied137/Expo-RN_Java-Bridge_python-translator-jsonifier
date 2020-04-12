const initialState = "german";


const lang1Reducer =(state= initialState, action)=>{
    switch(action.type){
        case 'SET_LANG1':
            return action.payload;
            break;
            case 'GET_LANG1':
                return state;
                default:
                    return state;
    };
}


export default lang1Reducer;


