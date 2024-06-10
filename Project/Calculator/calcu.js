const display = document.getElementById("display")
var a = false;
var flag = false;
function act(input){
    if(input == '%'){
        a = true
        per(input);
        return;
    }
    if(input == 'AC')
        display.value = ''
    else if(input == 'DE')
        if(flag){
            display.value = ''
        }else if(display.value.toString().charAt(display.value.toString().length - 1) == '%'){
            a = false;
            display.value = display.value.toString().slice(0,-1)
        } else
            display.value = display.value.toString().slice(0,-1)
    else{
        if (input == '+' || input == '*' || input == '-' || input == '/' || input == '.' || input=='%') {
            var x = display.value.toString().charAt(display.value.toString().length - 1)
            if(x!=='' && x != '+' && x != '*' && x != '-' && x != '/' && x != '%' && x!='.'){
                display.value += input
            }
        }else
            display.value += input
    }
    flag = false
}
function per(input){
    var x = display.value.toString().charAt(display.value.toString().length - 1)
    if(x!=='' && x != '+' && x != '*' && x != '-' && x != '/' && x !='%' && x!='.'){
        display.value += input
    }
}
function answer(){
    flag = true;
    if(a){
        let str = display.value
        var i=0
        while(str[i] != '%') i++
        let x = parseFloat(str.substr(0, i))
        let y = parseFloat(str.substr(i+1,))
        display.value = x%y
        a = false;
    }
    else
        display.value = eval(display.value)
}
