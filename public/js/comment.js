const addComment = async (event) => {
event.preventDefault();

    const comment = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#post_id').innerHTML;

    if(comment){
        const response = await fetch('/comment/add', {
            method: 'POST',
            body: JSON.stringify({comment, post_id}),
            headers: {'Content-type' : 'application/json'}
        })

        if(response.ok){
            document.location.replace('/')
        } else {
            alert('Comment can not be created right now.')
        }

    }

}


document
.querySelector('.comment-form')
.addEventListener('click', addComment)