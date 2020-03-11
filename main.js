var leftMatrix = document.getElementById('leftMatrix').getElementsByTagName('tbody')[0];
var rigthMatrix = document.getElementById('rightMatrix').getElementsByTagName('tbody')[0];
var form = document.getElementById('calc');
var operation = document.getElementById('operation');

form.addEventListener('submit',function(event){
    
    for(var i = 0; i< leftMatrix.rows.length; i++){
        for(var j = 0; j<leftMatrix.rows[i].cells.length;j++){
            console.log(leftMatrix.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value);
        }
    }
    var left = [[]];
    
    if(operation.value == "--SELECT--"){
       alert("Please select operation!")
    }  
    else{
       if(operation.value == "Addition"){
        for(var i = 0; i< leftMatrix.rows.length; i++){
            for(var j = 0; j<leftMatrix.rows[i].cells.length;j++){
                var leftMatrixCell = leftMatrix.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value;
                var rightMatrixCell = rightMatrix.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value;
                console.log(leftMatrix.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value);
            }
        }
       }
       else{
           if(operation.value == "Subtraction"){

           }
           else{
               if(operation.value == "Multiplication"){

               }
           }

       }
       
    } 
    

    event.preventDefault();
});
