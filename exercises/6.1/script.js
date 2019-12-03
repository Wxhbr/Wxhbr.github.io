function prevent(event) {    
  event.preventDefault();
}

function validate(event) {
  const reData = new RegExp('^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$');
  const reEmail = new RegExp('^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$');
  document.querySelectorAll('.validate').forEach(element => {
    if (reEmail.test(element.value) || reData.test(element.value)) {
        
    } else {
        
    }
  });
}



function startingEvents() {
  document.querySelectorAll('.input').forEach(element => {
    element.addEventListener('click', prevent);
  });
}

window.onload = function load() {
  document.querySelector('.btn').addEventListener('click', prevent);
  document.querySelector('.btn').addEventListener('click', validate);
}
