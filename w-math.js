

let input = prompt('請輸入層數');
for (i = 1; i <= input; i++) {
    for (j = 1; j <= i; j++) {
        document.write(`${i * j}`)
    }
    document.write('<br>')
}
