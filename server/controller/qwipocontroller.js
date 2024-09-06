const Customer = require('../model/model');

// Create a new customer
const createCustomer = async (req, res) => {
  try {
    const customerData = req.body;
    const customer = new Customer(customerData);
    await customer.save();
    res.status(201).send({ message: 'Customer Created Successfully', customer });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Get customer by ID
const getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    if (!customer) {
      return res.status(404).send({ message: 'Customer not found' });
    }
    res.status(200).send(customer);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Update customer information
const updateCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const customer = await Customer.findByIdAndUpdate(id, updatedData, { new: true, runValidators: true });
    if (!customer) {
      return res.status(404).send({ message: 'Customer not found' });
    }
    res.status(200).send({ message: 'Customer Updated Successfully', customer });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Delete customer
const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);
    if (!customer) {
      return res.status(404).send({ message: 'Customer not found' });
    }
    res.status(200).send({ message: 'Customer Deleted Successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// Search customer by name or phone
const searchCustomer = async (req, res) => {
  try {
    const { query } = req.query;
    const customers = await Customer.find({
      $or: [
        { firstName: new RegExp(query, 'i') },
        { lastName: new RegExp(query, 'i') },
        { phone: new RegExp(query, 'i') }
      ]
    });
    res.status(200).send(customers);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { createCustomer, getCustomerById, updateCustomer, deleteCustomer, searchCustomer };
