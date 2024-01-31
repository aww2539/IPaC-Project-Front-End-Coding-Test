import { filterData } from "./helperFunctions"


export const getAndSetCategoriesAndFeatures = (setFeatures, setSelectedCategory, setCategories) => {
    fetch('./FeaturesEndpointResponse.json')
        .then(response => response.json())
        .then(({ data }) => {
          const { currentCategories, currentFeatures } = filterData(data)

          currentFeatures.sort((a, b) => a.displayName.localeCompare(b.displayName))
          currentCategories.sort((a, b) => a.sortOrder - b.sortOrder)

          setFeatures(currentFeatures)
          setSelectedCategory(currentCategories[0])
          setCategories(currentCategories)
        })
        .catch(error => console.trace(`Error fetching features: ${error}`))
  }