const UserEntity = require('../models/UserEntity');

exports.createUserEntity = async (req, res) => {
  try {
    const userEntity = new UserEntity(req.body);
    await userEntity.save();
    res.status(201).json(userEntity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllUserEntities = async (req, res) => {
  try {
    const userEntities = await UserEntity.find().populate('userId').populate('entityId');
    res.status(200).json(userEntities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserEntityById = async (req, res) => {
  try {
    const userEntity = await UserEntity.findById(req.params.id).populate('userId').populate('entityId');
    if (!userEntity) return res.status(404).json({ message: 'UserEntity not found' });
    res.status(200).json(userEntity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUserEntity = async (req, res) => {
  try {
    const userEntity = await UserEntity.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!userEntity) return res.status(404).json({ message: 'UserEntity not found' });
    res.status(200).json(userEntity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUserEntity = async (req, res) => {
  try {
    const userEntity = await UserEntity.findByIdAndDelete(req.params.id);
    if (!userEntity) return res.status(404).json({ message: 'UserEntity not found' });
    res.status(200).json({ message: 'UserEntity deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
