class World {
    constructor(map, biomesList) {
        this.map = map;
        this.biomes = biomesList;
        this.sections = [];
    }
    getSection(x, y) {
        if (x >= 0 && y >= 0 && x < this.sections[0].length && y < this.sections.length) {
            return this.sections[y][x];
        } else {
            return null;
        }
    }
}
