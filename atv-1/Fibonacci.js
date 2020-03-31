function Fibonacci(n) {
 
            var i = 0, j = 1;
            for (var k = 1; k < n; k++) {
                j = i + j;
                i = j - i;
                console.log(j);
            }

            return j;
        }

        Fibonacci(17);
