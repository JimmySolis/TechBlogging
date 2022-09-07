
const confirmDelete = () => {
    let text = 'Are you sure you would like to DELETE your post?'
    if(confirm(text) === true){
      return deletePost();
    }else{ 
        let text = 'Okay not deleting.'
        alert(text)
    }

}

const deletePost = async () => {
    const postNumber = document.querySelector('#postId');
    const post_id = postNumber.innerHTML;

    if(post_id){
        const response = await fetch('/api/users/delete', {
            method: 'DELETE',
            body: JSON.stringify({post_id}),
            headers: {'Content-type' : 'application/json'}
        })

        if(response.ok){
            document.location.replace('/dash')
        } else {
            alert('We could not delete your post. Plese Refresh and try again.')
        }
    }


}

document
.querySelector('.bin')
.addEventListener('click', confirmDelete)