const express=require("express");
const app=express();
const https=require("https");
app.get("/",function(req,res){
    const url="https://api.openweathermap.org/data/2.5/weather?q=Vellore&appid=6d1fc3a79230c7db8032d8613de34adf&units=metric";
    https.get(url,(response)=>{
       response.on("data",(data)=>{
            const weather=JSON.parse(data);
            const temp=weather.main.temp;
            const place=weather.name;
            res.write(place);
           res.write("The Current Temperature in my place of Nepal is :"+temp);
           res.send();
        });
    });
})
app.listen(3001,()=>console.log("Ready!!")
);