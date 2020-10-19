function areaShape(base, height, shape) {
    return shape === 'triangle' ? 0.5 * base * height : base * height;
}
module.exports = areaShape;