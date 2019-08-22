import { multiply, add, subtract } from 'mathjs';

function createCuboid(aroundYSides, aroundXSides, width, height, length, createRing, createCuboidRing) {
  return [
    [[0,0,0], [width,0,0], [width, height, 0], [0, height, 0]],
    [[0,0,(-1 * length)], [0,0,0], [0, height, 0], [0, height, (-1 * length)]],
    [[width,0,(-1 * length)], [0,0,(-1 * length)], [0, height, (-1 * length)], [width, height, (-1 * length)]],
    [[width,0,0], [width,0,(-1 * length)], [width, height, -1 * length], [width, height, 0]],
    [[0,0,(-1 * length)], [width,0,(-1 * length)], [width, 0, 0], [0, 0, 0]],
    [[0,height,0], [width,height,0], [width, length, (-1 * length)], [0, height, (-1 * length)]]
  ]
}
export default createCuboid
