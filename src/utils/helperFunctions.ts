import { Category, Feature } from "./types"


const removeDeletedData = (data: Feature[]) => {
    const active = data.filter((data) => !data.isDeleted)
    return active
}

export const removeDeprecatedData = (data: Category[]) => {
    const filteredData = data.filter((d) => !JSON.stringify(d).toLowerCase().includes('deprecated'))
    return filteredData
}

export const filterAndSortData = (
    { featureCategories, features }: 
    {featureCategories: Category[], features: Feature[]}
    ) => {
        const currentCategories = removeDeprecatedData(featureCategories)
        const currentFeatures = removeDeletedData(features)

        currentFeatures.sort((a, b) => a.displayName.localeCompare(b.displayName))
        currentCategories.sort((a, b) => a.sortOrder - b.sortOrder)

        return { currentCategories, currentFeatures }
}

export const getFeaturesBySearch = (search: string, features: Feature[]) => {
    const formattedFeaturesForSearch = features.map((f) => {
        return {id: f.sid.id, name: f.displayName, keywords: f.epKeywords}
    })

    const matches = formattedFeaturesForSearch.filter((f) => JSON.stringify(f).toLowerCase().includes(search.toLowerCase()))
    const matchIds = matches.map(m => m.id)

    return features.filter((f) => matchIds.includes(f.sid.id))
}