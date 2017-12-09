const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ==================================
// Search-Parameters
// ==================================

const todoSchema = new Schema(
    {
      text: {type: String},
      checked: {type: Boolean},
    },
    {timestamps: true}
  );
  
  module.exports.Todo = mongoose.model('Todo', todoSchema);