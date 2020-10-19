function areaShape(base, height, shape) {
    return shape === 'triangle' ? 0.5 * base * height : base * height;
    //return (shape === 'triangle' ? 0.5 : 1) * base * height;
}
module.exports = areaShape;