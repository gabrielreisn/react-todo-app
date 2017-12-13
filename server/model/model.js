const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ==================================
// Todo - Schema
// ==================================

const todoSchema = new Schema(
  {
    text: {type: String, required: true},
    checked: {type: Boolean, required: true},
  },
  {timestamps: true} //creates fields createdAt / updatedAt
);

export const Todo = mongoose.model('Todo', todoSchema);
