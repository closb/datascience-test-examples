function truckTour(petrolpumps) {
    let i = 0;
    let j = 0;
    let n = petrolpumps.length;
    let petrol = 0;
    while (i < n) {
        petrol += petrolpumps[j][0] - petrolpumps[j][1];
        if (petrol < 0) {
            i = j + 1;
            j = i;
            petrol = 0;
        } else {
            j = (j + 1) % n;
            if (i === j) {
                return i;
            }
        }
    }
}

console.log(truckTour([[1, 5], [10, 3], [3, 4]]));
