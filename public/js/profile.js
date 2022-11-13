const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#pet-name').value.trim();
  const species = document.querySelector('#species').value.trim();
  const breed = document.querySelector('#breed').value.trim();
  const gender = document.querySelector('#gender').value.trim();
  const description = document.querySelector('#pet-desc').value.trim();

  if (name && species && breed && gender && description) {
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({ name, species, breed, gender, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create pet');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/pets/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete pet');
    }
  }
};

document
  .querySelector('.new-pet-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.pet-list')
  .addEventListener('click', delButtonHandler);
