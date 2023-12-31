// Invoking a function in another function

const result = () => {
    const data  = getData()
    console.log(data)
    console.log("I'm result function")
};

const getData = () =>{
    let x = 12;
    let y =13;
    let z = x+y;
    return z
    console.log("I'm getData Function")
}

//invoke result 
result()