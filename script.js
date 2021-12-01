function getHistory(){
    return document.getElementById("history-value").innerText;
}
//alert(getHistory());
function printHistory(num){
    document.getElementById('history-value').innerText=num;
}
//printHistory('1+2*5');
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==''){
        document.getElementById('output-value').innerText=num;
    }
    else{
        document.getElementById('output-value').innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=='-'){
        return '';
    }
    var n=Number(num);
    var value=n.toLocaleString('en');
    return value;
}

//printOutput('23556');
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
//alert(reverseNumberFormat(getOutput()));
var operator=document.getElementsByClassName('operator');
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        //alert('The operator clicked:'+this.id);
        if(this.id=="clear"){
            printHistory('');
            printOutput('');
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
    });
}
var number=document.getElementsByClassName('number');
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        //alert('The number clicked:'+this.id);
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}