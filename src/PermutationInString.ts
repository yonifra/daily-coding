function checkInclusion(s1: string, s2: string): boolean {
    const s1Map = new Map<string, number>();
    const s2Map = new Map<string, number>();

    for (let i = 0; i < s1.length; i++) {
        s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
        s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
    }

    for (let i = 0; i < s2.length - s1.length; i++) {
        if (isSameMap(s1Map, s2Map)) {
        return true;
        }

        s2Map.set(s2[i + s1.length], (s2Map.get(s2[i + s1.length]) || 0) + 1);
        s2Map.set(s2[i], s2Map.get(s2[i]) - 1);

        if (s2Map.get(s2[i]) === 0) {
        s2Map.delete(s2[i]);
        }
    }

    return isSameMap(s1Map, s2Map);
};

function isSameMap(map1: Map<string, number>, map2: Map<string, number>): boolean {
    if (map1.size !== map2.size) {
        return false;
    }

    for (const [key, value] of map1) {
        if (map2.get(key) !== value) {
        return false;
        }
    }

    return true;
}

console.log(checkInclusion("ab", "eid"));
console.log(checkInclusion("adc", "dcda"));
console.log(checkInclusion("pqzhi", "ghrqpihzybre"));