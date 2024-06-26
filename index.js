var img1 = Math.random();
img1 = img1 *6 ;
img1 = Math.floor(img1)+1;
console.log(img1);
if ( img1===1){document.querySelector(".img1").src ="images/dice1.png";
}
if ( img1===2){document.querySelector(".img1").src ="images/dice2.png";
}
if ( img1===3){document.querySelector(".img1").src ="images/dice3.png";
}
if ( img1===4){document.querySelector(".img1").src ="images/dice4.png";
}
if ( img1===5){document.querySelector(".img1").src ="images/dice5.png";
}
if ( img1===6){document.querySelector(".img1").src ="images/dice6.png";
}


var img2 = Math.random();
img2 = img2 *6 ;
img2 = Math.floor(img2)+1;
console.log(img2);
if ( img2===1){document.querySelector(".img2").src ="images/dice1.png";
}
if ( img2===2){document.querySelector(".img2").src ="images/dice2.png";
}
if ( img2===3){document.querySelector(".img2").src ="images/dice3.png";
}
if ( img2===4){document.querySelector(".img2").src ="images/dice4.png";
}
if ( img2===5){document.querySelector(".img2").src ="images/dice5.png";
}
if ( img2===6){document.querySelector(".img2").src ="images/dice6.png";
}




if (img1 > img2 ){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(img1 < img2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}
