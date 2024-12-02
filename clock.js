function showTime(){
    var date = new Date(); // Date
    var h = date.getHours(); //hours
    var m = date.getMinutes(); //Minutes
    var s = date.getSeconds(); //Seconds
    var session =   "AM";
     
    if( h == 0){
     h = 12;
    }
    if( h > 12){
        h = h - 12;
        session = "PM" 
    }
/*
    if( h < 10){
        h = "0" + h;
    }
    if( m < 10){       Another way
        m = "0" + m;
    }
    if( s < 10){
        s = "0" + s;
    }*/
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    setTimeout(showTime, 1000);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + " " + session;
}
showTime()

