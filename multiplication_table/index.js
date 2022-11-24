

for(var i = 1; i < 10; i++){
    let str = "";
    for (var j = 1; j <= i; j++){
        var result = i*j;
        str += i.toString()+ "*" + j.toString()+"="+result.toString()+" ";
    }
    console.log(str);
}