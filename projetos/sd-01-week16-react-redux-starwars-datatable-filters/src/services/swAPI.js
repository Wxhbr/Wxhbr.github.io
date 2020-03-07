const SW_BASE_API = 'https://swapi.co/api';

export const getCurrentSwPlanets = () => (
  fetch(`${SW_BASE_API}/planets`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);