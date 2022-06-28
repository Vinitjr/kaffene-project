$(document).ready(function(){

    var pagesProtected = ['order.html', 'product.html', 'user.html'];

    var loggedIn = localStorage.getItem('loggedin');

    // checking protected pages

    if (pagesProtected.includes(location.pathname)) {

        // checking whether loggedin or not

        if (!loggedIn){
            location.replace('index.html')
        }
    }

    $('#logout-btn').click(function(){
        localStorage.removeItem('loggedin');
    })

    $('#login-btn').click(function(){

        var username = $('#username').val();
        var password = $('#password').val()

        if(username === password){
            localStorage.setItem('loggedin', true)

            alert('login Successful')

            location.href = 'order.html'
        } else {

            alert('please Enter Correct Credentials')

        }

    });
})


///// order page

let orderCount = 0;
let orderData = [];
let updatedOrdersList = []

function generateorder(orderData){
    console.log(orderData.id)
    $('#ordersbody')
    .append($('<tr>').addClass("tableRow" + orderData.orderStatus)
    .append($('<td>').addClass("orderId").text(orderData.id))
    .append($('<td>').addClass("CustomerName").text(orderData.customerName))
    .append($('<td>').addClass("date").text(orderData.orderDate).append($('<br>'))
    .append($('<span>').addClass("time").text(orderData.orderTime)))
    .append($('<td>').addClass("amount").text(orderData.amount))
    .append($('<td>').addClass("status").text(orderData.orderStatus))
    )
}


// New Button

$('#newCB').click(()=>{
if(!($('newCB').prop('checked'))){
    $('.New').addClass('hide')
    updatedOrdersList = []
    ordersData.forEach(item =>{
        if(item.orderStatus == 'packed'){
            if ($('#packedCB').prop('checked')){
                updatedOrdersList.push(item)
            }
        }

        if(item.orderStatus == 'inTransmit'){
            if ($('#inTransmitCB').prop('checked')){
                updatedOrdersList.push(item)
            }
        }

        if(item.orderStatus == 'Delivered'){
            if ($('#deliveredCB').prop('checked')){
                updatedOrdersList.push(item)
            }
        }


    })
} else {
    $('.New').removeClass('hide')
    updatedOrdersList = []
    if($('#newCB').prop('checked')){
        ordersData.forEach(item => {
            if (item.orderStatus == 'New'){
                updatedOrdersList.push(item)
            }
        })
    }

    if ($('#packedCB').prop('checked')){
        ordersData.forEach(item =>{
            if(item.orderStatus == 'packedCB'){
                updatedOrdersList.push(item)
            }
        })
    }

    if ($('#inTransmitCB').prop('checked')){
        ordersData.forEach(item =>{
            if(item.orderStatus == 'inTransmitCB'){
                updatedOrdersList.push(item)
            }
        })
    }

    if ($('#deliveredCB').prop('checked')){
        ordersData.forEach(item =>{
            if(item.orderStatus == 'deliveredCB'){
                updatedOrdersList.push(item)
            }
        })
    }

    $('#orderCount').text(updatedOrdersList.length)

    for(var i =0; i<updatedOrderList.length;i++){
        generateOrder(updatedOrdersList[i])
    }
 
}
})

// Packed Button 

