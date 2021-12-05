function circleArea(radius) {
  let area = parseInt(Math.PI * (radius ** 2));
  console.log("Circle area:", area);
}

function circleCircumference (radius) {
    let circum = 2*Math.PI*radius
    console.log("Circle circum ference:", circum)
}

module.exports = {
    circleArea,
    circleCircumference
}