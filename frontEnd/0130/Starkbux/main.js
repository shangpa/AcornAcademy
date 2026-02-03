let pick =document.querySelector('.pick');
let photo = document.querySelector('.photo');
let cake = document.querySelector('.cake');
let word = document.querySelector('.word');
let pickIsAnimated = false;
let photoIsAnimated = false;

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log("scrollY:", value);

    if(value > 0 && !photoIsAnimated){
        photo.style.animation = "photoIn 1s ease-out forwards";
        word.style.animation = "wordIn 1s ease-out forwards";
        photoIsAnimated = true;
    }
    if(value <= 0 && photoIsAnimated){
        photo.style.animation = "photoOut 1s ease-out forwards";
        word.style.animation = "wordOut 1s ease-out forwards";
        photoIsAnimated = false;
    }
    if(value > 300 && !pickIsAnimated){
        pick.style.animation = "pick 1s ease-out forwards";
        cake.style.animation = "cakeIn 1s ease-out forwards";
        pickIsAnimated = true;
    }

    if(value <= 300 && pickIsAnimated){
        pick.style.animation = "unPick 1s ease-out forwards";
        cake.style.animation = "cakeOut 1s ease-out forwards";
        pickIsAnimated = false;
    }
})