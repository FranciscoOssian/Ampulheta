const prompt = require('prompt-sync')();

const getMatriceNN = (n) => {
    const temp = []
    for(let i = 0; i <= n; ++i){
        line = []
        for(let j = 0; j <= n; ++j){
            line.push(' ')
        }
        temp.push(line)
    }
    return temp
}

const printMatrice = (matrice, len) => {
    for(let i = 0; i <= len; ++i){
        let line = ''
        for(let j = 0; j <= len; ++j){
            line = line + (matrice[i][j] !== ' ' ? matrice[i][j] : ' ')
        }
        console.log(line)
    }
}


let n = prompt('N = ') - 1;

const matrice = getMatriceNN(n)

for(let i = 0; i <= n; ++i){
    matrice[i][0]   = `#`
    matrice[0][i]   = `#` 
    matrice[i][n]   = `#`
    matrice[n][i]   = `#`
    
    matrice[i][i]   = `#`
    matrice[n-i][i] = `#`
}

for(let i = 0; i <= n; ++i){
    for(let j = 0; j <= n; ++j){
        if( i+j <= n && j-i > 0 )
            matrice[i][j] = `#`
    }
}

printMatrice(matrice, n)
console.log('n = ', n)
