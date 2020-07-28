function qSelector(){
  var textoe = document.querySelector('#text');
  textoe.textContent = 'Modificado usando DOM querySelector';
}

function qSelectorAll() {
  var data = document.querySelectorAll('.dqs');

  for(var i = 0; i < data.length; i++){
    var currentElement = data[i];
    currentElement.classList.add('nuevaclase');
  }

}
