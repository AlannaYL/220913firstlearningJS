let input = prompt('請輸入層數')
for (let i = 1; i <= input; i++) { for (let j=1; j <=input - i; j++) { document.write(`☆`) } for (let k=1; k <=i + (i -
    1); k++) { document.write(`★`) } for (let j=1; j <=input - i; j++) { document.write(`☆`) } document.write(`<br>`)
    }