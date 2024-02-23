const express = require('express');
const router = express.Router();
const {
    addContact,
    getContacts,
    getSingleContact,
    getOver18,
    getOver18andAh,
    updateContact,
    deleteUnder5
} = require('../controllers/userControllers');


router.post('/', addContact)
router.get('/', getContacts);
router.get('/:id', getSingleContact); 
router.get('/over18', getOver18); 
router.get('/over18andAh', getOver18andAh); 
router.put('/:id', updateContact);
router.delete('/:id', deleteUnder5);


module.exports = router;
