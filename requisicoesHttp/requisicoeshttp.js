window.addEventListener('load', function() {
  doFetch();
  doFetchAsync();

  //console.log(divisionPromise(5,1));
  /*
  divisionPromise(12,0)
    .then(result => {console.log(result);
  })
  .catch(errorMessage => {
    console.log('Fracaso en compartir' + errorMessage);
  });
  */

  executeDivisionPromise(12,3);
  executeDivisionPromiseAsyncAwait(12,1);

});

function showData(data){
  const user = document.querySelector('#user');
  user.textContent = data.login + ' ' + data.name;
}

//no es común crear una promise, pero en momento es solamente para estudiar
function divisionPromise(a, b) {
  return new Promise((resolve , reject) => {
    if(b === 0){
      reject(' No es posible compartir por 0')
    }else{
      resolve(a/b);
    }
  });
}

function executeDivisionPromise(a,b){
  divisionPromise(a,b)
    .then(result => {console.log(result);
  })
  .catch(errorMessage => {
    console.log('Fracaso en compartir' + errorMessage);
  });
}

async function executeDivisionPromiseAsyncAwait(a,b){
  const division = await divisionPromise(a,b);
  console.log(division);
}

function doFetch(){
  fetch('https://api.github.com/users/TulioHenrique')
  .then(res => {
    res.json().then(data => {
      showData(data);
    });
  })
  .catch(error => {
    console.log('Error en la requisición');
  });
}

async function doFetchAsync() {
  const res = await fetch('https://api.github.com/users/TulioHenrique');
  const json = await res.json();
  console.log(json);
}