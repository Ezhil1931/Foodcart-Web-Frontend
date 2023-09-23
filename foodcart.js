
const btncart=document.querySelector("#cartbut");

const cart=document.querySelector(".cart");
const btnclose=document.querySelector("#cartclose");

 
btncart.addEventListener('click',displaycart)

function displaycart(){
cart.classList.add('cartactive')

      
}

btnclose.addEventListener('click',closecart)

function closecart(){
cart.classList.remove('cartactive')

      
} 

document.addEventListener('DOMContentLoaded',loadfood);

function loadfood(){

   loadcontent();
}


/* load function */
function loadcontent(){


let remove=document.querySelectorAll("#remove")


remove.forEach((btn)=>{

btn.addEventListener('click',removeitem)

})

let qtyelement=document.querySelectorAll(".cartqty")


qtyelement.forEach((input)=>{

input.addEventListener('change',changeqty)

updatetotal()

})

///product cart

let addbtn=document.querySelectorAll("#cartbut1")

addbtn.forEach((btn)=>{

btn.addEventListener('click',addcart); 

})


}

/*remove the item in the cart*/

function removeitem(){

this.parentElement.remove();

counttitle.splice(0,1);
cartcount.innerHTML=counttitle.length;

loadcontent();

if(counttitle.length==0){

    totalamt.innerHTML="Rs."+0
    
}
    

    
}



function changeqty(){
if(isNaN(this.value)||this.value<1){

    this.value=1;

    loadcontent();
}

}
//////add cart

function addcart(){

let food =this.parentElement;
let title= food.querySelector(".foodtitle").innerHTML;
let price=food.querySelector(".foodprice").innerHTML;
let imgsrc= food.querySelector(".fooimg").src;
let cartcontent=document.querySelector(".cartcontent");




let newitem= createcart(title,price,imgsrc); 
let element=document.createElement('div');
element.innerHTML=newitem;

cartcontent.append(element)




loadcontent();
}
/* create  the add to cart */
const cartcount=document.querySelector(".cartcount");
let counttitle=[];
function createcart(title,price,imgsrc){
/* count monitor */
    counttitle.push(title);
    cartcount.innerHTML=counttitle.length;
    console.log(counttitle);


    return `<div class="cartbox">
    <img src="${imgsrc}" class="cartimg">
    <div class="detailbox">
        <div class="cartfood">${title}</div>
        <div class="pricebox">
            <div class="cartprice">${price}</div>

        </div>
        <input type="number" class="cartqty" value="1">
    </div>
    <button id="remove">X</button>
</div>`


}
const totalamt=document.querySelector(".totalprice")
function updatetotal(){


    const cartitem=document.querySelectorAll(".cartbox")
const totalamt=document.querySelector(".totalprice")
let total=0;
cartitem.forEach((product)=>{


let priceelement=product.querySelector(".cartprice") 
let price=parseFloat(priceelement.innerHTML.replace("Rs.",""));
let qty=product.querySelector(".cartqty").value;

total+=(price*qty);
product.querySelector('.cartprice').innerHTML="Rs."+(price*qty);



})
totalamt.innerHTML="Rs."+total; 
////add product count in cart icon

}

let placebtn=document.querySelector(".placebtn1");








