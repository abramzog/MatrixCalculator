var leftMatrix = document.getElementById('leftMatrix').getElementsByTagName('tbody')[0];
var rigthMatrix = document.getElementById('rightMatrix').getElementsByTagName('tbody')[0];
var form = document.getElementById('calc');
var operation = document.getElementById('operation');
var result = document.getElementById('result').getElementsByTagName('tbody')[0];

form.addEventListener('submit',function(event){
    if(operation.value == "--SELECT--"){
       alert("Please select operation!")
    }  
    else{
        if(operation.value == "Addition"){
            for(var i = 0; i< leftMatrix.rows.length; i++){
                for(var j = 0; j<leftMatrix.rows[i].cells.length;j++){
                    var leftMatrixCell = leftMatrix.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value;
                    var rightMatrixCell = rightMatrix.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value;
                    var resultCell = parseFloat(leftMatrixCell) + parseFloat(rightMatrixCell);
                    result.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value = resultCell;
                }
            }
        }
        else{
            if(operation.value == "Subtraction"){
                for(var i = 0; i< leftMatrix.rows.length; i++){
                    for(var j = 0; j<leftMatrix.rows[i].cells.length;j++){
                        var leftMatrixCell = leftMatrix.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value;
                        var rightMatrixCell = rightMatrix.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value;
                        var resultCell = parseFloat(leftMatrixCell) - parseFloat(rightMatrixCell);
                        result.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value = resultCell;
                    }
                }
            }
            else{
                if(operation.value == "Multiplication"){
                    var left = new Array(leftMatrix.rows.length);
                    var right = new Array(rightMatrix.rows.length);
                    var outcome = new Array(left.length);
                    for(var i = 0; i< left.length; i++){
                        left[i] = new Array(leftMatrix.rows[i].cells.length);
                    }
                    for(var i = 0; i< right.length; i++){
                        right[i] = new Array(rigthMatrix.rows[i].cells.length);
                        outcome[i] = new Array(rigthMatrix.rows[i].cells.length);
                    }
                    for(var i = 0; i< leftMatrix.rows.length; i++){
                        for(var j = 0; j<leftMatrix.rows[i].cells.length;j++){
                            left[i][j] = parseFloat(leftMatrix.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value);
                            right[i][j] = parseFloat(rightMatrix.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value);
                            outcome[i][j] = 0;
                        }
                    }
                   
                    for(var i = 0; i<outcome.length; i++){
                        for(var j = 0; j<outcome[i].length; j++){
                            for(var k = 0; k< left[i].length; k++){
                                outcome[i][j] += left[i][k]*right[k][j];
                            }
                            result.rows[i].cells[j].getElementsByClassName("matrixData").valueOf()[0].value = outcome[i][j];
                        }
                    }

                }
            }

        }
       
    } 
    event.preventDefault();
});
