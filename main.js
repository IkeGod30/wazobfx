const url = "https://www.worldtimeapi.org/timezone/Africa/Lagos";
const updateDate = document.querySelector('.updated');
//const loading = document.onload;
document.body.addEventListerner('load', getDateTime);

function getDateTime() {
    
    fetch(url).then(function(res) {
        console.log(res);
        return res.json()
        //res.JSON.parse(url);
                    
        }).then(function(data) {
            console.log(data.data);
            data.abbreviation.forEach(function(val) {
                console.log(val);
            });

   });
       
}

//$('li').on('click', function() {
//        $(this).animate({
//            opacity: 0.0, 
//            paddingLeft:'+=80'
//        }, 500, function() {
//            $(this).remove();
//        });
//    });
//    {);
//     



//function greet() {
//    alert("Welcome");
//    
//}
//var $ls = $('.heading');
//
//$ls.on('click', greet);
//                    


//let $ls = $('li')
//    $ls.on('click', greet, false);
//    

//function updateToday() {
//    
//    let update = $('.det');
//    let today = new Date();
//    //let update = document.getElementById('det');
//    let hourNow = today.getHours();
//    
//    if (hourNow >= (8 + 5)) {
//       update.innerHTML = hourNow; 
//    
//    }
//}
//let update = $('.det');
//update.on('load', updateToday, false);

//var update = $('.det').value;
//
//var today = new Date();
//
//update.Text(today);

//alert(today);
//update.addEventListener('load', updateToday, false);
        
