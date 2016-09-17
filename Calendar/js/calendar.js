
/*
    Element 0 is start date 
    Element 1 is end date
*/
var date = [-1, -1];

// keeps track of clicked items 
var item = -1;
var clickeditemval = -1;


$(document).ready(function(){
    
    $( "input[type=checkbox]" ).on( "click", function(){
        if( date[0] == -1 ){
            alert('Please select a start date !');
        }
        else{
            var daterange = new Array(31).fill(0);;
            date[1] = clickeditemval;
            for(var i = date[0] ; i<= 31; i++){
                daterange[i] = i;
            }

            $('table td').each(function(){
                if( $.isNumeric( daterange[Number($(this).text())] ) && daterange[Number($(this).text())] != 0 ){
                         $(this).addClass('selected');
                } 
            });
            
            PrintDates(date[0],"31");


            // reset start and end point 
            date = [-1, -1]; 
            $('table td').each(function(){
               $(this).removeClass('removeClass');
            });
        }
    }); 
    
    $('#btnrefresh').click(function(){
       location.reload(); 
    });
    
    $('table td').click(function () {
        item = $(this);     
        clickeditemval = Number( $(this).text() ) ;
        alert(clickeditemval);

        if(clickeditemval == 0){
            alert(" Please click on a valid day! ");
        }
        else{
            if($.isNumeric(clickeditemval) && clickeditemval < 32 && clickeditemval > 0){

                    Cleaning();
                
                
                   if(date[0] == -1 ){
                       date[0] = clickeditemval;
                       item.addClass('selected');
                   }
                   else{
                       var daterange = new Array(31).fill(0);;
                       date[1] = clickeditemval;
                       
                       // client can not select earlier date 
                       if( Number(date[1]) - Number(date[0]) < 0 ){
                           alert("End date must be a later date !")
                           location.reload(); 
                       }
                       else{
                           for(var i = date[0] ; i<= date[1] ; i++){
                            daterange[i] = i;
                           }

                           $('table td').each(function(){
                                if( $.isNumeric( daterange[Number($(this).text())] ) && daterange[Number($(this).text())] != 0 ){
                                       $(this).addClass('selected');
                                } 
                            });

                           PrintDates(date[0],date[1]);

                           // reset start and end point 
                           date[1] = [-1]; 
                           $('table td').each(function(){
                               $(this).removeClass('removeClass');
                           });
                        }
                   }
               }
        }
    });
    
});


function PrintDates(start, end){
    $('#startdate').text(start+" September 2016");
    $('#enddate').text(end+" September 2016");
    
}

function Cleaning(){
    $('table td').each(function(){
       $(this).removeClass('selected'); 
    });
}

           
      