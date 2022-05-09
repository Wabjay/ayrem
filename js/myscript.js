// JavaScript Document
//alert();
function fetchMobileNetworks(){
    //alert();
jQuery(document).ready(function($) {	


$.post("fetchmobilenetworks.php",{security:"secure"},function(response){ 
 	//alert();

	//response = JSON.parse(response);
for(x=0;x<response.length;x++){
		document.getElementById('showData').innerHTML += '<div>'+
                        '<img src="'+response[x].mobile_network_icon+'" alt="">'+
                   '<p>'+response[x].network_name+'</p>'+
                   '<a href="mobilenetwork.php?network='+response[x].network_name+'">View</a>'+
                    '</div>';
	
	
}
	

});
	});
}


function fetchMobileNetworkData(){
jQuery(document).ready(function($) {	


$.post("fetchmobilenetworkdata.php",{security:"secure"},function(response){ 


		document.getElementById('info').innerHTML += '<div>'+
                        '<img src="'+response[0].mobile_network_icon+'" alt="" width="50px" height="50px" style="display:inline; border-radius:25px">'+
                   '<p class="heading" style="display:inline; margin-left:50px">'+response[0].network_name+'</p>'+
                    '</div>';
		if(response[0].network_name=="MTN"){
			document.getElementById('topUpMenu').style.display = "block";
		}
	
	


});
	});
}

function fetchDataPlan(){
jQuery(document).ready(function($) {	


$.post("fetchdataplan.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('rateContainer').innerHTML += '<tr>'+
                   '<td >'+response[x].data_value+' </td><td><del>N</del>'+response[x].data_price+'</td>'+
                   '<td><a href="mobilenetwork.php?dataplan='+response[x].data_value+'" >Remove</a></td>'+
                   '<td><a href="editdataplan.php?dataplan='+response[x].id+'" >Edit</a></td>'+
                    '</tr>';
	
	
}
	

});
	});
}


function fetchDataPlanToEdit(){
jQuery(document).ready(function($) {	


$.post("fetchdataplantoedit.php",{},function(response){ 

		document.getElementById('dataValue').value = response[0].data_value; 
		document.getElementById('dataPrice').value = response[0].data_price;
	
	

});
	});
}

function fetchGiftCards(){
jQuery(document).ready(function($) {	


$.post("fetchgiftcards.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('showGift').innerHTML += '<div>'+
                        '<img src="'+response[x].gift_card_icon+'" alt="">'+
                   '<p>'+response[x].gift_card_name+'</p>'+
                   '<a href="giftcard.php?giftcard='+response[x].gift_card_name+'">View</a>'+
                    '</div>';
	
	
}
	

});
	});
}


function fetchGiftCardData(){
jQuery(document).ready(function($) {	


$.post("fetchgiftcarddata.php",{security:"secure"},function(response){ 
 	//alert();

		document.getElementById('info').innerHTML += '<div>'+
                        '<img src="'+response[0].gift_card_icon+'" alt="" width="50px" height="50px" style="display:inline; border-radius:25px">'+
                   '<p class="heading" style="display:inline; margin-left:50px">'+response[0].gift_card_name+'</p>'+
                    '</div>';
	
	


});
	});
}



function fetchGiftCardCountry(){
jQuery(document).ready(function($) {	


$.post("fetchgiftcardcountry.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('giftCardCountry').innerHTML += '<option>'+response[x].gift_card_country+'</option>';
	
	
}
	

});
	});
}



function fetchGiftCardRate(){
jQuery(document).ready(function($) {	


$.post("fetchgiftcardrate.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	var value = response[x].gift_card_value_min+','+response[x].gift_card_value_max;
	if(response[x].gift_card_value_min==response[x].gift_card_value_max){
		value = response[x].gift_card_value_min;
	}
			document.getElementById('rateContainer').innerHTML += '<tr>'+
                   '<td >'+value+' </td><td><del>N</del>'+response[x].gift_card_price_ecode+'</td><td><del>N</del>'+response[x].gift_card_price_plastic+'</td>'+
                   '<td>'+response[x].gift_card_country+'</td><td><a href="giftcard.php?giftcardvalue='+response[x].id+'" >Remove</a></td>'+
                    '<td><a href="editgiftcardrate.php?gifttoedit='+response[x].id+'" >Edit</a></td></tr>';
	
	
	
	
}
	

});
	});
}

function fetchGiftCardToEdit(){
jQuery(document).ready(function($) {	


$.post("fetchgiftcardtoedit.php",{},function(response){ 
 	//alert();

	//alert(response);
	//alert();
	//alert();
		document.getElementById('giftCardValueMin').value = response[0].gift_card_value_min; 
		document.getElementById('giftCardValueMax').value = response[0].gift_card_value_max;
		document.getElementById('giftCardPriceEcode').value = response[0].gift_card_price_ecode;
		document.getElementById('giftCardPricePlastic').value = response[0].gift_card_price_plastic;
		document.getElementById('giftCardCountry').innerHTML = '<option >'+response[0].gift_card_country+'</option>';
	
	
	

});
	});
}


function fetchCountry(){
jQuery(document).ready(function($) {	


$.post("fetchgiftcardcountry.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('countryContainer').innerHTML += '<a>'+response[x].gift_card_country+'</a>';
	
	
}
	

});
	});
}


function fetchCryptoCurrency(){
jQuery(document).ready(function($) {	


$.post("fetchcryptocurrency.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('showCrypto').innerHTML += '<div>'+
                        '<img src="'+response[x].cryptocurrency_icon+'" alt="">'+
                   '<p>'+response[x].cryptocurrency_name+'</p>'+
                   '<a href="cryptocurrency.php?crypto='+response[x].cryptocurrency_name+'">View</a>'+
                    '</div>';
	
	
}
	

});
	});
}


function fetchCryptoCurrencyData(){
jQuery(document).ready(function($) {	
//alert();

$.post("fetchcryptocurrencydata.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
	//alert();
	//alert();
		document.getElementById('info').innerHTML += '<div>'+
                        '<img src="'+response[0].cryptocurrency_icon+'" alt="" width="50px" height="50px" style="display:inline; border-radius:25px">'+
                   '<p class="heading" style="display:inline; margin-left:50px">'+response[0].cryptocurrency_name+'</p>'+
                    '</div>';
	
	


});
	});
}



function fetchCryptoCurrencyRate(){
jQuery(document).ready(function($) {	


$.post("fetchcryptocurrencyrate.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('rateContainer').innerHTML += '<tr>'+
                   '<td >$'+response[x].cryptocurrency_value_min+'-$'+response[x].cryptocurrency_value_max+' </td><td><del>N</del>'+response[x].cryptocurrency_price+'</td>'+
                   '<td><a href="cryptocurrency.php?cryptocurrencymin='+response[x].cryptocurrency_value_min+'" >Remove</a></td>'+
                   '<td><a href="editcryptorate.php?crypto='+response[x].id+'" >Edit</a></td>'+
                    '</tr>';
	
	
}
	

});
	});
}


