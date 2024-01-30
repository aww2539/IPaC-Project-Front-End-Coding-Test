export const filterDeprecatedData = (data) => {
    const filteredData = data.filter((d) => !JSON.stringify(d).toLowerCase().includes('deprecated'))
    return filteredData
}

export const fetchFeatures = () => {
    console.log('fetching features')

    fetch('./FeaturesEndpointResponse.json')
        .then(response => response.json())
        .then(({ data: { features } }) => filterDeprecatedData(features))
        .catch(error => console.trace(`Error fetching features: ${error}`))
}

export const fetchFeatureCategories = () => {
    console.log('fetching feature categories')

    fetch('./FeaturesEndpointResponse.json')
        .then(response => response.json())
        .then(({ data: { featureCategories } }) => {
            console.log('fetched feature categories') 
            const currentCategories = filterDeprecatedData(featureCategories)
            currentCategories.sort((a, b)=> a.sortOrder - b.sortOrder)
            return currentCategories
        })
        .catch(error => console.trace(`Error fetching feature categories: ${error}`)) 
}