const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals;
const ObjectId = require('mongodb').ObjectId;

const get = async(id) => {
  if(!id) throw "Invalid parameters";
  const animalCollection = await animals();
  return animalCollection.findOne({_id: id});
}

const getAll = async () => {
  const animalCollection = await animals();
  return animalCollection.find().toArray();
}

const create = async (name, type) => {
    if (!name) throw "You must provide a name for your animal";
    if (!type) throw "You must provide a type for the animal";
    const animalCollection = await animals();
    let newAnimal = {
      name: name,
      type: type
    };
    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) throw "Could not add the animal";
    const newId = insertInfo.insertedId;
    const animal = await get(newId);
    return animal;
}

const remove = async (id) => {
  id = ObjectId(id);
  if(!id) throw "Invalid parameters";
  const animalCollection = await animals();
  deletionInfo = await animalCollection.removeOne({_id: id});
  if(deletionInfo === 0){
    throw "Could not delete animal with id of ${id}"
  }
}

const rename = async (id, name) => {
  id = ObjectId(id);
  if(!id) throw "Invalid parameters.";
  if(!name) throw "You must provide a name for your animal.";
  const animalCollection = await animals();
  const newani = {$set: {name: name }};
  const updatedInfo = await animalCollection.updateOne({_id: id}, newani);
  if(updatedInfo.modifiedCount === 0){
    throw "Could not update animal successfully";
  }
}

module.exports = {
  create,
  get,
  getAll,
  remove,
  rename
};
