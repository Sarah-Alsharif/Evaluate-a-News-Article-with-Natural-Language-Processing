/*send the text to server to fetch data from sdk */
async function analysis(text={})  {

	const response = await fetch(`http://localhost:8080/analysis`, {
	method: 'POST', 
	credentials: 'same-origin',
	headers: {
		'Content-Type': 'application/json',
	},
	   
	body: JSON.stringify({value:text}), 
  });

	try {
	  const newData = await response.json();
	  console.log(newData)
	  Client.updateUI(newData);
	}
	catch(error) {
	  console.log("error", error);
	  }
	   
}

export { analysis };




