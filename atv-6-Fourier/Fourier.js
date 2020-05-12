

function Fourier(n) {
    var s= [];

    for (let i = 1; i < n; i++) {
       
        // sequencia e igual  s = a0 + an + bn;
        s[i] = (2*Math.pow(Math.PI,2)/3) + Math.pow(-1,i)*(4/Math.pow(i,2)) + 0;
        
    }

    return s;
}
//supondo no intervalo de -pi a pi
// supondo f(x) = x^2
//a0 = (2*pi^2)/3
//an = -1^n * 4/n^2
//bn = 0

s = Fourier(25);
for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    
}
