const Entity = require('../models/Entity');

exports.createEntity = async (req, res) => {
  try {
    const entity = new Entity({ name: req.body.name });
    await entity.save();
    res.status(201).json(entity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllEntities = async (req, res) => {
  try {
    const entities = await Entity.find();
    res.status(200).json(entities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEntityById = async (req, res) => {
  try {
    const entity = await Entity.findById(req.params.id);
    if (!entity) return res.status(404).json({ message: 'Entity not found' });
    res.status(200).json(entity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEntity = async (req, res) => {
  try {
    const entity = await Entity.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!entity) return res.status(404).json({ message: 'Entity not found' });
    res.status(200).json(entity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEntity = async (req, res) => {
  try {
    const entity = await Entity.findByIdAndDelete(req.params.id);
    if (!entity) return res.status(404).json({ message: 'Entity not found' });
    res.status(200).json({ message: 'Entity deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
