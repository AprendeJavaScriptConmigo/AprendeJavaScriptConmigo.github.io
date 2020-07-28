let globalNombres = ['uno','dos','tres','cuatro'];
let inputName = null;
let isEditing = false;
let currentIndex = null;

window.addEventListener('load', () => {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
  render();

});

function preventFormSubmit() {

  function handleFormSubmit(event){
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit',handleFormSubmit)
}

function activateInput() {
  function insertName(newName) {
    //globalNombres.push(newName);
    globalNombres = [...globalNombres,newName];
  }

  function updateName(newName){
    globalNombres[currentIndex] = newName;
  }

  function handlesTyping(event) {
    if(event.key === 'Enter') {
      if(isEditing){
        updateName(event.target.value);
      }else{
        insertName(event.target.value);
      }

      render();
      isEditing = false;
      clearInput();
    }
  }

  inputName.focus();
  inputName.addEventListener('keyup', handlesTyping);
}

function render(){

  function createDeleteButton(index){
    function deleteName(){
      //globalNombres.splice(index,1);
      /*
      globalNombres = globalNombres.filter((name,i) =>{
        if(i === index){
          return false;
        }else{
          return true;
        }
        });
        */
       globalNombres = globalNombres.filter((_,i) => i !== index);
      
      render();
    }

    var button = document.createElement('button');
    button.classList.add('deletebutton');
    button.textContent = 'x';
    button.addEventListener('click', deleteName);

    return button;
  }

  function createSpan(name,index){
    function editItem(){
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }

    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);

    return span;
  }

  var divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  var ul = document.createElement('ul');

  for(var i = 0; i < globalNombres.length; i++){
    var currentName = globalNombres[i];

    var li = document.createElement('li');
    var button = createDeleteButton(i);
    var span = createSpan(currentName,i);

    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
  
  divNames.appendChild(ul);
  clearInput();
}
/*
function clearInput() {
  inputName.value = '';
  inputName.focus();
}
*/

const clearInput = () => {
  inputName.value = '';
  inputName.focus();
};
