import { SetStateAction } from "react"
import { filterAndSortData } from "./helperFunctions"
import { Feature, Category } from "./types"

type SetState<Type> = { (value: SetStateAction<Type>): void; (arg0: Type): void };

export const getAndSetCategoriesAndFeatures = async (
  setFeatures: SetState<Feature[]>,
  setSelectedCategory: SetState<Category | undefined>,
  setCategories: SetState<Category[]>
) => {
  try {
  const response = await fetch('./FeaturesEndpointResponse.json')
  const { data } = await response.json()
  const { currentCategories, currentFeatures } = filterAndSortData(data)

  setFeatures(currentFeatures)
  setSelectedCategory(currentCategories[0])
  setCategories(currentCategories)
  } catch (error) {
    console.trace(`Error fetching categories/features: ${error}`)
  }
}