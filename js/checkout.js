const validateEmail = (email) => {
	return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };
// Exercise 6
function validate() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress")
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorAddress = document.getElementById("errorAddress")
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorPhone = document.getElementById("errorPhone");
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value === "" || !fName.value.match(/^[A-Za-z\s]*$/) || fName.value.length < 3){
		error++;
	}

	if(fEmail.value === "" || !validateEmail(fEmail.value) || fEmail.value.length < 3){
		error++;
	}

	if(fAddress.value === "" || fAddress.value.length < 3) {
		error++
	}

	if (fLastN.value === "" || !fLastN.value.match(/^[A-Za-z\s]*$/) || fLastN.value.length < 3) {
		error++
	}
	
	if (fPhone.value === ""  || isNaN(fPhone.value) || fPhone.value.length !== 9) {
		error++
	}

	if(fPassword.value == "" ||  !fPassword.value.match(/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{3,8}$/) || fPassword.value.length < 3){
		error++;
	}
	 
	if(error > 0){
		alert("Error");
	}else{
		alert("OK");
	}

}
