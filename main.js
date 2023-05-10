doStuff()
function doStuff(){
    let unix_timestamp = ( Date.now()/1000 )-1680721200;
    console.log(unix_timestamp)
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date();
    // Day of the week
    var days = date.getDay();
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    //var formattedTime = days + 'd ' + hours + 'h ' + minutes.substr(-2) + 'min ' + seconds.substr(-2) + 'sec';
    formattedTime = unix_timestamp;
    document.getElementById("thetime").innerHTML = formattedTime;
}
setInterval(function(){
    doStuff();
},1000);