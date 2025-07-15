// function gotClicked(){
//     alert("I got clicked")
// }
// var allButtons= document.querySelectorAll("button").length;


// for ( let i =0 ; i < allButtons; i++ ){
//      document.querySelectorAll("button")[i].addEventListener("click", gotClicked)
// }
//  anonynomous function 


 document.querySelector('.w').style.backgroundImage = "url('./images/tom4.png')";
 document.querySelector('.a').style.backgroundImage = "url('./images/tom3.png')";
 document.querySelector('.s').style.backgroundImage = "url('./images/tom2.png')";
 document.querySelector('.d').style.backgroundImage = "url('./images/tom1.png')";
 document.querySelector('.j').style.backgroundImage = "url('./images/kick.png')";
 document.querySelector('.k').style.backgroundImage = "url('./images/snare.png')";
 document.querySelector('.l').style.backgroundImage = "url('./images/crash.png')";


// var allButtons= document.querySelectorAll(".drum").length;
// for ( let i = 0; i < allButtons; i++ ){
//      document.querySelectorAll("button")[i].addEventListener("click", function(){
//           var drumButton=this.innerHTML;
//         switch (drumButton) {
//             case "w":
//                 var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//                 break;
    
           
//         }
//         switch (drumButton) {
//             case "a":
//                 var audio = new Audio("sounds/tom-2.mp3");
//         audio.play();
//                 break;
        
         
//         }
//         switch (drumButton) {
//             case "s":
//                 var audio = new Audio("sounds/tom-3.mp3");
//         audio.play();
//                 break;
        
//         }
//         switch (drumButton) {
//             case "d":
//                 var audio = new Audio("sounds/tom-4.mp3");
//         audio.play();
//                 break;
        
//         }
//         switch (drumButton) {
//             case "j":
//                 var audio = new Audio("sounds/kick-bass.mp3");
//         audio.play();
//                 break;
        
//         }
//         switch (drumButton) {
//             case "k":
//                 var audio = new Audio("sounds/snare.mp3");
//         audio.play();
//                 break;
        
//         }
//         switch (drumButton) {
//             case "l":
//                 var audio = new Audio("sounds/crash.mp3");
//         audio.play();
//                 break;
//         }
//      })
// }


var allButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < allButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // var drumButton = this.innerHTML;
        makeSound(this.innerHTML);
    });
}


document.addEventListener("keypress", function (event) {
    makeSound(event.key);
});


function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();

            break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
            break;
        case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
            break;
        case "d":
           var audio = new Audio("sounds/tom-4.mp3");
           audio.play();
            break;
        case "j":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
            break;
        case "k":
          var audio =  new Audio("sounds/snare.mp3");
          audio.play();
            break;
        case "l":
           var audio =  new Audio("sounds/crash.mp3");
           audio.play();
            break;
        default:
            alert(key); 
    }
}





// function clicked (){
// var allButtons= document.querySelectorAll(".drum").length;
// for ( let i = 0; i < allButtons; i++ ){
//      document.querySelectorAll("button")[i].addEventListener("click", function(){
//         alert("key clicked")
//      })
// }
// }




// function pressed (){
// var allButtons= document.querySelectorAll(".drum").length;
// for ( let i = 0; i < allButtons; i++ ){
//      document.querySelectorAll("button")[i].addEventListener("keypress", function(){
//         alert("key pressed")
//      })
// }
// }
// pressed();




// For practice
// this.addEventListener("keypress",function(event){
//         alert(event.key)
// })
