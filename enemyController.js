export default class EnemyController {

    enemyMap = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
        [2, 2, 2, 3, 3, 3, 3, 2, 2, 2]
    ];
    enemyRows = [];

    constructor(canvas) {
        this.canvas = canvas
    }

    draw(ctx) {}

    createEnemies() {
        this.enemyMap.forEach((row, rowIndex))
        // contiue here
    }
}