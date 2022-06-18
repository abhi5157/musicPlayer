let initialState={
   data : 0
}

const mainReducer=(state=initialState,action)=>{
    if(action.type==="DataList"){
        return{
            ...state,
            data:action.Data
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;