const fs = require ("fs");
fs.writeFile("student.txt","Hello Students!", (err)=>{
    if(err){
        console.log("error creating file:",err);
        return;
    }
    console.log("File created successfully!");
});