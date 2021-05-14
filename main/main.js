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
        let triggerButton = document.querySelector('.trigger')
        let modal = document.querySelector('.popModal')
        let modalCloseBtn = document.querySelector('.modalCloseBtn')

        triggerButton.onclick = function(){
            modal.style.display = "block"
          }


        modalCloseBtn.onclick = function(){
            modal.style.display = "none"
          }
          