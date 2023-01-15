import express from 'express';
import controllers from './../controllers/userControllers.mjs';

const router = express.Router();

router.route('/').get(controllers.getAllUsers).post(controllers.createUser);

router
  .route('/:id')
  .get(controllers.getUserWithID)
  .patch(controllers.updateUserWithID)
  .delete(controllers.deleteUserWithID);

export default router;
