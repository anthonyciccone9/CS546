//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals;
const uuid = require("node-uuid");

const create = async (name, type) => {
    if (!name) throw "You must provide a name for your animal";
    if (!type) throw "You must provide a type for the animal";
    const animalCollection = await animals();
    let newAnimal = {
      name: name,
      animalType: type,
      _id: uuid.v4(),
      likes: [],
      posts: []
    };
    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) throw "Could not add the animal";
    const newId = insertInfo.insertedId;
    const animal = await get(newId);
    return animal;
};
const get = async(id) => {
  if(!id) throw "Invalid parameters";
  const animalCollection = await animals();
  return animalCollection.findOne({_id: id});
};
const getAll = async () => {
  const animalCollection = await animals();
  return animalCollection.find().toArray();
};
const remove = async(id)=> {
    return animals().then(animalCollection => {
      return animalCollection.removeOne({ _id: id }).then(deletionInfo => {
        if (deletionInfo.deletedCount === 0) {
          throw `Could not delete animal with id of ${id}`;
        }
      });
    });
  };
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
};
const updateAnimal = async(id, upani) => {
  return get(id).then(currentAnimal => {
    let animalUpdateInfo = {
      name: upani.newName,
      animalType: upani.newType
    };

    let updateCommand = {
      $set: animalUpdateInfo
    };

    return animals().then(animalCollection => {
      return animalCollection.updateOne({ _id: id }, updateCommand).then(() => {
        return get(id);
      });
    });
  });
};
const updateAnimalPost = async(id, upani) => {
  return get(id).then(currentAnimal => {
    let animalUpdateInfo = {
      posts: upani.posts
    };

    let updateCommand = {
      $set: animalUpdateInfo
    };

    return animals().then(animalCollection => {
      return animalCollection.updateOne({ _id: id }, updateCommand).then(() => {
        return get(id);
      });
    });
  });
};
const likePost = async(aid, pid, postTitle) => {
  return this.get(aid).then(currentAnimal => {
    return animalCollection.updateOne(
      { _id: aid },
      {
        $addToSet: {
          likes: {
            id: pid,
            title: postTitle
          }
        }
      }
    );
  });
}
const unlikePost = async(aid, postId) => {
  return this.get(aid).then(currentAnimal => {
    return animalCollection.updateOne(
      { _id: aid },
      {
        $pull: {
          likes: {
            id: postId
          }
        }
      }
    );
  });
};

module.exports = {
  create,
  get,
  getAll,
  remove,
  rename,
  updateAnimal,
  updateAnimalPost,
  likePost,
  unlikePost
};
