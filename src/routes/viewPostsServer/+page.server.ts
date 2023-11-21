let posts = [];

export async function load() {
    posts = await getPosts();
    return {
        posts: posts,
        name: 'viewPostsServer'
    }
}

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    posts = await res.json();
    return posts;
}