import { useEffect, useState } from 'react';
import './App.css';
import { filterDeprecatedData } from './utils/dataUtils';
import { CategoriesList } from './Modules/Categories/CategoriesList';
import { Search } from './Modules/Search/Search';

function App() {
  const [featureCategories, setFeatureCategories] = useState([])
  const [features, setFeatures] = useState([])

  const fetchFeatures = () => {
    fetch('./FeaturesEndpointResponse.json')
        .then(response => response.json())
        .then(({ data: { features } }) => {
          setFeatures(filterDeprecatedData(features))
        })
        .catch(error => console.trace(`Error fetching features: ${error}`))
}

  const fetchFeatureCategories = () => {
    fetch('./FeaturesEndpointResponse.json')
        .then(response => response.json())
        .then(({ data: { featureCategories } }) => {
          featureCategories.sort((a, b)=> a.sortOrder - b.sortOrder)
          setFeatureCategories(filterDeprecatedData(featureCategories))
        })
        .catch(error => console.trace(`Error fetching features: ${error}`))
}

  useEffect(() => {
    fetchFeatures()
    fetchFeatureCategories()
  }, [])

  useEffect(() => {
    console.log(features.length && 'Features Set')
    console.log(featureCategories.length && 'Category Features Set')
  }, [features, featureCategories])

  return (
    <div className="App">
      <header className="App-header">

        <div>
          <CategoriesList categories={featureCategories} />
        </div>

        <div>
          <Search />
        </div>

      </header>
    </div>
  );
}

export default App;
