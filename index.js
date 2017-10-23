var exp=require('express');
var app=exp();
var mongoose=require("mongoose");
var config=require("./config/database");
var path=require('path');
mongoose.Promise=global.Promise;
mongoose.connect(config.uri,(err)=>{

	if(err){
		console.log("There was some error and that is ");

	}else{
		console.log("secret is"+config.secret);
		console.log("Successful Connection");
	}
});
app.use(exp.static(__dirname+'/client/dist'));
app.get('*',  (req,res)=> {
	res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

app.listen(8080,()=>{
	console.log("well awkward syntax");
});