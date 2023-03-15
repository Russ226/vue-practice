export interface Post {
    userId: Number,
    id: Number,
    title: String,
    body: String
}

export interface Comments {
    postId: Number,
    id: Number,
    name: String,
    email: String,
    body: String
}