const wrapper = document.querySelector(".sliderWraper");
const menuItems = document.querySelectorAll(".menuItem");

//wrapper.style.transform ="translateX(-400vw)";
const products = [{
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
        {
            code:"black",
            img:"air.jpg"
        },
        {
            code:"blue",
            img:"blue.jpg" 
        }
    ],
},
{
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
        {
            code:"gray",
            img:"white.jpeg"
        },
        {
            code:"black",
            img:"1.jpg"
        },
    ],
},
{
    id: 3,
    title: "BLAZER",
    price: 119,
    colors: [
        {
            code:"gray",
            img:"blazer.jpeg"
        },
        {
            code:"green",
            img:"bG.jpeg"
        },
    ],
    
},
{
    id: 4,
    title: "CRATER",
    price: 119,
    colors: [
        {
            code:"GRAY",
            img:"crater.jpeg"
        },
        {
            code:"GREEN",
            img:"GCTR.jpeg" 
        }
    ],
},
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".producting");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");



menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //console.log("you clicked!"+index);
        
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentproduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "ugs"+ choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors

         currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
         });
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSize.forEach((size,index)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex"
});

close.addEventListener("click",()=>{
    payment.style.display = "none"
});