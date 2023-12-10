import { fetchRandomUser, fetchCurrentTime } from './api.js';
import { parseUserData } from './utils.js';

const container = document.querySelector('.container');
const card = document.createElement('div');
card.classList.add('card');
// Crea la imagen
const image = document.createElement('img');
image.src = 'imagen/user_nt_found.jpg';
card.appendChild(image);
// Agrega la tarjeta al contenedor
container.appendChild(card);
// Crea los elementos span
const spanNames = ['Name', 'Mail', 'Phone', 'Location', 'Current Time'];
spanNames.forEach(name => {
  const span = document.createElement('span');
  const strong = document.createElement('strong');
  strong.textContent = name + ': ';
  span.appendChild(strong);
  card.appendChild(span);
});


// Crea el botón
const button = document.createElement('button');
button.textContent = 'Generate user';
button.addEventListener('click', async () => {
  try {
    const userData = await fetchRandomUser();
    const person = parseUserData(userData);
    const currentTime = await fetchCurrentTime(person.location);
    updateCard(person, currentTime);
  } catch (error) {
    console.error('Error:', error);
  }
});
const updateCard = (person, currentTime) => {
  // Actualiza la imagen del usuario
  image.src = person.picture;
  // Actualiza los elementos span con los datos del usuario
  document.querySelector('span:nth-of-type(1) strong').textContent = 'Name: ' + person.name;
  document.querySelector('span:nth-of-type(2) strong').textContent = 'Mail: ' + person.email;
  document.querySelector('span:nth-of-type(3) strong').textContent = 'Phone: ' + person.phone;
  document.querySelector('span:nth-of-type(4) strong').textContent = 'Location: ' + person.location;
  // Verifica que currentTime esté definido antes de usarlo
  if (currentTime) {
    document.querySelector('span:nth-of-type(5) strong').textContent = 'Current Time: ' + currentTime.hour + ':' + currentTime.minute + ':' + currentTime.second;
  } else {
    console.warn('Current time not available.');
  }
};

container.appendChild(button);

