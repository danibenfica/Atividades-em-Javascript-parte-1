function verificaPalindromo(string) {
    if (!string) return 'Essa string não existe!';

    return string.split("").reverse().join("") === string;
}

function verificaPalindromo2(string) {
    if (!string) return 'Essa string não existe!';

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
} 

console.log(verificaPalindromo2("asa"));