
for (let i = 0; i < 9; i++) {
    if (i === 5) {
        continue
    }
    document.write(i + '<br>')
}
document.write('<hr>')

for (let i = 0; i < 9; i++) {
    if (i === 5) {
        break
    }
    document.write(i + '<br>')
}
document.write('<hr>')

let inptu = ''
let count = 0
while (true) {
    input = prompt('請輸入end')
    count++
    if (input === 'end') {
        break
    }
}
document.write(count)