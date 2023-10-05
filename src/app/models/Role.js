const mongoose = require('mongoose');

const roleSchema = mongoose.Schema(
  {
    roleName: {
      type: String,
      required: [true, 'Please add role name'],
    },
    description: {
      type: String,
      required: [true, 'Please add description'],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model('Role', roleSchema);
