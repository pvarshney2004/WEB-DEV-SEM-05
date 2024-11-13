console.log("Start")
setTimeout(()=>{
    console.log('set Timeout');
},2000);
console.log("End")

const id = setInterval(()=>{
    console.log("Set Interval");
},2000);

// clearInterval(id);

setTimeout(()=>{
    clearInterval(id);
},2000);
