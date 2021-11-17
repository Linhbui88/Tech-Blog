async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const form = document.getElementById('comment-form')

  const post_id = form.getAttribute('data-post_id')

  console.log(post_id)

  if (comment_text) {
      const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
              post_id,
              comment_text
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
          document.location.reload();

      } else {
          alert(response.statusText);
          document.querySelector('#comment-form').style.display = "block";
      }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);