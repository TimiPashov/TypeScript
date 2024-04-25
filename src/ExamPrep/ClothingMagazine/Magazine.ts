import { Cloth } from "./Cloth";
import { ClothType } from "./types/Cloth";

export class Magazine {
  type: string;
  capacity: number;
  clothes: ClothType[] = [];
  constructor(type: string, capacity: number) {
    this.type = type;
    this.capacity = capacity;
  }

  addCloth(cloth: ClothType): void {
    if (this.clothes.length >= this.capacity) {
      return;
    }
    this.clothes.push(cloth);
  }

  removeCloth(color: string): boolean {
    const clothToRemove: ClothType | undefined = this.clothes.find(
      (cloth) => cloth.color === color
    );
    const index = this.clothes.indexOf(clothToRemove!);
    if (index < 0) {
      return false;
    }
    this.clothes.splice(index, 1);
    return true;
  }

  getSmallestCloth(): ClothType {
    let output: ClothType = this.clothes[0];
    this.clothes.forEach((cloth) => {
      if (cloth.size < output.size) {
        output = cloth;
      }
    });
    return output;
  }

  getCloth(color: string): ClothType | undefined {
    return this.clothes.find((cloth) => cloth.color === color);
  }

  getClothCount(): number {
    return this.clothes.length;
  }

  report(): string {
    let output = `${this.type} magazine contains:\n`;
    this.clothes
      .sort((a, b) => a.size - b.size)
      .forEach((cloth) => (output += cloth.toString() + "\n"));
    return output;
  }
}
