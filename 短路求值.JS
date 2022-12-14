
// 回傳第一個Boolean()判斷是true的值
let x = null || undefined || 'apple' || 123
console.log(x)

// 回傳第一個Boolean()判斷是false的值
let y = 123 && 'abc' && NaN && false
console.log(y)

// 回傳第一個Boolean()不是null也不是false的值
let z = 123 ?? false ?? NaN ?? undefined
console.log(z)

// 如果不用 || 的話，if會寫很長
let a = null
let b = undefined
let c = NaN
let d = false
let e
if (a) {
    e = a
} else if (b) {
    e = b
} else if (c) {
    e = c
} else {
    e = d
}