import axios from "axios";

export function FetchedData(){
    return(dispatch)=>{
        return axios.get(`https://reqres.in/api/users?page=1`).then((response)=>{
            dispatch(DataList(response.data.data));
        })
    }
}

export function DataList(Data){
    return{
        type:"dataList",
        Data:Data
    }
}