// Now here we want that if someone clicks on the div.box then either X or O should come in the span.boxtext.Also we want that initially X should come then O then X again and so on.Also when someone clicks the box then the clicking audio should get played.
console.log("Welcome to Tic Tac Toe");
console.log(window.innerWidth);
//First of all we are going to create some audios.
let music = new Audio('audio/background.mp3');//This is a background music for our game.Here we are creating a new audio/audio element and .mp3 is the name of our audio file.Here we have basically loaded our audio file.
let click = new Audio('audio/ting.mp3');//This is the audio which wil get played when a user clicks the box.
let gameover = new Audio('audio/gameover.mp3');//This is the audio whcih will be played if the game gets over.
let resetBtn = new Audio('audio/reset.mp3');
let won = new Audio('audio/won.mp3');
let turn = "X";//here turn is a variable and we have kept the initial turn variable value as X.
let isgameover = false;
let clickcount = 0;

music.loop = true;
won.loop = true;

//Now here we are going to create a function name changeTurn().
//this is the function to change the turn i.e:from X to O and vice versa.
const changeTurn = () => {//You are effectively assigning the function to the constant variable changeTurn. In other words, changeTurn becomes a reference to the function you've defined.
    return turn === "X" ? "0" : "X";
}

//function to check for a win.It will basically check that did anyone out of X or 0 became a winner or not.That is whenever someone will win then this function will return True and do its work like it will play the gameover audio,will reset all the things,then make the gif get dance means it will make the gif appear.
const checkWin = () => {//now we have to write a logic to tell/check whether any player has won or not.
    let boxtexts = document.getElementsByClassName('boxText')
    let wins = [
        [0, 1, 2, 5, 4.7, 0],//[e[0],e[1],e[2]]
        [3, 4, 5, 5, 14.7, 0],
        [6, 7, 8, 5, 24.8, 0],
        [0, 3, 6, -5.1, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15.1, 15, 90],
        [0, 4, 8, 5.2, 15, 45],
        [2, 4, 6, 4.8, 15, 135]
    ]
    let winss = [
        [0, 1, 2, 10.5, 9, 0],//[e[0],e[1],e[2]]
        [3, 4, 5, 10.5, 29, 0],
        [6, 7, 8, 10.5, 49, 0],
        [0, 3, 6, -9.6, 29.5, 90],
        [1, 4, 7, 10.6, 29.5, 90],
        [2, 5, 8, 30.7, 29.5, 90],
        [0, 4, 8, 10.7, 29.5, 45],
        [2, 4, 6, 10.7, 29.5, 135]
    ]
    if (window.innerWidth > 810) {
        wins.forEach(e => {
            if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== '')//here we are checking that in the three consecutive boxes whether vertically,horizontally or diagonally should have the same innerText and also they should not be null.If we will not keep the last condition then even if the innerText will be null then also it will show win as all the three will be having null as their innertext.
            {
                //if this condition inside the if() gets satisfied then the player with the "boxtexts[e[0]].innerText"(i.e:either X or 0) will won.
                document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";//he code document.querySelector('.info') is a JavaScript statement that uses the querySelector method to select the first HTML element on the page that matches the specified CSS selector, in this case, the class selector .info.
                // console.log("Win");
                isgameover = true;
                music.pause();
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                won.play();
                //whenever someone will win we will add the transform property.
                //we have to add transform property/value of the transform property according to which is the case of winning out of all the possibilities listed in the array wins i.e: value of transform property would be different for [0,1,2],[3,4,5],etc.this means wejust have to record the value of translate in x-axis & y-axis and the degree of rotation.
                document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector('.line').style.width = "20vw";
                document.querySelector('.imgbox img').src = "images/celebration.gif";
            }
        })
    }
    else {
        winss.forEach(e => {
            if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== '')//here we are checking that in the three consecutive boxes whether vertically,horizontally or diagonally should have the same innerText and also they should not be null.If we will not keep the last condition then even if the innerText will be null then also it will show win as all the three will be having null as their innertext.
            {
                //if this condition inside the if() gets satisfied then the player with the "boxtexts[e[0]].innerText"(i.e:either X or 0) will won.
                document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";//he code document.querySelector('.info') is a JavaScript statement that uses the querySelector method to select the first HTML element on the page that matches the specified CSS selector, in this case, the class selector .info.
                // console.log("Win");
                isgameover = true;
                music.pause();
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                won.play();
                //whenever someone will win we will add the transform property.
                //we have to add transform property/value of the transform property according to which is the case of winning out of all the possibilities listed in the array wins i.e: value of transform property would be different for [0,1,2],[3,4,5],etc.this means wejust have to record the value of translate in x-axis & y-axis and the degree of rotation.
                document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
                document.querySelector('.line').style.width = "39vw";
                document.querySelector('.imgbox img').src = "images/celebration.gif";
            }
        })
    }
    //Game Draw!
    if (clickcount === 9 && !isgameover) {
        document.querySelector('.imgbox img').src = "images/gameover.gif";
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        document.getElementsByClassName('info')[0].innerText = "Match Draw!";
        music.pause();
        gameover.play();
        isgameover = true;
        clickcount = 0;
    }

}

//Game Logic
//What is the meaning of Game Logic:How we will change the turn,when we have to use the functions defined above,then on which button which eventListener should be applied.
// music.play();
let boxes = document.getElementsByClassName("box");//this returns an HTML Collection to the variable boxes.
Array.from(boxes).forEach(element => {//here element represents the div.box i.e:the div with class box.element is a reference to the parent element (or the container) within which you want to find an element with the class "boxtext."
    let boxtext = element.querySelector('.boxText');//JavaScript statement that attempts to select an element with the class "boxtext" within another element referred to as element. This is typically done using the querySelector method, which is commonly used for selecting elements in the DOM (Document Object Model).querySelector('.boxtext') is used to find the first element with the class "boxtext" that is a descendant of element. It returns a reference to that element or null if no matching element is found.Here the boxtext points to the span.boxtext and we will change the content in this span i.e either X or 0.
    //Now here we will apply an click eventListener on every boxtext.
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            clickcount = clickcount + 1;
            console.log(clickcount);
            music.play();
            boxtext.innerText = turn;//here after = we cannot hardcode it as X because it may be 0 also.
            turn = changeTurn();//as once the X has played then the next turn would be of 0.
            click.play();
            checkWin();//we will check whether someone has become a winner or not.
            if (!isgameover) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }

        }
    })
})

//Now we will add a click listener on the reset button to reset the game.
// let reset=document.getElementById('reset');
reset.addEventListener('click', () => {//here we want that if someone clicks the reset button then the innerText of span.boxtext should become empty.
    let boxtexts = document.querySelectorAll('.boxText');//here we are using querySelectorAll('.boxtext') not querySelector('.boxtext') as we all the span having class boxtext.
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    music.pause();
    won.pause();
    isgameover = false;//here we are making isgameover=false as reset means that if game has been over then we have to start it again.
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    resetBtn.play();
    document.querySelector('.line').style.width = "0vw";
    clickcount = 0;
})