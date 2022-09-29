
// for (let i = 0; i < 10; i++) {
//     document.write(i + '<br>')
// }
// document.write('<hr>')
// for (let i = 1; i <= 10; i += 3) {
//     document.write(i + '<br>')
// }
document.write('<table border=1>')
for (let i = 1; i <= 9; i++) {
    document.write('<tr>')
    for (let j = 1; j <= 9; j++) {
        document.write(`<td>${i}x${j}=${i * j}</td>`)
    }
    document.write("</tr>")
}
document.write('</table>')