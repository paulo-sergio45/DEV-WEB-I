

function Fourier(n) {
    var s= [];

    for (let i = 1; i < n; i++) {
       
        // sequencia e igual  s = a0 + an + bn;
        s[i] = 1 + 0 + -1/i*Math.PI ;
        
    }

    return s;
}
//supondo no intervalo de 0 a T
// supondo f(x) = A*x/T
// onde T=1 e A=1
//a0 = A
//an = 0
//bn = -A/n*pi

s = Fourier(100);

for (let i = 1; i < s.length; i++) {
    console.log(s[i]);
    
}
