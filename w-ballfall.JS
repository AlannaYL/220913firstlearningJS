
// 反彈
let meter = 100
// 距離
let distance = 0
for (let i = 1; i <= 10; i++) {
    meter /= 2
    distance += (meter * 2)
    document.write(`當球第${i}落地時，高度一共反彈${meter}，距離共經過${distance + 100 - meter * 2}<br>`)
}