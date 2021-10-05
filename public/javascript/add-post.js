let file = null;

async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const body = document.querySelector('textarea[name="post-blog"]').value;


  const formData = new FormData();
  formData.append('title', title);
  formData.append('blog', body);

  console.log(formData);

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .getElementById('post-img')
  .addEventListener('change', e => {
    file = e.target.files[0];
  });
