// Code your solutions in this file

let newMessage=[];


function writeCards(names,event){
    for(let i=0; i<names.length; i++){
     let message =`Thank you, ${names[i]}, for the wonderful ${event} gift!`
     newMessage.push(message)
    }

    return newMessage;
}



let countDown= (number)=>{
    for( let i= number; i>= 0; i--){
        console.log(i)
    }
 
}

countDown(10)
