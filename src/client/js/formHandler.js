export function handleSubmit(event) {
    event.preventDefault()
  
    let formText = document.getElementById('text').value
 
    if (formText.length == ' ') {
        console.log("you should enter a text");
        alert("you should enter a text");

	 // send the text to analysis Function
	} else {
        Client.analysis(formText);
  
	}

}







