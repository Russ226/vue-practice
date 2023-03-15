import { Ref } from 'vue';
import {Post} from '../../interfaces/PostTypes';
import {getAllPosts} from '../../apiCalls/apiCalls';
import axios, { Axios, AxiosError, AxiosResponse } from 'axios';

export const createPostList = (postList: Ref<Array<Post>>, loading: Ref<boolean>, error: Ref<String>) => {    
    try {
        loading.value = true;
        
        getAllPosts((response: AxiosResponse) => {
            if(!axios.isAxiosError(response)){
                postList.value = response.data
                loading.value = false
            }else{
                let ex = response as any as AxiosError
                loading.value = false
                error.value = `${ex.message},${ex.stack}`
            }
        });

        
    } catch (err) {
        console.log(err)
        if(err instanceof Error){
            error.value = err.message
            loading.value = false;
        }
        
    }

    return
}