/*function demo(cb){
    setTimeout(()=>{
        console.log("hello");
        cb();
    }, 1000)
}

demo(()=>{
    console.log("welcome");
});
*/
async function demo(){
    await setTimeout(()=>{
        console.log("hello");
        
    }, 1000)
}


demo();
console.log("welcome");

