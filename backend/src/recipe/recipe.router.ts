import * as express from 'express';

import { RecipeController } from './recipe.controller';
import { methodNotAllowed } from '../errors/methodNotAllowed';
const router = express.Router();
router.route('/').get(RecipeController.list).all(methodNotAllowed);
router.route('/:recipe_id').get(RecipeController.read).all(methodNotAllowed);
export const recipeRouter = router;
