 /*function CartValueIncrement() {  
      var x = document.getElementById("cartValue").innerHTML; 
	  
       if(x == ""){
          document.getElementById("cartValue").innerHTML="1"; 
       }else{  	   
           var a = parseInt(x)
        a=a+1
       var res =String(a) 
       document.getElementById("cartValue").innerHTML=res;
       }    
   }*/
   
   function CartValueIncrement() {
  if(typeof(Storage) != "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
    } else {
      sessionStorage.clickcount = 1;
    }
    document.getElementById("cartValue").innerHTML = sessionStorage.clickcount;
  }/* else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }*/
}