const postHandeler =  async (event) => {
    event.preventDefault();


      const title = document.querySelector('#post-title').value.trim();
      const content = document.querySelector('#post-content').value.trim();

      if(title && content){
        const response = await fetch('/api/users/post', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-type' : 'application/json' }
        });

        if(response.ok){
            document.location.replace('/dash')
        } else {
            alert('Sorry, did could not make the post. Plaese make sure you have a title and content.')
        }
      }
}



document
      .querySelector('.post-form')
      .addEventListener('submit', postHandeler)












