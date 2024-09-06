const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  pincode: String,
  isPrimary: { type: Boolean, default: false },
});

const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true},
  email: { type: String, required: true},
  addresses: [addressSchema],
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
