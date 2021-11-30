const radius = process.argv.slice(2)

function area(radius) {
    let resultArea = parseInt(Math.PI * (Math.pow(radius,2)))
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${resultArea}`)
}

area(radius)