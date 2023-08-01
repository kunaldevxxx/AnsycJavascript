/// User Will Ask For A Number 0 se 9 if the number is below 5 resolve if not reject

var ans = new Promise((res,rej)=>{
    var n = Math.floor(Math.random()*10);
    if (n < 5) {
        return res();
    }
    else{
        return rej();
    }
})
ans.then(function(){
    console.log("Below");
})
.catch(function(){
    console.log("Above");
})

// sabse pehle ghar pe aao ///////////promise 1
// gate kholo aur gate lagao ////if resolved then this promise made 
//khana pakao khana khao //////// if resolved then this this promise made
//sojao kyoki tum thak gaye ho //////////// if resolved then this this promise made
//promise chaining example
var newas= new Promise((res,rej)=>{
    return res("sabse pehle ghar pe aao")
})
const p9=newas.then(function(data){
    console.log(data);
return  new Promise(function (res,rej){
        return res("gate kholo and gate lagao");
    })
})
var p10=p9.then(function(data){
    console.log(data);
return  new Promise(function (res,rej){
        return res("khana pakao khana khao");
    })
})
p10.then(function(data){
    console.log(data);
return  new Promise(function (res,rej){
        return res("sojao kyoki tum thak gaye ho");
    })
})


/////async code basic example  dekho jab bhi koi code asyc hai toh aapko uske 
////liye wait karna padta hai kyoki humein nahi pata uska answer kab aayega

function abcd(){

    fetch(`https://randomuser.me/api/`)
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data)
    })
}
async function abcd2(){
    let raw=await fetch(`https://randomuser.me/api/`);
    let ans2=await raw.json();
    console.log(ans2);
}
abcd();
abcd2();