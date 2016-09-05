
/*
    Element 0 is start date 
    Element 1 is end date
*/
var date = [-1, -1];

// keeps track of clicked items 
var item = -1;
var clickeditemval = -1;


$(document).ready(function(){
    
    
    $('table td').click(function () {

        
        item = $(this);     
        clickeditemval = Number( $(this).text() ) ;
        alert(clickeditemval);

       if($.isNumeric(clickeditemval) && clickeditemval < 32 && clickeditemval > 0){

           if(date[0] == -1 ){
               date[0] = clickeditemval;
                item.css("background","#f0951d") 
                    .css("border","0")
                    .css("box-shadow","0 2px 6px rgba(0, 0, 0, .5) inset")
                alert("hey");
           }
           else{
               var daterange = new Array(31).fill(0);;
               date[1] = clickeditemval;
               for(var i = date[0] ; i<= date[1] ; i++){
                    daterange[i] = i;
               }
               
               $('table td').each(function(){
                   
                   
                   if( $.isNumeric( daterange[Number($(this).text())] ) && daterange[Number($(this).text())] != 0 ){
                       $(this).addClass('selected');
                       /*$(this).css("background","#f0951d") 
                                                .css("border","0")
                                                .css("box-shadow","0 2px 6px rgba(0, 0, 0, .5) inset")*/
                   } 
               });
                 
               
               // reset start and end point 
               date = [-1, -1]; 
               $('table td').each(function(){
                   $(this).removeClass('removeClass');
               });
               
           }
       }
        
        
    });
    
});

           
      