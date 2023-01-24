

// * * * * * DARK MODE * * * * * //
let click= 0;

function darkToggle () {
    // TOGGLE ICON
    let darkModeIcon= document.querySelector(".mode__button-img");
        if(darkModeIcon.getAttribute("src")== "img/moon.png") {
            darkModeIcon.src= "img/sun.png";
        } else darkModeIcon.src= "img/moon.png";
    //

    //CHANGE STYLES (CSS VAR)
    let root= document.querySelector(":root");
    click++; 

    if(click%2){
        console.log("ok")
        root.style.setProperty("--black", "white");
        root.style.setProperty("--white", "black"); 
    } else {
        root.style.setProperty("--black", "black");
        root.style.setProperty("--white", "white"); 
    }
    //      
 
}
// * * * * * * * * * * * * * * * * * * * * * * * * //

// * * * * * ADD/REMOVE CLASSNAME * * * * * //
const addClass= (x,y) => x.classList.add(y);
const removeClass= (x,y) => x.classList.remove(y);
// * * * * * * * * * * * * * * * * * * * * * * * * //


// * * * * * * * * * * LOAD FX * * * * * * * * * * //
window.addEventListener("load", () => {
    let name= document.querySelector(".header__name");
    let img= document.querySelector(".header__img");
    let personal= document.querySelector(".personal");
    let infos= document.querySelector(".infosections");
    let t1= document.querySelector(".t1");
    let t2= document.querySelector(".t2");
    let t3= document.querySelector(".t3");
    
    addClass(name, "fx1");
    addClass(img, "fx2");
    addClass(personal, "fx3");
    // addClass(t1, "fx4");
    // addClass(t2, "fx4");
    // addClass(t3, "fx4");
    addClass(infos, "fx4");

});
// * * * * * * * * * * * * * * * * * * * * * * * * //

// * * * * * * * * * * SEC FX * * * * * * * * * * //
let sec= document.querySelector(".cont");
let sec1= document.querySelector(".est");
let sec2= document.querySelector(".hab");
let t1= document.querySelector(".t1");
let t2= document.querySelector(".t2");
let t3= document.querySelector(".t3");


t1.addEventListener("click", () =>{
    sec.classList.toggle("activee");
    t1.classList.toggle("act");
});

t2.addEventListener("click", () =>{
    sec1.classList.toggle("activee1");
    t2.classList.toggle("act");
});

t3.addEventListener("click", () =>{
    sec2.classList.toggle("activee2");
});

// * * * * * * * * * * * * * * * * * * * * * * * * //


// * * * * *  * * * * * * * MENU HEIGHT * * * * * * * * * * * * //
let exp= document.querySelector(".exp");
let est= document.querySelector(".est");
let hab= document.querySelector(".hab");
let roota= document.querySelector(":root");

window.addEventListener("load", () => {
    console.log("hello");
    console.log(hab.scrollHeight)
    roota.style.setProperty("--height1", exp.scrollHeight+"px");
    roota.style.setProperty("--height2", est.scrollHeight+"px");
    roota.style.setProperty("--height3", hab.scrollHeight+150+"px");

});

window.addEventListener("resize", () => {
    let exph= exp.getElementsByClassName(".expitem")
    let esth= est.getElementsByClassName(".expitem")
    let habh= hab.getElementsByClassName(".expitem")
    
    roota.style.setProperty("--height1", exph.scrollHeight+"px");
    roota.style.setProperty("--height2", esth.scrollHeight+"px");
    roota.style.setProperty("--height3", habh.scrollHeight+150+"px");


});

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * //