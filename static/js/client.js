'use strict'
var url = window.location.href;

//query selectors
document.querySelector('#load').addEventListener('click', getDictionary);


function getDictionary(){
  //get dictID from webpage, for now do 8212
  var xhr = new XMLHttpRequest;
  xhr.addEventListener('load', function(){
    document.querySelector('#tableContainer').textContent = this.responseText;
  });
  xhr.open('GET', url + 'dictionary/8212');
  xhr.send();
}
/*
Functions I need

newDD(){
 add new database, needs user ID when logged in
}

loadDD(){
 get from DB using id
}

loadTables(dict)
loadFields(dict, table){

}

loadFieldsFromTables(table){
 listen to ul, get child clicked on, get info from db, add or remove required rows, add data
}

addNewRows(number){
 dictonaryTable.children
}
removeRows(number)
*/
