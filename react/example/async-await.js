const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/tss_new");

const Emp = mongoose.Schema({
    name : String,
    salary : Number,
    city : String
});
const Employee = mongoose.model("employee", Emp);

const C = mongoose.Schema({
    id : String,
    name : String,
    state : String
}, {collection : "city"});

const City = mongoose.model("city", C);


// Employee.find({ salary : 5000 }, (err, result1)=>{
//     var x = result1[0].city;
    
//     City.find({ name: x }, (err, result2)=>{
//         // console.log(result2);
//         var s = result2[0].state;
//         console.log(s);
//     })
// })

async function demo(){
    let result1 = await Employee.find({ salary : 5000});
    let result2 = await City.find({ name : result1[0].city });
    console.log(result2[0].state);
}

demo();


/*
    this._stu.getData().subscrite(result=>{
        console.log(result);
    })

    let result = await this._stu.getData().subscribe();





*/