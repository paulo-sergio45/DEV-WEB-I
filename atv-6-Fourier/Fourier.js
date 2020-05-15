

function Fourier(n) {
    var s= [];

    for (let i = 1; i < n; i++) {
       
        //onde deve ser alterado sendo
        // 1 = a0
        // 2 = an
        // 3 = bn
        //o resultado da sequencia e igual  s[i] = a0 + an + bn;
        // n = i
        
        s[i] = 1 + 0 + -1/i*Math.PI ;
        
    }

    return s;
}
//supondo no intervalo de 0 a T
// supondo f(x) = A*x/T
// onde T=1 e A=1
// a integracao dos termos ficara igual a:
//a0 = A
//an = 0
//bn = -A/n*pi

s = Fourier(100);

for (let i = 1; i < s.length; i++) {
    console.log(s[i]);
    
}
