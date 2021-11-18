const randomNumber1 = Math.floor(Math.random() * 6)+1;
const randomNumber2= Math.floor(Math.random() * 6)+1;

const firstDiceImage = 'dice'+randomNumber1+'.png';
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage)

const secondDiceImage = 'dice'+randomNumber2+'.png';
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage)


if (randomNumber1>randomNumber2){
    document.querySelector('h2').innerHTML="Player 1 Won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector('h2').innerHTML="Player 2 Won";   
}

else{
    document.querySelector('h2').innerHTML="Draw";
}

function refreshPage(){
    window.location.reload();
}