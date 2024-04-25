"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes = [];
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
    }
    addCloth(cloth) {
        if (this.clothes.length >= this.capacity) {
            return;
        }
        this.clothes.push(cloth);
    }
    removeCloth(color) {
        const clothToRemove = this.clothes.find((cloth) => cloth.color === color);
        const index = this.clothes.indexOf(clothToRemove);
        if (index < 0) {
            return false;
        }
        this.clothes.splice(index, 1);
        return true;
    }
    getSmallestCloth() {
        let output = this.clothes[0];
        this.clothes.forEach((cloth) => {
            if (cloth.size < output.size) {
                output = cloth;
            }
        });
        return output;
    }
    getCloth(color) {
        return this.clothes.find((cloth) => cloth.color === color);
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        let output = `${this.type} magazine contains:\n`;
        this.clothes
            .sort((a, b) => a.size - b.size)
            .forEach((cloth) => (output += cloth.toString() + "\n"));
        return output;
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map