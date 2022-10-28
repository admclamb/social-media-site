import { Request, Response, NextFunction } from 'express';
import { RecipeService } from './recipe.service';
import { Recipe } from '../ts/interfaces/recipeInterface';
import { asyncErrorBoundary } from '../errors/asyncErrorBoundary';
export class RecipeController {
  private static async recipeExist(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { recipe_id }: { recipe_id: string } = req.body;
    if (recipe_id) {
      const foundRecipe: Recipe = await RecipeService.read(recipe_id);
      if (foundRecipe) {
        res.locals.recipe = foundRecipe;
        return next();
      }
    }
    return next({
      status: 404,
      message: 'Recipe not found',
    });
  }

  public static async list(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.status(203).json({ data: await RecipeService.list() });
  }

  public static async read(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    asyncErrorBoundary(await RecipeController.recipeExist(req, res, next));
    const { recipe } = res.locals;
    console.log('recipe: ', recipe);
    res.status(203).json({ data: recipe });
  }
  public static create() {}

  public static destroy() {}
}
