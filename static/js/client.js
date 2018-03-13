'use strict'
var url = window.location.href;

//query selectors
document.querySelector('#new').addEventListener('click', showNewDDpopup);

function showNewDDpopup(){
  
}

function showLoadDDpopup(){
  console.log("HKL")
}

function showConstraintPopup(){
  console.log("HKLs");
}
/*
* tables = array of table names eg ["Product", "Customer"]
* fields = JSON object
*/

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
