
let output=document.getElementById("output");
document.querySelector("form").addEventListener('submit',(e)=>{
    e.preventDefault();
    
    let fname=document.getElementById("fname").value
    let lname=document.getElementById("lname").value
    let subject=document.getElementById("subject").value
    if (fname === "" || lname === "" || subject === "") {
        output.innerHTML = "All fields are required.";
        
    }
    else{
        output.innerHTML = "Form submitted";
        document.getElementById("fname").value=""
        document.getElementById("lname").value=""
        document.getElementById("subject").value=""
    }
})

let git=document.getElementById("git")
let res=document.getElementById("res")
git.addEventListener('click',()=>{
    window.open('https://github.com/Husain8570',"_blank")
})

let slides = document.querySelectorAll('.slide');
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
    if (counter >= slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

document.getElementById("next").addEventListener('click', () => {
    counter++;
    slideImage();
});

document.getElementById("prev").addEventListener('click', () => {
    counter--;
    slideImage();
});

document.getElementById('stone').addEventListener('click',()=>{
    window.open('https://husain8570.github.io/flipkart-clone.github.io/','_blank')
})
document.getElementById('flipkart').addEventListener('click',()=>{
    window.open('https://husain8570.github.io/flipkart-clone.github.io/','_blank')
})
document.getElementById('calc').addEventListener('click',()=>{
    window.open('https://husain8570.github.io/calculator.github.io/','_blank')
})
document.getElementById('algo').addEventListener('click',()=>{
    window.open('https://husain8570.github.io/algovisualiser.github.io/','_blank')
})