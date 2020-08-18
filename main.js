const minCost = cost => {
    let arr = [];
    let minItem = 100;

    for (let i = 0; i < cost.length; i++) {
        for (let j = 0; j < cost[i].length; j++) {
            if (cost[i][j] < minItem && cost[i][j] != arr.slice(-1)[0]) {
                minItem = cost[i][j]
            }
        }
        arr.push(minItem)
        minItem = 100;
    }
    let minimumCost = `Minimum cost: ${arr.reduce((a, b) => a + b)}`
    return minimumCost
}
console.log(minCost([[1, 2, 3], [1, 2, 3], [3, 3, 1]]))