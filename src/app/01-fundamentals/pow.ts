export function pow(n: number, x: number=1 ) {
    let resultado;
    (n<0)? resultado = 0 : ((n===0)? resultado=1 : resultado=n**x)
    return resultado; 
}