$('#packedCB').click(()=>{
    if(!($('#packedCB').prop('checked')))
    {
        $('.Packed').addClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item =>{
            if(item.orderStatus == 'New'){
                if($('#newCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }

            if (item.orderStatus == 'InTransit'){
                if($('#inTransmitCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }

            if(item.orderstatus == 'Delivered'){
                if($('#deliveredCB').prop('checked')){
                    updatedOrderList.push(item)
                }
            }
        })
    } else{
        $('.Packed').removeClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item =>{
            if(item.orderStatus == 'New'){
                if($('newCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }

            if(item.orderStatus == 'Packed'){
                if($('#packedCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }

            if(item.orderStatus == 'Intransit'){
                if($('#inTransmitCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }

            if(item.orderStatus == 'Delivered'){
                if($('#deliveredCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }
        })

    $('#orderCount').text(updatedOrdersList.length)
   
    for(var i=0; i < updatedOrdersList.length; i++){
        generateOrder(updatedOrderList[i])
    }
    }
})

// InTransit Button

$('#inTransmitCB').click(()=>{
    if (!($('#inTransmitCB').prop('checked')))
    {
        $('.Intransit').addClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item =>{
            if (item.orderStatus == 'New'){
                if($('#newCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }

            if (item.orderStatus == 'Packed'){
                if($('#packedCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }

            if (item.orderStatus == 'Delivered'){
                if($('#deliveredCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }
        })
    } else {
        $('.Intransit').removeClass('hide')
        updateOrdersList = []
        ordersData.forEach(item =>{
            if(item.orderStatus == 'New'){
                if($('#newCB').prop('checked')){
                    updatedOrderList.push(item)
                }
            }

            if(item.orderStatus == 'Packed'){
                if($('#packedCB').prop('checked')){
                    updatedOrderList.push(item)
                }
            }

            if(item.orderStatus == 'Intransit'){
                if($('#IntransitCB').prop('checked')){
                    updatedOrderList.push(item)
                }
            }

            if(item.orderStatus == 'Delivered'){
                if($('#deliveredCB').prop('checked')){
                    updatedOrderList.push(item)
                }
            }
        })

        $('#orderCount').text(updatedOrdersList.length)
        for(var i=0; i<updatedOrderList.length; i++){
            generateOrder(updatedOrdersList[i])
        }
    }
})

// Delivered Button


$('#deliveredCB').click(()=>{
    if (!($('#deliveredCB').prop('checked')))
    {
        $('.Delivered').addClass('hide')
        updatedOrdersList = []
        ordersData.forEach(item =>{
            if (item.orderStatus == 'New'){
                if($('#newCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }

            if (item.orderStatus == 'Packed'){
                if($('#packedCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }

            if (item.orderStatus == 'Delivered'){
                if($('#deliveredCB').prop('checked')){
                    updatedOrdersList.push(item)
                }
            }
        })
    } else {
        $('.Delivered').removeClass('hide')
        updateOrdersList = []
        ordersData.forEach(item =>{
            if(item.orderStatus == 'New'){
                if($('#newCB').prop('checked')){
                    updatedOrderList.push(item)
                }
            }

            if(item.orderStatus == 'Packed'){
                if($('#packedCB').prop('checked')){
                    updatedOrderList.push(item)
                }
            }

            if(item.orderStatus == 'Intransit'){
                if($('#IntransitCB').prop('checked')){
                    updatedOrderList.push(item)
                }
            }

            if(item.orderStatus == 'Delivered'){
                if($('#deliveredCB').prop('checked')){
                    updatedOrderList.push(item)
                }
            }
        })

        $('#orderCount').text(updatedOrdersList.length)
        for(var i=0; i<updatedOrderList.length; i++){
            generateOrder(updatedOrdersList[i])
        }
    }
})

$.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', (data)=>{

        orderCount = data.length
        ordersData = data;
        $('#orderCount').text(orderCount)
        for(var i=0; i < data.length; i++){
            generateOrder(data[i])
        }

}).fail(() => alert("order get failed"))



///// Proucts Page////////////////////////////////


function generateorder(orderData){
    console.log(orderData.id)
    $('#productsbody')
    .append($('<tr>').addClass("tableRow")
    .append($('<td>').addClass("productId").text(ProductData.id))
    .append($('<td>').addClass("medicineName").text(ProductData.medicineName))
    .append($('<td>').addClass("medicineBrand").text(ProductData.medicineBrand))
    .append($('<td>').addClass("expDate").text(ProductData.expiryDate))
    .append($('<td>').addClass("unitPrice").text("$" + ProductData.unitPrice))
    .append($('<td>').addClass("stock").text(ProductData.stock))
    )
}

$('#expCB').click(()=>{
    if (($ ('#expCB').prop('checked') == false) && ($('#lowCB').prop('checked')
    == false)){
        var data = JSON.parse(localStorage.getItem('product_data'));
        $('#productsbody').empty();

        for(var i=0; i<data.length; i++){
            generateProductList(data[i])
        }
        return
    }

    if ($('#expCB').prop('checked') == true){
        var data = JSON.parse(localStorage.getItem('products_data'));

        const today = new Date();
        letexpiredProducts = data.filter(function(d){
            return d.stock < 100
        });

        // Removing old Date

        $('#productsbody').empty();
        for(var i=0; i< expiredProducts.length; i++){
            //Updating new Data
            generateProductList(expiredProducts[i])
        }
    }else{
        var data = JSON.parse(localStorage.getItem('products_data'));
        let lowStock = data.filter(function(d){
            return d.stock < 100
        });

        $('$productsbody').empty();
        for(var i=0; i < lowStock.length; i++) {
            generateProductList(lowStock[i])
        }
    }

})

$('#lowCB').click(()=>{
    var data = JSON.parse(localStorage.getItem('products_data'));
    if($('#lowCB').prop('checked') == true){
        let lowStock = data.filter(function(d){
            return d.stock < 100
        });

        $('#productsbody').empty();
        for(var i=0; i<lowStock.length; i++){
            generateProductList(lowStock[i])
        }
    } 

    else if(($('#expCB').prop('checked') == true)){
        
    }

});
    