//I pledge my honor that I have abided by the Stevens Honor System. aciccone
const mongoCollections = require("./mongoCollections");
const posts = mongoCollections.posts;
const animals = require("./animals");
const uuid = require("node-uuid");

const getAllPosts = async(id) => {
  const postCollection = await posts();
  return await postCollection.find({}).toArray();
}
const getPostsByTag = async(tag)=> {
  if (!tag) throw "No tag provided";

  const postCollection = await posts();
  return await postCollection.find({ tags: tag }).toArray();
}
const getPostById = async(id) => {
  const postCollection = await posts();
  const post = await postCollection.findOne({ _id: id });
  if (!post) throw "Post not found";
  return post;
}
const addPost = async(title, content, posterId)=> {
  if (typeof title !== "string") throw "No title given!";
  if (typeof content !== "string") throw "No content given!";
  const postCollection = await posts();
  let animalThatPosted = await animals.get(posterId);
  const newPost = {
    _id: uuid.v4(),
    title: title,
    author: {
      id: posterId,
      name: animalThatPosted.name
    },
    content: content
  };
  const newInsertInformation = await postCollection.insertOne(newPost);
  const newId = newInsertInformation.insertedId;
  animalThatPosted.posts.push(newPost);
  animals.updateAnimalPost(posterId, animalThatPosted);
  return await getPostById(newId);
}
const removePost = async(id) => {
  const postCollection = await posts();
  const deletionInfo = await postCollection.removeOne({ _id: id });
  if (deletionInfo.deletedCount === 0) {
    throw `Could not delete post with id of ${id}`;
  }
}
const updatePost = async(id, upposti) => {
  return getPostById(id).then(currentPost => {
    let postUpdateInfo = {
      title: upposti.newTitle,
      content: upposti.newContent
    };

    let updateCommand = {
      $set: postUpdateInfo
    };

    return posts().then(postCollection => {
      return postCollection.updateOne({ _id: id }, updateCommand).then(() => {
        return getPostById(id);
      });
    });
  });
}
const renameTag = async(oldTag, newTag) => {
  let findDocuments = {
    tags: oldTag
  };

  let firstUpdate = {
    $pull: oldTag
  };

  let secondUpdate = {
    $addToSet: newTag
  };

  const postCollection = await posts();
  await postCollection.updateMany(findDocuments, firstUpdate);
  await postCollection.updateMany(findDocuments, secondUpdate);

  return await this.getPostsByTag(newTag);
}

module.exports = {
  getAllPosts,
  getPostsByTag,
  getPostById,
  addPost,
  removePost,
  updatePost,
  renameTag
}
