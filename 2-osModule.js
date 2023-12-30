//we can access os through modules
const os = require('os')

// This will give you info about system
const user = os.userInfo()
console.log(user)


// To know abut the system uptime
console.log(`systm uptime is ${os.uptime()} seconds`)

//to know more about system information

const metaData= {
    name :os.type(),
    release:os.release(),
    totalMem:os.totalmem,
}

console.log(`Name : ${metaData.name} , ReleaseDate: ${metaData.release} ,TotalMemory : ${metaData.totalMem} `)