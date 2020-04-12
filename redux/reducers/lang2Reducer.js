const initialState = "english";


const lang1Reducer =(state= initialState, action)=>{
    switch(action.type){
        case 'SET_LANG2':
            return action.payload;
            break;
            case 'GET_LANG2':
                return state;
                default:
                    return state;
    };
}


export default lang1Reducer;