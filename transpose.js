var matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function transpose(matrix){
    const result = Array.from({length:matrix[0].length}, () => new Array(matrix.length))

        for(let r = 0; r < matrix[0].length; r++){
            for(let c = 0; c < matrix.length; c++){
                result[r][c] = matrix[c][r]
        }}
        return result
}

const transposeMatrix = transpose(matrix)
console.log(transposeMatrix)