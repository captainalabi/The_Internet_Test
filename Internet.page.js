class Internet{

//pageobject for https://the-internet.herokuapp.com/

//add/remove element
get addElement(){ 
    return $( '#content button');
}
get deleteButton(){
    return $( '#elements button:nth-child(1)');
}

async clickAddElement(){
   await this.addElement.click()
}
}
export default new Internet();