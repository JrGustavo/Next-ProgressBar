
async function loadPosts() {
    await new Promise(resolve => setTimeout(resolve, 5000));

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    console.log(data);
}


async function PostPage() {

    await loadPosts();
    return (
        <div>PostPage</div>
    )
}

export default PostPage;