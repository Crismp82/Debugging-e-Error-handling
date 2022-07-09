function validaArray(arr,num) {
    try {
        if (!arr && !num) throw new ReferenceError( ' Envie parâmetros ' );

        if (typeof arr !== 'object') 
            throw new TypeError('Array precisa ser tipo Object');

        if (typeof num !== 'number')
            throw new TypeError('num precisa ser tipo number');

        if (arr.length !== num) throw new RangerError('Tamanho inválido');

        return arr;
    }
         
    catch (error) {
        if (error instanceof ReferenceError) {
            console.log( " Este erro é um ReferenceError")
            console.log(error.message)

        } else  if ( error instanceof TypeError) {
            console.log( " Este erro é um typeError")
            console.log(error.message)
        }
        else  if ( error instanceof RangeError) {
            console.log( " Este erro é um RangeError")
            console.log(error.message)
        } else {
            console.log( ' Erro desconhecido:' + error);
        }
    }

}
console.log (validaArray());
console.log (validaArray(5, 6));
console.log (validaArray([],'a'));
console.log (validaArray([], 3));
console.log (validaArray([1,2,3], 3));
