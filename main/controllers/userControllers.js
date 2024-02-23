const Contact = require('../models/userModels')


const addContact = async (req, res) => {
    if(!req.body.firstname && req.body.lastname && !req.body.email && !req.body.age) {
        res.status(400)
        throw new Error('Please provide a text')
    }
    const contact = await Contact.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        age: req.body.age,
    })
    res.status(200).json(contact)
};


const getContacts = async (req, res) => {
    const contacts = await Contact.find()
    if(!contacts) {
        res.status(404)
        throw new Error('No contacts found')
    }
    res.status(200).json(contacts)
}

const getSingleContact = async (req, res) => {
    const contacts = await Contact.findById(req.params.id);
    if (!contacts) {
        res.status(404);
        throw new Error(`${req.params.id} is cannot be found or does not exist`);
    }

    res.status(200).json(Contact);
};

const getOver18 = async (req, res) => {
        const contacts = await Contact.find({ age: { $gt: 18 } });
        if (!contacts) {
            res.status(404);
            throw new Error('No contacts found');
        }

        res.status(200).json(contacts);
};

const getOver18andAh = async (req, res) => {
    const contact = await Contact.find({ 
        age: { $gt: 18 },
        $or: [
            { firstName: /ah/i },
            { lastName: /ah/i }
        ]
    });
    if (!contact) {
        res.status(404);
        throw new Error('No contacts found');
    }
    res.status(200).json(contact);
};

const updateContact = async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(400)
        throw new Error('Contact not found')
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedContact)
};

const deleteUnder5 = async (req, res) => {
    const contact = await Contact.deleteMany({ age: { $lt: 5 } });
    if (!contact) {
        res.status(404);
        throw new Error('No contacts found');
    }
    res.status(200).json({ message: `${contact.deletedCount} contacts aged under 5 deleted successfully.` });
}

module.exports = {
    addContact,
    getContacts,
    getSingleContact,
    getOver18,
    getOver18andAh,
    updateContact,
    deleteUnder5
}