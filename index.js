// Code your solutions in this file

function writeCards(arr, str){
    let birthdayCards = []                                               

    for(let i = 0; i < arr.length ; i++){                             
        birthdayCards.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`);   
    }

    return birthdayCards;
};

function countDown(num){
    for(let i = 0; num > i; num--){
        console.log(num);
    }
    return console.log(num);
}