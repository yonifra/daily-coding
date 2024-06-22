// Car Fleet - [MEDIUM]
// https://leetcode.com/problems/car-fleet/

function carFleet(target: number, position: number[], speed: number[]): number {
    const cars = position.map((pos, i) => ({ pos, time: (target - pos) / speed[i] })).sort((a, b) => a.pos - b.pos);
    let fleets = 0;
    let time = 0;

    for (let i = cars.length - 1; i >= 0; i--) {
        if (cars[i].time > time) {
            time = cars[i].time;
            fleets++;
        }
    }

    return fleets;
}