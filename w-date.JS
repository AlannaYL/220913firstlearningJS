let year = prompt('請輸入西元年')
let month = prompt('請輸入月')
let day = prompt('請輸入日')
let date = 0 //月分天數計算
let daily = "" //閏年加減

for (i = 1; i <= month - 1; i++) { if (i==2) { date +=28 } else if (i>= 8 && i % 2 != 0) {
    date += 30
    } else if (i < 8 && i % 2==0 && i !=2) { date +=30 } else { date +=31 } } if (year % 4==0) { if (year % 100 !=0 ||
        year % 400==0) { daily++ } else { daily==0 } }
        document.write(`你的出生日是西元${year}年${month}月${day}日，是西元${year}年的${date + parseInt(day) + daily}天`)