function fetchCryptoToEdit(){
jQuery(document).ready(function($) {	


$.post("fetchcryptoedit.php",{},function(response){ 
 	//alert();

	//alert(response);
	//alert();
	//alert();
		document.getElementById('cryptocurrencyValueMin').value = response[0].cryptocurrency_value_min;
		document.getElementById('cryptocurrencyValueMax').value = response[0].cryptocurrency_value_max;
		document.getElementById('cryptoPrice').value = response[0].cryptocurrency_price;
	
	

	

});
	});
}
function fetchCrypto(){
//alert();
$.post("fetchcryptocurrency.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('cryptoType').innerHTML += '<option>'+response[x].cryptocurrency_name+'</option>';
	
	
}
	

});

}


function fetchCurrentValue(){
	//alert();
$.post("fetchcryptoequivalent.php",{security:"secure"},function(response){ 

	localStorage.setItem('equivalent',JSON.stringify(response));
	
});

}
function fetchCryptoRate(a){
	rateContainer.style.display = "block";
	var rate = localStorage.getItem('equivalent');
	//alert(rate);
	rate = JSON.parse(rate);
	var crypto = a.value;
//	alert(crypto);
	for(x=0;x<rate.length;x++){

		if(rate[x].cryptocurrency_name==crypto){
//		alert(rate[x].cryptocurrency_name);	
			document.getElementById('currentValue').innerHTML = '$'+rate[x].current_value;
		}
	}

}
function fetchCustomers(){
jQuery(document).ready(function($) {	


$.post("fetchcustomers.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(JSON.stringify(response));
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('userContainer').innerHTML += '<tr class="users '+response[x].id+'">'+
            						'<td>'+
             						 '<img src="../users/avatar.png" alt=""  />'+
             		     			'</td>'+
             						'<td class="title">'+response[x].fullname+'</td>'+
          						 '</tr>';
	
	
}
	

});
	});
}
function fetchPlan(a){

	var data = JSON.parse(localStorage.getItem("data"));
			document.getElementById('plan').innerHTML = " ";
//alert(localStorage.getItem("data"));
			document.getElementById('plan').innerHTML += '<option value="" selected disabled="">Select Plan</option>';
var mtnRate,planArray=[],priceArray=[];
//alert(data.length);
	for(x=0;x<data.length;x++){
		if(data[x].network_name==a.value){
			if(data[x].network_name=="MTN" && parseInt(data[x].data_value) == 1){
				mtnRate = data[x].data_price;
			}
			document.getElementById('plan').innerHTML += '<option value="'+data[x].data_value+'">'+data[x].data_value+' - <del>N</del>'+data[x].data_price+'</option>';
			//alert(x);
			planArray.push(data[x].data_value);
			priceArray.push(data[x].data_price);

		}

		}
	if(a.value=="MTN"){
	for(x=11;x<=100;x++){
		var dataValue =  x+"GIG";
		var dataPrice = x*mtnRate;
			document.getElementById('plan').innerHTML += '<option value="'+dataValue+'">'+dataValue+' - <del>N</del>'+dataPrice+'</option>';
			planArray.push(dataValue);
			priceArray.push(dataPrice);

	}
	document.getElementById('remark').style.display = "block";
	
	}
localStorage.setItem("planarray", JSON.stringify(planArray));
localStorage.setItem("pricearray", JSON.stringify(priceArray));	
//alert(localStorage.getItem("pricearray"));
//alert(localStorage.getItem("planarray"));

	}


var dataNetwork;
function fetchDataNetwork(){
jQuery(document).ready(function($) {	

var myArray = [];
$.post("fetchdatanetwork.php",{security:"secure"},function(response){ 
	var dataplan = JSON.stringify(response);
	localStorage.setItem("data", dataplan)
	for(x=0;x<response.length;x++){
	var network = response[x].network_name;
	//alert(response[x].network_name);
		if(myArray.indexOf(network)==-1){
			//alert();
			myArray[x] = response[x].network_name;
			document.getElementById('networkOptions').innerHTML += '<option>'+response[x].network_name+'</option>';
		}
}	

});
	});
};

var cartObject = [];
//cartObject = localStorage.getItem("cartI");
//cartObject = JSON.stringify(cartObject);
//cartObject = JSON.parse(cartObject);
//alert();
var cartArray = [];
var	cartSingleObject = {security:"secure"};

function cartDataPlan(){
	if(networkOptions.value!='' && plan.value!='' && phone.value!=''){
	cartSingleObject.network = networkOptions.value;
	cartSingleObject.plan = plan.value;
	var remark = "";
	if(remarkValue.value!=""){
	remark = ' - [ '+remarkValue.value+']';
}	
	cartSingleObject.phone = phone.value + remark;
cartSingleObject = JSON.stringify(cartSingleObject);

localStorage.setItem("datacart", cartSingleObject);

	window.location = "data-summary.php";
}else{
	alert('Select your preferred data plan and enter your phone number');
}
}


function fetchDataNetworkLogo(){
jQuery(document).ready(function($) {	

	var dataCart = JSON.parse(localStorage.getItem("datacart"));
	var network = dataCart.network;
	//alert(network);
	var phone = dataCart.phone;
	var plan = dataCart.plan;
	document.getElementById('dataValue').innerHTML = plan;
	document.getElementById('phoneNo').innerHTML = phone;
	var index = JSON.parse(localStorage.getItem("planarray")).indexOf(plan);
	var dataPrice = JSON.parse(localStorage.getItem("pricearray"))[index];
	//alert(dataPrice);
	document.getElementById('price').innerHTML = "<del>N</del>"+dataPrice;
	document.getElementById('orderPrice').innerHTML = "<del>N</del>"+dataPrice;
	localStorage.setItem("dataprice", dataPrice);
//alert(dataPrice);

$.post("fetchdatanetworklogo.php",{network:network,plan:plan},function(response){ 
	//alert(JSON.stringify(response));
 		document.getElementById('logoContainer').innerHTML = '<img src="../../admin/'+response[0].mobile_network_icon+'" alt="" width="50px" height="50px" style="display:inline; border-radius:25px" />';
 		//alert();

});
	});
};


function fetchPaymentPlan(){
jQuery(document).ready(function($) {	

	var dataCart = JSON.parse(localStorage.getItem("datacart"));
	var network = dataCart.network;
	var phone = dataCart.phone;
	var plan = dataCart.plan;
//alert(network.toLowerCase().indexOf('mtn'));
	if(network.toLowerCase().indexOf('mtn')==-1){

		//vtuPaymentLink.style.display="none";
		shareAndSellPaymentLink.style.display="none";
	}

	});
};


