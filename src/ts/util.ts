import AsyncStorage from "@react-native-async-storage/async-storage";
import { and } from "react-native-reanimated";

export const getRequest=(url:string,{params={},headers={}}={})=>{
    console.log(url+'?'+queryString(params))
    return fetch(url+'?'+queryString(params),{
        method:'GET',
        headers:{
            'content-type':'application/json',
            'accept':'application/json',
            ...headers
        }
    }).catch((e)=>{
        console.log(e);
    })
}


export const resolveFetch= async(resolve:any,format:string='json')=>{
    if(resolve?.status===200 || resolve?.status===304){
        const result = await resolve[format]();
        return {result};
    }
    if(resolve?.status===404) return {status:resolve.status, error:'not Found'}
    if(resolve?.status>=500) return {status:resolve.status, error:'error on server'}
    return {status:(resolve?.status)?resolve.status:undefined, error:'error on resolve'}
}

export const queryString =(params:any)=> Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');


export const buildHandleChanger=(initialState:object,setState:Function)=>{
    let object={};
    Object.keys(initialState).forEach((item)=>(object={...object,[item]:(v:any)=>setState((pv:object)=>({...pv,[item]:v}))}))
    return object;
}

export const handleChange=(key:string,value:any,setState:Function)=>{
    setState((pv:object)=>({...pv,[key]:value}))
}

export const addItemCache=async (key:string,value:any,filteredIndex='')=>{
    const cacheData = await AsyncStorage.getItem(key) as string;
    try {
        let resultCache = JSON.parse(cacheData);
        if(resultCache && Array.isArray(resultCache)){
            if(filteredIndex!=''){
                const result = resultCache.filter((item)=>{
                    return(value[filteredIndex]===item[filteredIndex])
                });
                if(result.length>0){
                    alert('Ya tienes esta pelicula en favoritos');
                    return false;
                }
            }
            resultCache.push(value);
        }
        else{
            resultCache=[value];
        }
        AsyncStorage.setItem(key,JSON.stringify(resultCache));
        return true;
    } catch (error) {
        console.log(error)
    }
    return false;
}

export const getItemCache=async(key:string,parsed=false)=>{
    const cacheData= await AsyncStorage.getItem(key) as string;
    return (parsed)?JSON.parse(cacheData):cacheData;
}

export const removeItemCache=async(key:string,value,filteredIndex)=>{
    const cacheData = await AsyncStorage.getItem(key) as string;
    try{
        const resultCache = JSON.parse(cacheData);
        if(resultCache && Array.isArray(resultCache)){
            let result=[];
            if(filteredIndex){
                result = resultCache.filter((item)=>{
                    return(value[filteredIndex]!==item[filteredIndex])
                });
            }
            else{
                result=result.filter((item)=>value!==item);
            }
            AsyncStorage.setItem(key,JSON.stringify(result));
            return true;
        }
    }catch(error){
        console.log(error)
    }
    return false;
}
