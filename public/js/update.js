const updatePost = async (event) => {
    event.preventDefault();


    
    const newTitle = document.querySelector('#updatePost-title').value.trim();
    const newContent = document.querySelector('#updatePost-content').value.trim();
    const postNumber = document.querySelector('#postId');
    const post_id = postNumber.innerHTML;

    if(newTitle && newContent && post_id){
        const response = await fetch('/api/users/update', {
            method: 'PUT',
            body: JSON.stringify({newTitle, newContent, post_id}),
            headers: {'Content-type' : 'application/json'}
        })

        if(response.ok){
            document.location.replace('/dash')
        } else{
            alert('We could not update your post. Make sure you have a Title and Content.')
        }
    }

}


document
.querySelector('.update-form')
.addEventListener('submit', updatePost);

