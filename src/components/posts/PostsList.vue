<template>

    <div>
        <div v-if="loading === false && error === ''"> 
            <div v-for="post in postList" :key= post.id>
                <p>{{post.title}}</p>
                <p>{{post.body}}</p>
            </div>
        </div>

        <div v-else>

            <div v-if="loading === true">
                loading
            </div>
            <div v-else>
                {{error}}
            </div>
            
        </div>

    </div>

  
</template>

<script lang="ts">
import { Ref, ref, defineComponent, watch } from 'vue'
import {Post} from '../../interfaces/PostTypes'
import {createPostList} from './PostActions'

export default defineComponent({

    setup(){
        const postList: Ref<Array<Post>> =  ref([])
        const loading: Ref<boolean> = ref(false);
        const error: Ref<String> = ref('')
        
        createPostList(postList, loading, error);

        return {postList, loading, error}
    }
});
</script>

<style>

</style>