function fetchPaymentDetail(){
jQuery(document).ready(function($) {	

	var dataCart = JSON.parse(localStorage.getItem("datacart"));
	var network = dataCart.network;
	var phone = dataCart.phone;
	var plan = dataCart.plan;
	document.getElementById('serviceFee').innerHTML = parseInt(plan)*50;
		document.getElementById('price').innerHTML = "<del>N</del>"+localStorage.getItem("dataprice");
 		var orderPrice = parseInt(localStorage.getItem("dataprice"))+parseInt(document.getElementById('serviceFee').innerHTML);
 		document.getElementById('orderPrice').innerHTML = "<del>N</del>"+orderPrice;
//alert(network);


$.post("fetchtopupnumber.php",{network:network},function(response){ 
//	alert(response[0].data_price);
for(x=0;x<response.length;x++){
 		document.getElementById('phoneNo').innerHTML = response[x].phone_no +"; ";
 		
}
});
	});
};


function fetchPaymentDetailForBank(){
jQuery(document).ready(function($) {	

	var dataCart = JSON.parse(localStorage.getItem("datacart"));
	var network = dataCart.network;
	var phone = dataCart.phone;
	var plan = dataCart.plan;
		document.getElementById('price').innerHTML = "<del>N</del>"+localStorage.getItem("dataprice");
 		var orderPrice = localStorage.getItem("dataprice");
 		document.getElementById('orderPrice').innerHTML = "<del>N</del>"+orderPrice;
//alert(network);


	});
};

function fetchCardDataPrice(){
jQuery(document).ready(function($) {	

	var dataCart = JSON.parse(localStorage.getItem("datacart"));
	var dataPrice = localStorage.getItem("dataprice");
	var network = dataCart.network;
	var phone = dataCart.phone;
	var plan = dataCart.plan;
	var cartObject = localStorage.getItem("datacart");

//alert(dataCart);

$.post("preparepaystack.php",{data:cartObject,plan:plan,dataprice:dataPrice},function(response){ 


});
	});
};


function fetchBankAccounts(){
jQuery(document).ready(function($) {	


$.post("fetchbankaccounts.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('rateContainer').innerHTML += '<tr>'+
                   '<td >'+response[x].bank_name+' </td><td>'+response[x].account_no+'</td><td >'+response[x].account_name+' </td>'+
                   '<td><a href="banking-detail.php?bank='+response[x].id+'" >Remove</a></td>'+
                    '</tr>';
	
	
}
	

});
	});
}

function fetchTopUpNo(){
jQuery(document).ready(function($) {	


$.post("fetchtopupnumber.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('rateContainer').innerHTML += '<tr>'+
                   '<td >'+response[x].network+' </td><td>'+response[x].phone_no+'</td>'+
                   '<td><a href="top-up-phone.php?network='+response[x].id+'" >Remove</a></td>'+
                    '</tr>';
	
	
}
	

});
	});
}
function fetchTopUpNetwork(){
jQuery(document).ready(function($) {	


$.post("fetchmobilenetworks.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('network').innerHTML += '<option>'+response[x].network_name+'</option>';
	
	
}
	

});
	});
}


function fetchBankingDetails(){
jQuery(document).ready(function($) {	


$.post("fetchbankaccounts.php",{security:"secure"},function(response){ 
 	//alert();

	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	var y = x+1;

		document.getElementById('accountContainer').innerHTML += '<p class="method">'+y+'. '+response[x].account_no+' ('+response[x].bank_name+')<br><span class="how">'+response[x].account_name+'</span></p><br>';
	
	
}
	

});
	});
}

function checkOutDataBankTransfer(){
//	check.style.display = "none";
//	processing.style.display = "block";
	
	var cartObject = localStorage.getItem("datacart");

	var price = localStorage.getItem("dataprice");
	var accountNo = document.getElementById('accountN').value;
	var bank = document.getElementById('bank').value;
	var amount = document.getElementById('amountSent').value;
	//alert(amount);

	var accountName = document.getElementById('accountName').value;

if(accountNo!='' && bank!='' && amount!='' && accountName!=''){
$.post("datacheckout.php",{data:cartObject,price:price,accountno:accountNo,bank:bank,amount:amount,accountname:accountName},function(response){ 
		//if(response=="success"){

				localStorage.removeItem("datacart");
				localStorage.removeItem("dataprice");

				alert("Your Order has been Placed, Thank you")

			window.location = 'confirm-payment.php';
		//}else{
			//alert("failed");
		//}
});
}else{
	alert('Fill all required spaces');
}
}

function checkOutDataShareAndSell(){
//	check.style.display = "none";
//	processing.style.display = "block";
	
	var cartObject = localStorage.getItem("datacart");

	var price = localStorage.getItem("dataprice");
	var phone = document.getElementById('phone').value;
	var amount = document.getElementById('amount').value;
	//alert(amount);

			//alert(accountName);
if(phone!='' && amount!=''){
$.post("datacheckoutshareandsell.php",{data:cartObject,price:price,phone:phone,amount:amount},function(response){ 
//alert(response);
		//if(response=="success"){

				localStorage.removeItem("datacart");
				localStorage.removeItem("dataprice");

				alert("Your Order has been Placed, Thank you")

			window.location = 'confirm-payment.php';
		//}else{
			//alert("failed");
		//}
});
}else{
	alert('Fill all required spaces');
}
}

function fetchGiftCardClient(){
jQuery(document).ready(function($) {	

$.post("fetchgiftcards.php",{security:"secure"},function(response){ 
 	//alert();
//alert(response);
	//alert(response);
for(x=0;x<response.length;x++){
	//alert();
	//alert();
		document.getElementById('giftCardContainer').innerHTML += ' <a href="cardtype.php?cardtype='+response[x].gift_card_name+'"><div>'+
                  						'<img src="../../admin/'+response[x].gift_card_icon+'" alt="" height="50px" width="50px">'+
                  						'<p class="method">'+response[x].gift_card_name+'</p>'+
                						'</div></a>';
	
	
}
	

});
	});
}



function fetchCardTypeData(){
	var myArray = [];
//	alert();
jQuery(document).ready(function($) {	

$.post("fetchcardtypedata.php",{security:"secure"},function(response){ 
 	//alert();
 	localStorage.setItem('giftcarddata',JSON.stringify(response));
//alert(response);
 	for(x=0;x<response.length;x++){
 		if(myArray.indexOf(response[x].gift_card_country)==-1){
 			document.getElementById('cardCountry').innerHTML += '<option value="'+response[x].gift_card_country+'">'+response[x].gift_card_country+'</option>';
 		
 			myArray.push(response[x].gift_card_country);

 		}
 	}
 	//alert(localStorage.getItem('giftcarddata'));


	

});
	});
}


