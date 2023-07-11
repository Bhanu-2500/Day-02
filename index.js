//Set default value as 0 in input text area
document.getElementById("display").value = 0;

//Listen to the key press events
document.addEventListener('keydown', function(event) {
    console.log(event.keyCode);
    if(event.shiftKey){
            if(event.keyCode=='187'){
                inputElement('+');
            }else if(event.keyCode=='189'){
                inputElement('-'); 
            }else if(event.keyCode=='189'){
                inputElement('*'); 
            }else if(event.keyCode=='56'){
                inputElement('*'); 
            }
        }
    else{
        switch(event.keyCode){
        
            case 49:
                inputElement('1');
                break;
            case 50:
                inputElement('2');
                break;
            case 51:
                inputElement('3');
                break;
            case 52:
                inputElement('4');
                break;
            case 53:
                inputElement('5');
                break;
            case 54:
                inputElement('6');
                break;
            case 55:
                inputElement('7');
                break;
            case 56:
                inputElement('8');
                break;
            case 57:
                inputElement('9');
                break;
            case 48:
                inputElement('0');
                break;
            case 191:
                inputElement('/');
                break;
            case 8:
                deleteElement();
                break;
            case 13:
                calc();
                break;
            }    
    }
});

function inputElement(value){
    if(document.getElementById("display").value=='0'){
        document.getElementById("display").value = value;
    }else{
        document.getElementById("display").value += value;
    }
}

function allClear(){
    document.getElementById("display").value =0;
}
function deleteElement(){
    if(document.getElementById("display").value=='0' ||document.getElementById("display").value.slice(0,-1)==''){
        document.getElementById("display").value = 0;
    }else{
        var element = document.getElementById("display").value;
        document.getElementById("display").value = element.slice(0,-1);
        }

}
function calc(){
    var finalVal = eval(document.getElementById("display").value);
    document.getElementById("display").value = finalVal;

}
