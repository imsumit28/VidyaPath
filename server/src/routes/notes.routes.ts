import { Router } from 'express';
import { getNote, saveNote, deleteNote } from '../controllers/notes.controller.js';

const router = Router();

router.get('/:userId/:topicId', getNote);
router.post('/:userId/:topicId', saveNote);
router.delete('/:userId/:topicId', deleteNote);

export default router;
