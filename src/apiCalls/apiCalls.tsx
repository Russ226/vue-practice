import axios from "axios";

const baseUrl: String = 'https://jsonplaceholder.typicode.com';


export const getAllPosts = async (callBack: Function) => {
    await axios.get(baseUrl + '/posts').then(response => callBack(response)).catch(e => callBack(e))
}

export const getPostbyId = async (postId: Number, callBack: Function) => {
    await axios.get(baseUrl + `/posts/${postId}`).then(response => callBack(response)).catch(e => callBack(e))
}

export const getCommentsByPost = async (postId: Number, callBack: Function) => {
    await axios.get(baseUrl + `/comments?${postId}`).then(response => callBack(response)).catch(e => callBack(e))
}
