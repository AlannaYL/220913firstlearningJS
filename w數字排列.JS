
for (let i = 1; i <= 4; i++) {

    for (let j = 1; j <= 4; j++) {

        for (let k = 1; k <= 4; k++) {

            if (i != j && i != k && j != k)

                document.write(`${i}${j}${k}<br>`)
        }
    }
}