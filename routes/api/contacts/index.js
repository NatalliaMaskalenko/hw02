import { Router } from 'express';
import { getContacts, getContactsById, addContact, removeContact, updateContact } from '../../../controllers/contacts';
import { validateCreate, validateUpdate, validateId, validateUpdateFavorite, validateQuery } from './validation.js';
const router = new Router();

router.get('/', validateQuery, getContacts);

router.get('/:id', validateId, getContactsById);

router.post('/', validateCreate, addContact);

router.delete('/:id', validateId, removeContact);

router.put('/:id', validateId, validateUpdate, updateContact);

router.patch('/:id/favorite', validateId, validateUpdateFavorite, updateContact);

export default router;
