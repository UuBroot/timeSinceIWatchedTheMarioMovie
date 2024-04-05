doStuff()
function doStuff(){
    let marioTime = 1680721200;
    let date = new Date(marioTime * 1000);
    let now = new Date();
    
    let differenceInMilliseconds = now - date;
    let differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
    let differenceInMinutes = Math.floor(differenceInSeconds / 60);
    let differenceInHours = Math.floor(differenceInMinutes / 60);
    let differenceInDays = Math.floor(differenceInHours / 24);

    let remainingHours = differenceInHours % 24;
    let remainingMinutes = differenceInMinutes % 60;
    let remainingSeconds = differenceInSeconds % 60;

    document.getElementById("thetime").innerHTML = `${differenceInDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, and ${remainingSeconds} seconds.`;
}
setInterval(function(){
    doStuff();
},1000);
