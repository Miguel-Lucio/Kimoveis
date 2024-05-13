import { Category } from "../entities";
import { AppError } from "../errors";
import { TCategoryArrayReturn, TCategoryCreate } from "../interfaces";
import { categoriesRepository } from "../repositories";

export const createCategoryService = async (
  data: TCategoryCreate
): Promise<Category> => {
  const newCategory: Category = categoriesRepository.create(data);
  await categoriesRepository.save(newCategory);

  return newCategory;
};

export const readCategoriesService =
  async (): Promise<TCategoryArrayReturn> => {
    const categories: TCategoryArrayReturn = await categoriesRepository.find();

    return categories;
  };

export const readRealEstateByCategoryService = async (id: number) => {
  const category: Category | null = await categoriesRepository.findOne({
    where: { id: id },
    relations: { realEstate: true },
  });

  if (!category) throw new AppError("Category not found", 404);

  return category;
};
