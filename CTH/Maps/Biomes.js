function getBiomeFromKey(key) {
    for (var i = 0; i != biomes.length; i++) {
        if (biomes[i][0] == key) {
            return biomes[i];
        }
    }
    return null;
}

function getBiomeIndexFromKey(key) {
    for (var i = 0; i != biomes.length; i++) {
        if (biomes[i][0] == key) {
            return i;
        }
    }
    return null;
}

function getMostUsedBiome(y) {
    validBiomes = [];
    for (var i = 0; i != biomes.length; i++) {
        if (biomes[i][2] <= y) {
            validBiomes.push(biomes[i]);
        }
    }
    for (var i = 0; i != validBiomes.length; i++) {
        count = 0;
        for (var i1 = 0; i1 != validBiomes.length; i1++) {
            if (validBiomes[i] != validBiomes[i1]) {
                if (validBiomes[i][4] >= validBiomes[i1][4]) {
                    count++;
                }
            }
        }
        if (count == validBiomes.length - 1) {
            return validBiomes[i];
        }
    }
}

function getLeastUsedBiome(y) {
    validBiomes = [];
    for (var i = 0; i != biomes.length; i++) {
        if (biomes[i][2] <= y) {
            validBiomes.push(biomes[i]);
        }
    }
    for (var i = 0; i != validBiomes.length; i++) {
        count = 0;
        for (var i1 = 0; i1 != validBiomes.length; i1++) {
            if (validBiomes[i] != validBiomes[i1]) {
                if (validBiomes[i][4] <= validBiomes[i1][4]) {
                    count++;
                }
            }
        }
        if (count == validBiomes.length - 1) {
            return validBiomes[i];
        }
    }
}

var biomes = [
    [
        "X", //key
        "20", //max enemies in biome
        "0", //y level biome can be generated from
        "1", //enemy difficulty in biome
        0, //total instances of biome in world
        "Graphics/Terrain/Grass/Grass.png", //biome ground
    ],
    [
        "0", //key
        "15", //max enemies in biome
        "2", //y level biome can be generated from
        "2", //enemy difficulty in biome
        0, //total instances of biome in world
        "Graphics/Terrain/Grass/Grass.png", //biome ground
    ],
    [
        "1", //key
        "8", //max enemies in biome
        "2", //y level biome can be generated from
        "1", //enemy difficulty in biome
        0, //total instances of biome in world
        "Graphics/Terrain/Grass/Grass.png", //biome ground
    ],
]
