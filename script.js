    function general(event){
      event.preventDefault();
  let inputElements = document.getElementById("input-first-name");
  let lastName = document.getElementById("last-name");
    
    let emailInput = document.getElementById("email-input");
    
    let radioButton1 = document.getElementById("radioButton1").checked;
    
    let radioButton2 = document.getElementById("radioButton2").checked;
    
    let consent = document.getElementById("consent")
    let consentValue = consent.checked;
    
    let jsMessage = document.querySelector(".jsMessage");
    
    
    
   let inputValue = inputElements.value;
   let lastNameValue = lastName.value;
   let emailValue = emailInput.value;
   let jsMessageValue = jsMessage.value;
   
   if (!consentValue) {
  alert("You must give consent before submitting the form.");
  return;
}
   
       if (
  inputValue === "" ||
  lastNameValue === "" ||
  emailValue === "" ||
  (!radioButton1 && !radioButton2) ||
  jsMessageValue === ""
) {
  alert("Please fill all the form fields.");
  return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(emailValue)) {
  alert("Please enter a valid email address.");
  return;
}
    
  
  Swal.fire({
  toast: true,
  position: 'top-end',
  icon: 'success',
  title: 'Form submitted successfully!',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});
    
   inputElements.value = "";
   lastName.value = "";
   emailInput.value = "";
    jsMessage.value = "";
  consent.checked = false;
    
    
    let radioButtons = document.querySelectorAll(".radioButtons");
    radioButtons.forEach((list) => {
      list.checked = false;
    })
    

    }
  
  