function fetchCardData(country){
	var cardData = JSON.parse(localStorage.getItem('giftcarddata'));
	document.getElementById('cardRange').innerHTML = "";
	document.getElementById('cardRange').innerHTML += '<option value="">Select card value</option>';
	for(x=0;x<cardData.length;x++){
		if(cardData[x].gift_card_country==country){

			if(cardData[x].gift_card_value_min==cardData[x].gift_card_value_max){
				document.getElementById('cardRange').innerHTML += '<option value="'+cardData[x].gift_card_value_min+'">$'+cardData[x].gift_card_value_min+'</option>'; 

			}else{

				for(i=parseInt(cardData[x].gift_card_value_min);i<=parseInt(cardData[x].gift_card_value_max);i++){
						document.getElementById('cardRange').innerHTML += '<option value="'+i+'">$'+i+'</option>'; 

				}
			}


		}

	}
	

}

function fetchPrice(range){
	var cardData = JSON.parse(localStorage.getItem('giftcarddata'));

		var countrySelected = document.getElementById('cardCountry').value;

	for(x=0;x<cardData.length;x++){
		var thisRange = JSON.parse(cardData[x].gift_card_value_min);
		var maxRange = JSON.parse(cardData[x].gift_card_value_max);
		var country = cardData[x].gift_card_country;
//alert(maxRange);
		if (thisRange<=range && range<=maxRange && cardType.value=='ecode' && country == countrySelected) {
			document.getElementById('cardPrice').innerHTML = "N" + cardData[x].gift_card_price_ecode;
			document.getElementById('giftCardPrice').value = cardData[x].gift_card_price_ecode;
		}else if(thisRange<=range && range <=maxRange && cardType.value=='plastic'  && country == countrySelected){
			document.getElementById('cardPrice').innerHTML = "N" + cardData[x].gift_card_price_plastic;
			document.getElementById('giftCardPrice').value = cardData[x].gift_card_price_plastic;

		}

}
}

	var price, cardValue, country, myObject = {}, myArray = [];

function addToCart(){

	price =	giftCardPrice.value;
	cardValue = cardRange.value;
	country = cardCountry.value;
	card = cardType.value;

	myObject.price =  price;
	myObject.value = cardValue;
	myObject.country = country;
	myObject.card = card;
	myObject.quantity = 1;

//myObject = JSON.stringify(myObject);
var cartArray = localStorage.getItem("cartarray");
//alert(JSON.parse(localStorage.getItem("cartrray")));

	if (cartArray==null) {
		myArray.push(myObject);
		myArray = JSON.stringify(myArray); 
		localStorage.setItem("cartarray",myArray);
		console.log(myArray);
		proceedButton.style.display = "block";
location.reload();

	}else{
		myArray = JSON.parse(cartArray);
//		if (myArray.length<10) {
		myArray.push(myObject);
		myArray = JSON.stringify(myArray); 
		localStorage.setItem("cartarray",myArray);
		console.log(myArray);
		proceedButton.style.display = "block";
location.reload();
//		}else{
//			alert("You cannot add more than 10 cards at a time, please proceed to upload your cards ");
//		}

	}
	//localStorage.setItem("cartarray", myObject);
}


function fetchCartData(){
	var cartArray = localStorage.getItem("cartarray");
	//alert(cartArray);
	if(cartArray!=null){
	cartArray = JSON.parse(cartArray);
	//alert(cartArray.length);
	for(x=0;x<cartArray.length;x++){
	var y = x +1;
		document.getElementById('cart').innerHTML+= '<li>'+y+'</li><div class="card-details" style="margin-bottom:10px">'+
                '<button  style="float:right" onClick="removeItem('+x+')">X</button>'+
                '<p class="card-type">'+cartArray[x].card+'</p>'+
                '<div class="card-info">'+
                  '<p class="card-value">$'+cartArray[x].value+'</p>'+
                  '<p class="country">'+cartArray[x].country+'</p>'+
                  '<div class="">'+
                    '<p class="card-price" style="display:block">N'+cartArray[x].price+'</p>'+
                    '<p>PER DOLLAR</p>'+
                  '</div>'+
                '</div>'+
                '<p class="debit">Debit</p>'+
                '<span  style="float:right;background-color:blue;color:white; font-size:20px; padding:5px" onClick="increaseItem('+x+')">+</span>'+
                '<span  style="float:right; font-size:20px; padding:5px; border:solid 1px" >'+cartArray[x].quantity+'</span>'+
                '<span  style="float:right;background-color:red;color:white; font-size:20px; padding:5px" onClick="decreaseItem('+x+')">-</span>'+
              '</div>';
	}
		document.getElementById('proceedButton').style.display = "block";

}else{
	//alert("nothing in cart yet");
}
	if(cartArray==0){
		document.getElementById('proceedButton').style.display = "none";

}
}

function removeItem(index){
	//alert(index);
	var cartArray = localStorage.getItem("cartarray");
		cartArray = JSON.parse(cartArray);

		cartArray.splice(index,1);
		myArray = JSON.stringify(cartArray); 
		localStorage.setItem("cartarray",myArray);

		location.reload();

}
function increaseItem(index){
	//alert(index);
	var cartArray = localStorage.getItem("cartarray");
		cartArray = JSON.parse(cartArray);

		var cartItem = cartArray[index];
		//alert(JSON.stringify(cartItem));
		cartItem.quantity++;
//		alert(cartItem.quantity);
		cartArray[index]= cartItem;
		myArray = JSON.stringify(cartArray); 
		localStorage.setItem("cartarray",myArray);

		location.reload();

}
function decreaseItem(index){
	//alert(index);
	var cartArray = localStorage.getItem("cartarray");
		cartArray = JSON.parse(cartArray);

		var cartItem = cartArray[index];
		//alert(JSON.stringify(cartItem));
		if(cartItem.quantity>1){
		cartItem.quantity--;
//		alert(cartItem.quantity);
		cartArray[index]= cartItem;
		myArray = JSON.stringify(cartArray); 
		localStorage.setItem("cartarray",myArray);

		location.reload();
}
}

function fetchCryptoCurrencyValue(){
	//alert();
jQuery(document).ready(function($) {	

$.post("fetchcryptocurrencyvalue.php",{security:"secure"},function(response){ 
 	//alert();
//alert(response);
	//alert(response);
	//alert();
	//alert();
		document.getElementById('currentValue').innerHTML = '1 '+response[0].cryptocurrency_name+'/$'+response[0].current_value;
	
	
	

});
	});
}
var indexOfFile = [];
function changeLabel(a){
	var label = "label"+a;
	var photo = "photo"+a
	//photo = document.getElementById(photo).fullpath;
	//alert(photo);
	document.getElementById(label).innerHTML = "Change Card "+a;
	document.getElementById(photo).style.display="block";

	var inputIndex = a-1;
	indexOfFile[inputIndex] = 1;
	//alert(indexOfFile.length);
	//alert(inputIndex);

}

