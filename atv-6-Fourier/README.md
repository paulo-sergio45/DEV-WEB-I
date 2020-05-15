## A formula geral da série é :   ![Alt text](https://github.com/paulo-sergio45/DEV-WEB-I/blob/master/atv-6-Fourier/formulagera.svg?raw=true "")


Para obter os termos a0, an, bn e necessário integrar a partir das fórmulas abaixo:



## formula termos a0 :     ![Alt text](https://github.com/paulo-sergio45/DEV-WEB-I/blob/master/atv-6-Fourier/formulaa0.svg?raw=true "")

## formula termos an :      ![Alt text](https://github.com/paulo-sergio45/DEV-WEB-I/blob/master/atv-6-Fourier/formulaan.svg?raw=true "")

## formula termos bn :     ![Alt text](https://github.com/paulo-sergio45/DEV-WEB-I/blob/master/atv-6-Fourier/formulabn.svg?raw=true "")

seguindo essa formula o proximo passo e definir a funçao e os intervalos ,neste caso estou usando exemplos do wikipedia abaixo.

 ![Alt text](https://github.com/paulo-sergio45/DEV-WEB-I/blob/master/atv-6-Fourier/SharedScreenshot.jpg?raw=true "")

Para o código gerar a sequência de Fourier e necessário alterar os valores da função geral que representa a0, an, ab que se encontra dentro do primeiro FOR representado abaixo:

``` // 1º = a0, 2º = an, 3º = bn
s[i] =( 1 )+( 0 )+( -1/i*Math.PI );```

Infelizmente não consegui passar através dos parâmetros, funções com variáveis indefinidas, estou trabalhando nisso, mas em quando ainda não tenho uma solução sendo essa a única forma que encontrei de gerar a sequência de Fourier sem gerar um programa ou código que faça integrações.

fonte: https://pt.wikipedia.org/wiki/S%C3%A9rie_de_Fourier
