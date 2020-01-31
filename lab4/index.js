//Author: Anthony Ciccone
//I pledge my honor that I have abided by the Stevens Honor System. aciccone

const animals = require("./data/animals");
const connection = require("./data/mongoConnection");

async function main() {
    const sasha = await animals.create("Sasha", "Dog");
    console.log(sasha);
    const lucy = await animals.create("Lucy", "Dog");
    console.log(await animals.getAll());
    const duke = await animals.create("Duke", "Walrus");
    console.log(duke);
    const sashrename = await animals.rename(sasha._id, "Sashita");
    console.log(await animals.get(sasha._id));
    const sashremove = await animals.remove(lucy._id);
    console.log(await animals.getAll());

    const db = await connection();
    await db.serverConfig.close();

}

main().catch(e => console.log(e));
