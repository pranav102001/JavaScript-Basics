function solve(value){
    var num = [];
    var word =['fixed'];
    var result = "";
    for(var i =0;i<value.length;i++){
         num.push (parseFloat(value[i]).toFixed(2));
    }
    for(j=0;j<num.length-1;j++){
        if(Number(num[j])>Number(num[j+1])){
            word[j+1]= 'down';
        }else if(Number(num[j]) < Number(num[j+1])){
            word[j+1]= 'up';
        }
        else{
            word[j+1]= 'fixed';
        }
    }
    result = '\<table>' + '\n' + '\<tr><th>Price</th><th>Trend</th></tr>' + '\n';
    for(var k=0;k<num.length;k++){
     result +=  '\<tr><td>'  + num[k] + '\</td><td><img src="' + word[k] + '.png"/>' + '\</td></td>'+ '\n';

    }
    result += '\</table>';
    console.log(result);
}
solve(['36.333687987','36.567857','37345.019','354577.4','35.3569','35.001','364563.225']);
solve(['5','6','13']);