function createFileInput(){
	var cartArray = localStorage.getItem("cartarray");
	//alert(cartArray);
	if(cartArray!=null){
	cartArray = JSON.parse(cartArray);
	var number = 0;
	for (x=0;x<cartArray.length;x++){
			number +=cartArray[x].quantity;
	}
	//alert(number);
	document.getElementById('numberOfCard').value = number;
	//alert(JSON.parse(cartArray[0]).price);
	for(x=0;x<number;x++){
		var y = x+1;
		document.getElementById('uploadContainer').innerHTML+= '<p><label for="photo'+y+'" id="label'+y+'" style="color:blue">+ Upload Card '+y+'</label></p>'+
                    					'<input type="file" id="photo'+y+'" style="display:none" name="photo'+y+'"" onChange="changeLabel('+y+')"/>';

		document.getElementById('uploadEcode').innerHTML+= '<p><label for="card'+y+'" id="label'+y+'" style="color:blue">Enter Card '+y+' code</label></p>'+
                    					'<input type="text" id="card'+y+'" name="card'+y+'" "/>';                    					
	}
	
}else{
	//alert("nothing in cart yet");
}
}


function createTextInput(){

		document.getElementById('uploadEcode').style.display = "block";
	
	

}

jQuery(document).ready(function($) {	

$("#submitForm").click(function(){
	var newCartArray = [];
	var cartArray = localStorage.getItem("cartarray");
	var cartArray = JSON.parse(cartArray);
		for (x = 0; x<cartArray.length;x++){
			for(i=0;i<cartArray[x].quantity;i++){
					newCartArray.push(cartArray[x]);
			}
		}		
		cartArray = newCartArray;
			if(indexOfFile.length==cartArray.length){
						var formData = new FormData($("#myForm")[0]);
						cartArray = JSON.stringify(cartArray);
						formData.append("cart", cartArray);

			$.ajax({
				url:"processcard.php?",
				type:"POST",
				data: formData,
				async:false,
				success:function(data){
//				alert(data); 
				window.location = "payment-info.php";
					},
				cache:false,
				contentType:false,
				processData:false
			});

		}else{
			errorLog.style.display = "block";
		}
			});
		
	});




function fetchGiftCardTransaction(){

jQuery(document).ready(function($) {	

$.post("fetchgiftcardtransaction.php",{security:"secure"},function(response){ 
	//alert(response);
	document.getElementById('cardLogo').innerHTML += '<img src="../../admin/'+response[0].gift_card_icon+'" height="50px" width="50px" alt="" />';
	document.getElementById('orderNo').innerHTML = parseInt(response[0].transaction_id)+1000000000;
	document.getElementById('dateContainer').innerHTML = response[0].date;
	document.getElementById('bankName').innerHTML = response[0].bank;
	document.getElementById('accountNo').innerHTML = response[0].account_number;
	document.getElementById('accountName').innerHTML =  response[0].account_name;
	var sum = 0;
	var value = 0;
for(x=0;x<response.length;x++){
	//alert();
	sum = sum +parseInt(response[x].card_value);
	value = value+ parseInt(response[x].card_value)*parseInt(response[x].card_price)

	
	
}
	document.getElementById('cardValue').innerHTML = "$"+sum+ " card";
	document.getElementById('cardPrice').innerHTML = "N"+value;
	document.getElementById('ammountToReceive').innerHTML = "N"+value;
});
	});
}


function fetchUserData(){
jQuery(document).ready(function($) {	


$.post("fetchuserdata.php",{security:"secure"},function(response){ 
//alert(JSON.stringify(response));
	document.getElementById("name").value = response[0].fullname;
	document.getElementById("username").value = response[0].username;
	document.getElementById("email").value = response[0].email_address;
	document.getElementById("phone").value = response[0].phone_no;
	document.getElementById("bank").value = response[0].bank_name;
	document.getElementById("acct_name").value = response[0].account_name;
	document.getElementById("acct_num").value = response[0].account_number;
	if(response[0].passport!=null){
	    document.getElementById("profilePics").innerHTML = '<img src="../../uploads/'+response[0].passport+'" height="30px" width="30px" style="border-radius:15px" alt="">';
	}




});
	});
}


function userData(){
jQuery(document).ready(function($) {	


$.post("fetchuserdata.php",{security:"secure"},function(response){ 

//alert(location);
if(response[0].passport!=null){
	document.getElementById("profilePics").innerHTML = '<img src="../../uploads/'+response[0].passport+'" height="30px" width="30px" style="border-radius:15px" alt="">';
}
	localStorage.setItem('userdata',JSON.stringify(response));




});
	});
}

function cartCrypto(){
	//alert();
	var cryptoCart = {security:"secure"};
	cryptoCart.cryptoType = document.getElementById("cryptoType").value;
	cryptoCart.cryptoAmount = document.getElementById("cryptoAmount").value;

	localStorage.setItem('cryptoCart',JSON.stringify(cryptoCart))

	//alert(localStorage.getItem('cryptoCart'));







}


function fetchDataTransaction(){
jQuery(document).ready(function($) {	


$.post("fetchdatatransactions.php",{security:"secure"},function(response){ 
//alert(JSON.stringify(response));

for(x=0;x<response.length;x++){
 //var time = response[x].date;
	var orderNo = 1000000000+parseInt(response[x].id);
	//alert(orderNo);
	document.getElementById("transactionsContainer").innerHTML += '<a href="data-transaction-single.php?order='+orderNo+'" class="pop">'+
            														'<div class="each-transaction">'+
              															'<img src="'+response[x].mobile_network_icon+'" height="50px" width="50px" alt="" />'+
															              '<div class="status">'+
															                '<div class="item">'+
															                  '<p>'+response[x].data_plan_value+'</p>'+
															                  '<p>'+response[x].date+'</p>'+
															                '</div>'+
															                '<p>'+response[x].status+'</p>'+
															              '</div>'+
															              '<p class="price">N'+response[x].data_plan_price+'</p>'+
															            '</div></a>';


}

if(response.length==0){
	document.getElementById("transactionsContainer").innerHTML = "<h3>You have not made any transaction</h3>";
}
});
	});
}

function showModal(order,phone,date,payment){
	var orderNo = 1000000000+order;

	document.getElementById("modal").style.display = "block";
	document.getElementById("orderNo").innerHTML = "#"+orderNo;
	document.getElementById("phoneNo").innerHTML = phone;	

	if(payment==="Bank Transfer"){
		document.getElementById("bankName").innerHTML = phone;	
		document.getElementById("accountName").innerHTML = phone;	
		document.getElementById("accountNo").innerHTML = phone;	
	}
}


