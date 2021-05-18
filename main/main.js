/*const formSub = document.getElementsByTagName('form')
        const submitButton = document.getElementsByClassName('sub-button')
        submitButton.addEventListener('click', function removeDiv(){
            formSub.style.display = none;
            const welcomeMessage = document.createElement('p');
            welcomeMessage.setAttribute('class', 'messaging')
            welcomeMessage.innerHTML = "Thanks for getting in touch with us. You'd be hearing from us shortly"

            const heading= document.getElementsByClassName('container');
            heading.appendChild(welcomeMessage);
            welcomeMessage.style.display = block;
        })*/
        //Creating a pop-modal that pops up on click of the 'let's get started button"
        let triggerButton = document.getElementsByClassName('trigger')
        let modal = document.getElementsByClassName('popModal')
        let modalCloseBtn = document.querySelector('.modalCloseButton')

        triggerButton.onclick = function(){
            modal.style.display = "block"
            //console.log("I just clicked a button")
          }


        modalCloseBtn.onclick = function(){
            modal.style.display = "none"
          }
          let firstName = document.getElementById('fName')
          let lastName = document.getElementById('lName')
          let emailAddress = document.getElementById('emailAddress')
          let inputElements = document.getElementsByClassName('group1')
          let submitButton = document.getElementsByClassName('sub-button')
          let buttonLength = submitButton.length
          console.log(buttonLength)
          let arrDetails = []

          function formValidation(){
            submitButton[0].addEventListener('click', validate
          
            
          )
          console.log(arrDetails)
          
          
          }
          formValidation()

          function validate(){
            
            if(firstName.value === ""){
              alert('please enter your first name')
        
            }arrDetails.push(firstName.value)
              
            
            if(lastName.value === ""){
              alert('please enter your last name')
              
             
            }arrDetails.push(lastName.value)
            
            if(emailAddress.value === ""){
              alert('please enter a valid email address')
              
            }arrDetails.push(emailAddress.value)
            
            
            
            
          }
          validate()

         


          