<template>
  <PostList/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PostList from '../components/posts/PostsList.vue'

@Options({
  components: {
    PostList,
  },
})
export default class HomeView extends Vue {}
</script>
