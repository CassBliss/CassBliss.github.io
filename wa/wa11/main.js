

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const filenames = ["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const altID= ["human eye","rock","flowers","glyphs","butterfly"]

/* Looping through images */
for(let i=0; i < 5; i++){
    //
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filenames[i]);
    newImage.setAttribute('alt', altID[i]);
    thumbBar.appendChild(newImage);

    //this function will switch out a thumbnail image with a main image
    function setToMain(source,alternative){
        
        let tempSrc = document.getElementsByClassName("displayed-img").src;
        let tempAlt = document.getElementsByClassName("displayed-img").alt;
        
        document.getElementsByClassName("displayed-img").src = source;
        document.getElementsByClassName("displayed-img").alt = alternative;
        
        const oldImage = document.createElement('img');
        
        oldImage.setAttribute('src',tempSrc);
        oldImage.setAttribute('alt',tempAlt);
        thumbBar.appendChild(oldImage);
    }

    newImage.addEventListener("click",setToMain(newImage.src,newImage.alt));
}



function darken(){

    if(btn.className == "dark")
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = xxx;
};



/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", darken );