function fetchDataSingleTransaction(){
jQuery(document).ready(function($) {	
	$.post("fetchdatasingletransaction.php",{security:"secure"},function(response){ 

//alert(response[0].id);
	document.getElementById('orderNo').innerHTML += 1000000000 + parseInt(response[0].id);
	document.getElementById('dataValue').innerHTML = response[0].data_plan_value;
	document.getElementById('phoneNo').innerHTML = response[0].phone_no;
	document.getElementById('orderPrice').innerHTML = "N" +response[0].data_plan_price;
	document.getElementById('dateTime').innerHTML = response[0].date;
	document.getElementById('logoContainer').innerHTML = '<img src="'+response[0].mobile_network_icon+'" alt="" width="50px" height="50px" style="display:inline; border-radius:25px" />';
	document.getElementById('currentStatus').innerHTML = response[0].status;

	if(response[0].status=="Sent"){
		document.getElementById('formInput').style.display = "none";
		document.getElementById('formSubmit').style.display = "none";

	}

	if(response[0].payment_method=="Bank Transfer"){
		document.getElementById('bankName').innerHTML = response[0].bank_name;
		document.getElementById('accountNo').innerHTML = response[0].account_no;
		document.getElementById('accountName').innerHTML = response[0].account_name;
	}else if(response[0].payment_method=="Share and Sell") {
		document.getElementById('order').style.display = "none";
		document.getElementById('transactionPhone').innerHTML = response[0].share_phone;
		document.getElementById('orderPrice').innerHTML = "N" +response[0].share_amount;

		}else if(response[0].payment_method=="Paystack"){
		document.getElementById('orderForShare').style.display = "none";
		document.getElementById('order').style.display = "none";
		document.getElementById('transactionRef').innerHTML = response[0].paystack_reference;
		
	    
	}
	
	
	


})
})

}


function fetchGiftCardTransactionAdmin(){
jQuery(document).ready(function($) {	


$.post("fetchgiftcardtransactions.php",{security:"secure"},function(response){ 

var myArray = [];
for(x=0;x<response.length;x++){
 var y = x+1;
	var orderNo = 100000000+parseInt(response[x].id);
    if(response[y]!=undefined){
	var orderY = 100000000+parseInt(response[y].id);
    }else{
        orderY = 0;
    }
	if(myArray.indexOf(orderNo)==-1){
		var sum = 0+ parseInt(response[x].card_value);
															              

myArray.push(orderNo);
}else if(myArray.indexOf(orderNo)!=-1){
	sum = sum +  parseInt(response[x].card_value);
//alert(sum);

}
//	alert(orderY);

if(orderNo!=orderY){
	document.getElementById("transactionsContainer").innerHTML += '<a href="giftcard-transaction-single.php?order='+orderNo+'" class="pop">'+
            														'<div class="each-transaction">'+
              															'<img src="'+response[x].gift_card_icon+'" height="50px" width="50px" alt="" />'+
															              '<div class="status">'+
															                '<div class="item">'+
															                  '<p>'+response[x].gift_card_name+'</p>'+
															                  '<p>'+response[x].date+'</p>'+
															                '</div>'+
															                '<p>'+response[x].status+'</p></div><p class="price">$'+sum+'</p>'+
															            '</div></a>';
}
}


});
	});
}


function fetchGiftcardSingleTransaction(){
jQuery(document).ready(function($) {	
	$.post("fetchgiftcardsingletransaction.php",{security:"secure"},function(response){ 

//alert(JSON.stringify(response));
	document.getElementById('orderNo').innerHTML += 1000000000 + parseInt(response[0].transaction_id);
	document.getElementById('dateTime').innerHTML = response[0].date;
	document.getElementById('logoContainer').innerHTML = '<img src="'+response[0].gift_card_icon+'" alt="" width="50px" height="50px" style="display:inline; border-radius:25px" />';

	var value = 0;
	var amount = 0;

	for (var x = 0; x < response.length; x++) {
		value = value + parseInt(response[x].card_value);
		amount = amount + parseInt(response[x].card_value)* parseInt(response[x].card_price); 
		document.getElementById('cardImages').innerHTML += '<div style="padding:20px;border-bottom:solid 1px"><img src="../uploads/'+response[x].card_image+'" alt="" width="400px" height="200px"/><h3>'+response[x].card_code+'</h3></div>';

	}

	document.getElementById('dataValue').innerHTML = "$"+value+ " Card";
	document.getElementById('dataAmount').innerHTML = "N"+amount;
	document.getElementById('currentStatus').innerHTML = response[0].status;

	if(response[0].status=="Sent"){
		document.getElementById('formInput').style.display = "none";
		document.getElementById('formSubmit').style.display = "none";

	}

		document.getElementById('bankName').innerHTML = response[0].bank
		document.getElementById('accountNo').innerHTML = response[0].account_number;
		document.getElementById('accountName').innerHTML = response[0].account_name;
	
	


})
})

}

function fetchCryptoRateClient(){
jQuery(document).ready(function($) {	


$.post("fetchcryptorateclient.php",{security:"secure"},function(response){ 
 
 	var cryptoToBuy = parseFloat(localStorage.getItem('cryptoamount'));
	var ammountToReceive = 0;
	for(x=0;x<response.length;x++){

		document.getElementById('cryptoRateContainer').innerHTML += '<div>''<p>$'+response[x].cryptocurrency_value_min+'-$'+response[x].cryptocurrency_value_max+
																		'</p><p><del>N</del>'+response[x].cryptocurrency_price+'</p>''</div>;
	if(response[x].cryptocurrency_value_min<=cryptoToBuy&&response[x].cryptocurrency_value_max>=cryptoToBuy){
			ammountToReceive = cryptoToBuy * response[x].cryptocurrency_price;

	}

// 	if (ammountToReceive==0 && response[x].cryptocurrency_value_max<cryptoToBuy) {

// 		ammountToReceive = cryptoToBuy * response[x].cryptocurrency_price;
// 	}
	
// 	if (response[x].cryptocurrency_value_min>cryptoToBuy) {

// 		ammountToReceive = cryptoToBuy * response[x].cryptocurrency_price;
// 	}


	}
	if(ammountToReceive==0){
		var maxLenght = response.length-1;
		var max = response[maxLenght].cryptocurrency_value_max;
		if(cryptoToBuy>max){
			ammountToReceive = cryptoToBuy * response[maxLenght].cryptocurrency_price;
		} 
		var min = response[0].cryptocurrency_value_max;
		if(cryptoToBuy<min){
			ammountToReceive = cryptoToBuy * response[0].cryptocurrency_price;
		} 		
	}
	
		document.getElementById('amountLabel').innerHTML = "By sending $"+cryptoToBuy+" you will receive N" + ammountToReceive;
		// document.getElementById('cryptoAmount').value = ammountToReceive; 
		document.getElementById('cryptoAmount').innerHTML = ammountToReceive; 
});
	});
}

