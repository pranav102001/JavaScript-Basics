function solve(value) {
    var numbers = [];
    var sum=0;
    var maxSum = 0;
    var index;
    var result = "";
    var isEmpty = true;
    for (i = 2, j = 0; i < value.length; i++, j++) {
        numbers[j] = value[i].split(/[A-Za-z<>/]+/).filter(Boolean);
    }
    for(var r=0;r<numbers.length;r++){
        for(c=0;c<numbers[r].length;c++){
            if(numbers[r][c]!=="-"){
                isEmpty=false;
            }
        }
    }
    if(isEmpty){
        console.log("no data");
        return;
    }
    for(var ro=0;ro<numbers.length;ro++){
        for(co=0;co<numbers[ro].length;co++){
            if(numbers[ro][co]=="-"){
                numbers[ro][co]='0';
            }
        }
    }


    for(m=0;m<numbers.length;m++){
        for(k=0;k<numbers[m].length;k++){

            sum+= Number(numbers[m][k]);
        }
        if(sum>maxSum){
            maxSum=sum;
            index=m;

        }
        sum=0;
    }
    for (l = 0; l < numbers[index].length; l++) {

        if (l == 0) {
            if(numbers[index][l]==0){
                continue;
            }else{
                result += numbers[index][l] + " ";
            }

        } else {
            if(numbers[index][l]==0){
                continue;
            }else {
                result +="+ " + numbers[index][l] + " ";
            }
        }

    }

    console.log(maxSum + " " + "=" + " " + result);

}


solve(["\<table>",
    "\<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
    "\<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>",
    "\<tr><td>Sofia</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>",
    "\<tr><td>Sofia</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>",
    "\<tr><td>Sofia</td><td>-</td><td>24.3</td><td>-</td></tr>"]);

//solve(["\<table>",
//    "\<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>",
//    "\<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>"]);


