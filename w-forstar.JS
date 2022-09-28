
let input = prompt('請輸入層數');
for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(`★`)
    }
    document.write('<br>')
}