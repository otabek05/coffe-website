let navbar = document.querySelector('.navbar');
let btn= document.getElementById('btn')
let name= document.getElementById('name')
let email=document.getElementById('email')
let number=document.getElementById('number')


class Btn{
    

    constructor(name, email, number){
        this.name=name.value;
        this.email=email.value;
        this.number=number.value
    }
}

btn.addEventListener('click', e=>{
    e.preventDefault()
    let x=new Btn(name,email, number)
    console.log(x)
    alert('Thank you!')
})

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}