function fetchCryptoTransaction(){

jQuery(document).ready(function($) {	

$.post("fetchcryptotransactiondetail.php",{security:"secure"},function(response){ 
	//alert(response);
	document.getElementById('cardLogo').innerHTML += '<img src="../../admin/'+response[0].cryptocurrency_icon+'" height="50px" width="50px" alt="" />';
	document.getElementById('orderNo').innerHTML = parseInt(response[0].transaction_id)+10000000;
	document.getElementById('dateContainer').innerHTML = response[0].date;
	document.getElementById('bankName').innerHTML = response[0].bank;
	document.getElementById('accountNo').innerHTML = response[0].account_number;
	document.getElementById('accountName').innerHTML =  response[0].account_name;
	document.getElementById('cardValue').innerHTML = "$"+response[0].crypto_value;
	document.getElementById('cardPrice').innerHTML = "N"+response[0].amount_to_pay;
	document.getElementById('ammountToReceive').innerHTML = "N"+response[0].amount_to_pay;
	document.getElementById('walletAddress').innerHTML = response[0].wallet_address;
});
	});
}

function fetchDataTransactionClient(){
jQuery(document).ready(function($) {	


$.post("fetchdatatransactions.php",{security:"secure"},function(response){ 
//alert(JSON.stringify(response));

for(x=0;x<response.length;x++){
 //var time = response[x].date;
	var orderNo = 1000000000+parseInt(response[x].id);
	//alert(orderNo);
	document.getElementById("transactionsContainer").innerHTML += '<a href="data-transaction-single.php?order='+orderNo+'" class="pop">'+
            														'<div class="each-transaction">'+
              															'<img src="../../admin/'+response[x].mobile_network_icon+'" height="50px" width="50px" alt="" />'+
															              '<div class="status">'+
															                '<div class="item">'+
															                  '<p>'+response[x].data_plan_value+'</p>'+
															                  '<p>'+response[x].date+'</p>'+
															                '</div>'+
															                '<p>'+response[x].status+'</p>'+
															              '</div>'+
															              '<p class="price">N'+response[x].data_plan_price+'</p>'+
															            '</div></a>';


}

if(response.length==0){
	document.getElementById("transactionsContainer").innerHTML = "<h3>You have not made any transaction</h3>";
}


});
	});
}

function fetchDataSingleTransactionClient(){
jQuery(document).ready(function($) {	
	$.post("fetchdatasingletransaction.php",{security:"secure"},function(response){ 

//alert(response[0].transaction_id);
	document.getElementById('orderNo').innerHTML += 1000000000 + parseInt(response[0].id);
	document.getElementById('dataValue').innerHTML = response[0].data_plan_value;
	document.getElementById('phoneNo').innerHTML = response[0].phone_no;
	document.getElementById('orderPrice').innerHTML = "N" +response[0].data_plan_price;
	document.getElementById('dateTime').innerHTML = response[0].date;
	document.getElementById('logoContainer').innerHTML = '<img src="../../admin/'+response[0].mobile_network_icon+'" alt="" width="50px" height="50px" style="display:inline; border-radius:25px" />';
	document.getElementById('currentStatus').innerHTML = response[0].status;


	if(response[0].payment_method=="Bank Transfer"){
		document.getElementById('orderForShare').style.display = "none";
		document.getElementById('bankName').innerHTML = response[0].bank_name;
		document.getElementById('accountNo').innerHTML = response[0].account_no;
		document.getElementById('accountName').innerHTML = response[0].account_name;
	}else if(response[0].payment_method=="Share and Sell") {
		document.getElementById('order').style.display = "none";
		document.getElementById('transactionPhone').innerHTML = response[0].share_phone;
		document.getElementById('orderPrice').innerHTML = "N" +response[0].share_amount;

	}else if(response[0].payment_method=="Paystack"){
		document.getElementById('orderForShare').style.display = "none";
		document.getElementById('order').style.display = "none";
		document.getElementById('transactionRef').innerHTML = response[0].paystack_reference;
	    
	}
	
	


})
})

}

function fetchGiftCardTransactionClient(){
jQuery(document).ready(function($) {	


$.post("fetchgiftcardtransactions.php",{security:"secure"},function(response){ 
var myArray = [];
for(x=0;x<response.length;x++){
 var y = x+1;
 var idd = response[x].id
 
	var orderNo = 100000000+parseInt(response[x].id);
    if(response[y]!=undefined){
	var orderY = 100000000+parseInt(response[y].id);
    }else{
        orderY = 0;
    }
	//alert(orderNo);
	if(myArray.indexOf(orderNo)==-1){
		var sum = 0+ parseInt(response[x].card_value);
															              

myArray.push(orderNo);
}else if(myArray.indexOf(orderNo)!=-1){
	sum = sum +  parseInt(response[x].card_value);
//alert(sum);

}

 if(orderNo!=orderY){
	document.getElementById("transactionsContainer").innerHTML += '<a href="giftcard-transaction-single.php?order='+orderNo+'" class="pop">'+
            														'<div class="each-transaction">'+
              															'<img src="../../admin/'+response[x].gift_card_icon+'" height="50px" width="50px" alt="" />'+
															              '<div class="status">'+
															                '<div class="item">'+
															                  '<p>'+response[x].gift_card_name+'</p>'+
															                  '<p>'+response[x].date+'</p>'+
															                '</div>'+
															                '<p>'+response[x].status+'</p></div><p class="price">$'+sum+'</p>'+
															            '</div></a>';
 }
}

if(response.length==0){
	document.getElementById("transactionsContainer").innerHTML = "<h3>You have not made any transaction</h3>";
}


});
	});
}


function fetchGiftcardSingleTransactionClient(){
jQuery(document).ready(function($) {	
	$.post("fetchgiftcardsingletransaction.php",{security:"secure"},function(response){ 

//alert(JSON.stringify(response));
	document.getElementById('orderNo').innerHTML += 1000000000 + parseInt(response[0].transaction_id);
	document.getElementById('dateTime').innerHTML = response[0].date;
	document.getElementById('logoContainer').innerHTML = '<img src="../../admin/'+response[0].gift_card_icon+'" alt="" width="50px" height="50px" style="display:inline; border-radius:25px" />';

	var value = 0;
	var amount = 0;

	for (var x = 0; x < response.length; x++) {
		value = value + parseInt(response[x].card_value);
		amount = amount + parseInt(response[x].card_value)* parseInt(response[x].card_price); 
		document.getElementById('cardImages').innerHTML += '<div style="padding:20px;border-bottom:solid 1px"><img src="../../uploads/'+response[x].card_image+'" alt="" width="400px" height="200px"/><h3>'+response[x].card_code+'</h3></div>';

	}

	document.getElementById('dataValue').innerHTML = "$"+value+ " Card";
	document.getElementById('dataAmount').innerHTML = "N"+amount;
	document.getElementById('currentStatus').innerHTML = response[0].status;

	if(response[0].status=="Sent"){
		document.getElementById('formInput').style.display = "none";
		document.getElementById('formSubmit').style.display = "none";

	}

		document.getElementById('bankName').innerHTML = response[0].bank
		document.getElementById('accountNo').innerHTML = response[0].account_number;
		document.getElementById('accountName').innerHTML = response[0].account_name;
	
	


})
})

}


