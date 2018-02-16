'use strict'
var url = window.location.href,
    socket = io();

//query selectors
document.querySelector('#load').addEventListener('click', getDictionary);


function getDictionary(){
  var promised = new Promise(() => {})
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
