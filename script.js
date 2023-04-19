const button = document.getElementById('generate');
button.addEventListener('click',function(){
    const placarB = parseInt(document.getElementById('placarB').value); 
    const placarA = parseInt(document.getElementById('placarA').value);
    
    let result = Math.floor(Math.random() * (placarA - placarB + 1)) + placarB;
    document.querySelector("#result > span").textContent = result;
});
