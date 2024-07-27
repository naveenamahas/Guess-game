let randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const guessInput = document.getElementById('guessInput').value;
    const result = document.getElementById('result');
    const attempt=0;
    if(!guessInput){
         result.textContent = ' Iyoo ethavathu sollu.';
         result.style.color = 'white';
         
    }

    else if (guessInput < randomNumber) {
        result.textContent = 'INUM UNKITA NA NERAYA ETHIR PAKUREN';
        result.style.color = 'white';
        document.getElementById("guessInput").value = '';
        attempt--;
    } else if (guessInput > randomNumber) {
        result.textContent = 'IVLO PERUSA VENA THAMBI😰.';
        result.style.color = 'white';
        
        document.getElementById("guessInput").value = '';
        attempt--;
    
    } else {
        result.textContent = 'NAMMA JEITOM MARRA!!!!...🤩';
        result.style.color = 'red';
        document.getElementById("guessInput").value = '';

    }
    
}
