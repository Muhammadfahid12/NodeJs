//setTimout 
setTimeout(() => {
    console.log("SetTimout Event")
}, 0);
//inspite of that setTimeout have 0 miliseconds time to run,it will run after all synchronous function will exccuute 
//first hello world will print for 100 times then callback() function will

for(let i = 0; i<100;i++)
{
    console.log("Hello world" , i+1)     
}



