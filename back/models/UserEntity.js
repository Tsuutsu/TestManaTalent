const mongoose = require('mongoose');

const userEntitySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  entityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Entity',
    required: true,
  },
});

module.exports = mongoose.model('UserEntity', userEntitySchema);
