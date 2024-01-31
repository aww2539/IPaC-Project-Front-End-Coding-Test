const removeDeletedData = (data) => {
    const active = data.filter((data) => !data.isDeleted)
    return active
}

export const removeDeprecatedData = (data) => {
    const filteredData = data.filter((d) => !JSON.stringify(d).toLowerCase().includes('deprecated'))
    return filteredData
}

export const filterData = ({ featureCategories, features }) => {
    const currentCategories = removeDeprecatedData(featureCategories)
    const currentFeatures = removeDeletedData(features)
    return { currentCategories, currentFeatures }
}

export const getFeaturesBySearch = (search, features) => {
    const formattedFeaturesForSearch = features.map((f) => {
        return {id: f.sid.id, name: f.displayName, keywords: f.epKeywords}
    })

    const matches = formattedFeaturesForSearch.filter((f) => JSON.stringify(f).toLowerCase().includes(search.toLowerCase()))
    const matchIds = matches.map(m => m.id)

    let searchResults = []
    features.forEach((f) => {
        if (matchIds.includes(f.sid.id)) {
            searchResults.push(f)
        }
    })
    return searchResults
}