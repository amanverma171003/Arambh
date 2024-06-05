// Fetch places from the API
const baseUrl = 'http://localhost:3000';

const fetchPlaces = () => {
    fetch(`${baseUrl}/places`)
      .then(response => response.json())
      .then(data => {
        const placesList = document.getElementById('placesList');
        placesList.innerHTML = '';
        data.forEach(place => {
          const listItem = document.createElement('li');
        //   listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
          listItem.innerHTML = `
          <a href="" class="card">
          <img src="${place.imageUrl}" alt="${place.name}" class="card__image" />
          <div class="card__overlay">
            <div class="card__header">
              <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
              <img class="card__thumb" src="./assets/user.png" alt="" />
              <div class="card__header-text">
                <h3 class="card__title">${place.name}</h3>            
                <span class="card__status">${place.location}</span>
              </div>
            </div>
            <p class="card__description">${place.description}</p>
          </div>
        </a> 
          `;
          placesList.appendChild(listItem);
        });
      })
      .catch(error => showMessage('Error fetching places', 'danger'));
  };
  fetchPlaces();


  // Fetch events from the API
const fetchEvents = () => {
    fetch(`${baseUrl}/events`)
      .then(response => response.json())
      .then(data => {
        const eventsList = document.getElementById('eventslist');
        eventsList.innerHTML = '';
        data.forEach(event => {
          const listItem = document.createElement('li');
          listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
          listItem.innerHTML = `
          <a href="" class="card">
          <img src="${event.imageUrl}" alt="${event.name}" class="card__image" />
          <div class="card__overlay">
            <div class="card__header">
              <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
              <img class="card__thumb" src="./assets/user.png" alt="" />
              <div class="card__header-text">
                <h3 class="card__title">${event.name}</h3>            
                <span class="card__status">${event.location}</span>
              </div>
            </div>
            <p class="card__description">${event.description}</p>
          </div>
        </a> 
          `;
          eventsList.appendChild(listItem);
        });
      })
      .catch(error => showMessage('Error fetching events', 'danger'));
  };
fetchEvents();  
               

          