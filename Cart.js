let counter=0;
let price=0;
let shiping=0;
let tPrice=0;
function Addtocart(Value)
{
    counter++;
    document.getElementById('Totall_Product').innerText=counter;
    price+=Value;
    document.getElementById('Price').innerText= price;
    
    if(price<500)
    {
        shiping=0;
        document.getElementById('Delivary').innerText=shiping;
        document.getElementById('Shipping').innerText=shiping;
        
    }
    else if(price<800)
    {
        shiping=100;
        document.getElementById('Delivary').innerText=shiping;
        document.getElementById('Shipping').innerText=shiping;
        
    }
    else if(price<1000)
    {
        shiping=150;
        document.getElementById('Delivary').innerText=shiping;
        document.getElementById('Shipping').innerText=shiping;
        
    }
    else
    {
        shiping=200;
        document.getElementById('Delivary').innerText=shiping;
        document.getElementById('Shipping').innerText=shiping;
        
    }
    document.getElementById('Totall_Price').innerText= price+shiping;
    let TAX=price*0.16;
    let TllPrice=price+TAX;
    document.getElementById('Tax').innerText= TAX;
    document.getElementById('Price_with_tax').innerText= TllPrice;
    tPrice=TllPrice;

    
}

function Clearcart()
{
    alert('Thakyou For Choosing Us\n Totall Bill:'+tPrice);
    document.getElementById('Totall_Product').innerText=0;
    price=0;
    document.getElementById('Price').innerText= price;
    document.getElementById('Delivary').innerText= 0;
    document.getElementById('Shipping').innerText= 0;
    document.getElementById('Totall_Price').innerText= 0;
    let TAX=0;
    let TllPrice=0;
    document.getElementById('Tax').innerText= 0;
    document.getElementById('Price_with_tax').innerText=0;

}