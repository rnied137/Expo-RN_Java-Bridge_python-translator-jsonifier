export const setLanguage1 =(language) => {
    return {
        type:"SET_LANG1",
        payload:language
    };
}


export const setLanguage2 =(language) => {
    return {
        type:"SET_LANG2",
        payload:language
    };
}

export const getLanguage1=()=>{
    return {
        type:"GET_LANG1"
    };
}


export const getLanguage2=()=>{
    return {
        type:"GET_LANG2"
    };
}