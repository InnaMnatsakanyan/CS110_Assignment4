// Problem 1

function matrixProduct(mat1, mat2){
    let result = [];
    for(let i = 0; i < mat1.length; i++){
        result[i] = [];
        for(let j = 0; j < mat2.length; j++){
            sum = 0;
            for(k = 0; k < mat1.length; k++){
                sum += mat1[i][k] * mat2[k][j];
            }
            result[i][j] = sum;
        }
    }
    for(let x = 0; x < result.length; x++){
        console.log(`[${result[x]}]` + "\n");
    }
}


// Problem 2

function sumOfMatrices(mat1, mat2){
    let matrix3 = [];
    for(let i = 0; i < mat1.length; i++){
        matrix3[i] = [];
        matrix3.push([])
        for(let j = 0; j < mat1[i].length; j++){
            matrix3[i][j] = mat1[i][j] +mat2[i][j];
        }
        console.log(matrix3[i]);
    }
}


// Problem 3

function sumOfEachRow(mat){
    let array = []
    let sum = 0
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            sum += mat[i][j]
        }
        array.push(sum);
        sum = 0;
    }
    console.log(array)
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow 
}