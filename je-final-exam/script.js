let cartItem=JSON.parse(localStorage.getItem('cartItems'))|| [];
 let totalPrice=parseFloat(localStorage.getItem('totalPrice')) || 0;
index=0;


 function addtocart(productName,productPrice,productImg)
{
    cartItem.push({
        name:productName,
        price:productPrice,
        image:productImg
    });
    totalPrice+=productPrice;

    showproduct();
}

function showproduct(){
    let cart=document.getElementById("cart");
    let total=document.getElementById("total");
    let num=document.getElementById("num");

    cart.innerHTML=""

    cartItem.forEach((item,index)=>{
        const li=document.createElement("li");
        li.textContent=(`${item.name}  $${item.price}`);
        cart.appendChild(li);
        num.innerHTML=cartItem.length;

    })
    total.textContent=`Total:$${totalPrice}.00`;

}

function savecart(){
    localStorage.set('cartitems',JSON.stringify(cartItems));
    localStorage.set('totalPrice',totalPrice.toString());
}
