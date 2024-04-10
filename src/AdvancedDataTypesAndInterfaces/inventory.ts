interface Hero {
    Hero: string,
    level: number,
    items: string[];
}


function inventory(input: string[]): void {
    const output: Hero[] = [];
    input.forEach(item => {
        const currItem = item.split(' / ');
        output.push({
            Hero: currItem[0],
            level: Number(currItem[1]),
            items: currItem[2].split(', ')
        })

    })
    const sortedOutput = output.sort((a, b) => a.level - b.level);
    sortedOutput.forEach(hero => console.log(`Hero: ${hero.Hero}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`));

}

inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])


// INPUT
//      [

//     'Isacc / 25 / Apple, GravityGun',

//     'Derek / 12 / BarrelVest, DestructionSword',

//     'Hes / 1 / Desolator, Sentinel, Antara'

//     ]
//OUTPUT
// Hero: Hes
//  level => 1
//  items => Desolator, Sentinel,Antara
//  Hero: Derek
//  level => 12
//  items => BarrelVest, DestructionSword
//  Hero: Isacc
//  level => 25
//  items => Apple, GravityGun