function fetchCryptoTransactionAdmin(){
jQuery(document).ready(function($) {	


$.post("fetchcryptotransaction.php",{security:"secure"},function(response){ 

var myArray = [];
for(x=0;x<response.length;x++){
	var orderNo = 100000000+parseInt(response[x].id);

	document.getElementById("transactionsContainer").innerHTML += '<a href="crypto-transaction-single.php?order='+orderNo+'" class="pop">'+
            														'<div class="each-transaction">'+
              															'<img src="'+response[x].cryptocurrency_icon+'" height="50px" width="50px" alt="" />'+
															              '<div class="status">'+
															                '<div class="item">'+
															                  '<p>'+response[x].crypto_name+'</p>'+
															                  '<p>'+response[x].date+'</p>'+
															                '</div>'+
															                '<p>'+response[x].status+'</p></div><p class="price">$'+response[x].crypto_value+'</p>'+
															            '</div></a>';
}


});
	});
}

function fetchCryptoSingleTransactionAdmin(){
jQuery(document).ready(function($) {	
	$.post("fetchcryptosingletransaction.php",{security:"secure"},function(response){ 

//alert(JSON.stringify(response));
	document.getElementById('orderNo').innerHTML += 100000000 + parseInt(response[0].transaction_id);
	document.getElementById('dateTime').innerHTML = response[0].date;
	document.getElementById('logoContainer').innerHTML = '<img src="'+response[0].cryptocurrency_icon+'" alt="" width="50px" height="50px" style="display:inline; border-radius:25px" />';

	var value = 0;
	var amount = 0;

	document.getElementById('dataValue').innerHTML = "$"+response[0].crypto_value;
	document.getElementById('dataAmount').innerHTML = "N"+response[0].amount_to_pay;
	document.getElementById('currentStatus').innerHTML = response[0].status;
	document.getElementById('walletAddress').innerHTML = response[0].wallet_address;
	document.getElementById('screenShot').innerHTML = '<img src="../uploads/'+response[0].screenshot+'" alt="" width="400px" height="200px" />';;

	if(response[0].status=="Sent"){
		document.getElementById('formInput').style.display = "none";
		document.getElementById('formSubmit').style.display = "none";

	}

		document.getElementById('bankName').innerHTML = response[0].bank
		document.getElementById('accountNo').innerHTML = response[0].account_number;
		document.getElementById('accountName').innerHTML = response[0].account_name;
	
	


})
})

}

function fetchCryptoTransactionClient(){
jQuery(document).ready(function($) {	


$.post("fetchcryptotransaction.php",{security:"secure"},function(response){ 

var myArray = [];
for(x=0;x<response.length;x++){
	var orderNo = 100000000+parseInt(response[x].id);

	document.getElementById("transactionsContainer").innerHTML += '<a href="crypto-transaction-single.php?order='+orderNo+'" class="pop">'+
            														'<div class="each-transaction">'+
              															'<img src="../../admin/'+response[x].cryptocurrency_icon+'" height="50px" width="50px" alt="" />'+
															              '<div class="status">'+
															                '<div class="item">'+
															                  '<p>'+response[x].crypto_name+'</p>'+
															                  '<p>'+response[x].date+'</p>'+
															                '</div>'+
															                '<p>'+response[x].status+'</p></div><p class="price">$'+response[x].crypto_value+'</p>'+
															            '</div></a>';
}

if(response.length==0){
	document.getElementById("transactionsContainer").innerHTML = "<h3>You have not may any transaction</h3>";
}


});
	});
}

function fetchCryptoSingleTransactionClient(){

jQuery(document).ready(function($) {	
	$.post("fetchcryptosingletransaction.php",{security:"secure"},function(response){ 

//alert(JSON.stringify(response));
	document.getElementById('orderNo').innerHTML += 100000000 + parseInt(response[0].transaction_id);
	document.getElementById('dateTime').innerHTML = response[0].date;
	document.getElementById('logoContainer').innerHTML = '<img src="../../admin/'+response[0].cryptocurrency_icon+'" alt="" width="50px" height="50px" style="display:inline; border-radius:25px" />';

	var value = 0;
	var amount = 0;

	document.getElementById('dataValue').innerHTML = "$"+response[0].crypto_value;
	document.getElementById('dataAmount').innerHTML = "N"+response[0].amount_to_pay;
	document.getElementById('currentStatus').innerHTML = response[0].status;
	document.getElementById('walletAddress').innerHTML = response[0].wallet_address;
	document.getElementById('screenShot').innerHTML = '<img src="../../uploads/'+response[0].screenshot+'" alt="" width="400px" height="200px" />';;


		document.getElementById('bankName').innerHTML = response[0].bank
		document.getElementById('accountNo').innerHTML = response[0].account_number;
		document.getElementById('accountName').innerHTML = response[0].account_name;
	
	


})
})

}

function fetchNotification(){
jQuery(document).ready(function($) {	
	$.post("fetchnotification.php",{security:"secure"},function(response){ 
		document.getElementById('badge').innerHTML = response.gift_card+response.crypto+response.data;


})
})

}
function fetchNotificationForTransaction(){
jQuery(document).ready(function($) {	
	$.post("fetchnotification.php",{security:"secure"},function(response){ 
		document.getElementById('dataBadge').innerHTML = response.data;
		document.getElementById('giftBadge').innerHTML = response.gift_card;
		document.getElementById('cryptoBadge').innerHTML = response.crypto;


})
})

}

function fetchMyTransactions(){
jQuery(document).ready(function($) {	
	$.post("fetchmytransactions.php",{security:"secure"},function(response){ 
//alert(JSON.stringify(response));
		if(JSON.parse(response.data) == 0 && JSON.parse(response.gift_card) == 0 && JSON.parse(response.crypto) == 0){
			document.getElementById('noTransact').style.display = 'block';
				document.getElementById('viewTransact').style.display = 'none';
		
		}else{

		}


})
})

}

function fetchWalletId(){
jQuery(document).ready(function($) {	
	$.post("blockchain.php",{},function(response){ 

		document.getElementById('crypto').value = response;

})
})

}
