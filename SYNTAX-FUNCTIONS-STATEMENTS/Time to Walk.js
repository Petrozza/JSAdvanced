function timeToWalk(steps, footPrint, speed) {
    const dist = footPrint * steps;
    let time = Math.round(dist / speed * 3.6);
    time += Math.floor(dist / 500) * 60;

    const seconds = time % 60;
    time -= seconds;
    time /= 60;
    const minutes = time % 60;
    time -= minutes;
    time /= 60;
    const hours = time;

    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

    function pad(num){
        if (num < 10) {
            return '0'+ num;
        }else{
            return num.toString();
        }
    }
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);