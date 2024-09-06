const express = require('express');
const router = express.Router();
const customerController = require('../controller/qwipocontroller');

// Create a new customer
router.post('/customers', customerController.createCustomer);

// Get customer by ID
router.get('/customers/:id', customerController.getCustomerById);

// Update customer
router.put('/customers/:id', customerController.updateCustomer);

// Delete customer
router.delete('/customers/:id', customerController.deleteCustomer);

// Search customers by name or phone
router.get('/customers/search', customerController.searchCustomer);

module.exports = router;
