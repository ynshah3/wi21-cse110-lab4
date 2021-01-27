function whatsTheTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(whatsTheTime, 1000);