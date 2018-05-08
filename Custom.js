/**
 * Makes the header cart content scrollable if the height of the dropdown exceeds the window height.
 * Mouseover is used as items can be added to the cart via ajax and we'll need to recheck.
 */
( function() {


    document.getElementById("billing_first_name").value="Guest";
    document.getElementById("billing_last_name").value="User";
    document.getElementById("billing_address_1").value="Chitguppa";
    document.getElementById("billing_city").value="Chitguppa";
    document.getElementById("billing_postcode").value="585412";
    document.getElementById("billing_email").value="Bidarmall96@gmail.com";
    document.getElementById("billing_state").value="KA";
    document.getElementById("billing_phone").value="7411809696";
   
    //Generating Link for Confirming Order Details Over Whats APP

    var order_summary=document.getElementsByClassName("shop_table")[0].innerText;

    var orderDetails="";

    for (var i=0;i<document.getElementsByClassName("product-name").length;i++)
    {
        if (i>=1)
        {
        orderDetails=orderDetails+i+")"+document.getElementsByClassName("product-name")[i].innerText+"++:++"+document.getElementsByClassName("product-total")[i].innerText+"+%0A%0D";
        
        }

        else
        {
            orderDetails=orderDetails+document.getElementsByClassName("product-name")[i].innerText+"++:++"+document.getElementsByClassName("product-total")[i].innerText+"+%0A%0D";
        }
    }

    orderDetails=orderDetails+document.getElementsByClassName("cart-subtotal")[0].getElementsByTagName("th")[0].innerText+"++:++"+document.getElementsByClassName("cart-subtotal")[0].getElementsByTagName("td")[0].innerText+"++:++%0A%0D";
    orderDetails=orderDetails+document.getElementsByClassName("shipping")[0].getElementsByTagName("th")[0].innerText+"++:++"+document.getElementsByClassName("shipping")[0].getElementsByTagName("td")[0].innerText+"%0A%0D";
    orderDetails=orderDetails+document.getElementsByClassName("order-total")[0].getElementsByTagName("th")[0].innerText+"++:+++"+document.getElementsByClassName("order-total")[0].getElementsByTagName("td")[0].innerText+"%0A%0D";
    
    orderDetails=orderDetails.replace(" ","+");

    console.log(orderDetails);
    var leftDiv = document.createElement("div"); //Create left div
    leftDiv.id = "confirm_order"; //Assign div id
    leftDiv.setAttribute("style", "float:left; width:100%; line-height: 65px; text-align:left; font-size:1.41575em; padding-left:8px; height:65px;"); //Set div attributes
    leftDiv.style.background ="#333";
    leftDiv.style.position="fixed";
    leftDiv.style.bottom="0px";
    var confirmOrderLink = document.createElement('a');
    confirmOrderLink.id="confirm_order_link";
    confirmOrderLink.href ='sms:8861710458?body='+orderDetails+''; // Insted of calling setAttribute 
    confirmOrderLink.innerHTML = "Place Order on SMS" // <a>INNER_TEXT</a>
    leftDiv.appendChild(confirmOrderLink); // Append the link to the div
    var confirmOrderLinkWhatsApp = document.createElement('a');
    confirmOrderLinkWhatsApp.id="confirm_order_link_whatsapp";
    confirmOrderLinkWhatsApp.href ='https://api.whatsapp.com/send?phone=+918861710458&text='+orderDetails+''; // Insted of calling setAttribute 
    confirmOrderLinkWhatsApp.innerHTML = "Place Order on WhatsApp" // <a>INNER_TEXT</a>
    leftDiv.appendChild(confirmOrderLinkWhatsApp); // Append the link to the div
    document.body.appendChild(leftDiv);
 
    document.getElementById("confirm_order").addEventListener("click", function () {

        document.getElementById("billing_first_name").value="Guest";
        document.getElementById("billing_last_name").value="User";
        document.getElementById("billing_address_1").value="Chitguppa";
        document.getElementById("billing_city").value="Chitguppa";
        document.getElementById("billing_postcode").value="585412";
        document.getElementById("billing_email").value="Bidarmall96@gmail.com";
        document.getElementById("billing_state").value="KA";
        document.getElementById("billing_phone").value="7411809696";
        document.getElementById("confirm_order_link").click();
        document.getElementById("place_order").click();

      });

     // if (document.readyState="complete")
     // {
       //   document.getElementById("confirm_order").click(); 
      //}

} )();
