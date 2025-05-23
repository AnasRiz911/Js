    function subscribe(){
        const buttonElement = document.querySelector('button');
            if (buttonElement.innerHTML === 'Subscribe'){
            document.querySelector('button').innerHTML = 'Subscribed';
            } else{
            document.querySelector('button').innerHTML = 'Subscribe';
            }
    }