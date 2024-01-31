import { useEffect, useState } from 'react';
import { getFeaturesBySearch } from './utils/helperFunctions';
import { CategoriesList } from './Modules/Categories/CategoriesList';
import { Header } from './Modules/Header/Header';
import { Box } from '@mui/material';
import { CategoryFeatures } from './Modules/CategoryFeatures/CategoryFeatures';
import { getAndSetCategoriesAndFeatures } from './utils/apiManager';

const App = () => {
  const [categories, setCategories] = useState([])
  const [features, setFeatures] = useState([])
  const [selectedCategory, setSelectedCategory] = useState({})
  const [featuresByCategory, setFeaturesByCategory] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getAndSetCategoriesAndFeatures(
      setFeatures, 
      setSelectedCategory, 
      setCategories
    )
  }, [])

  const getAndSetFeaturesByCategory = () => {
    const filteredFeatures = features.filter((feature) => {
      return feature.categorySid?.id === selectedCategory.sid.id
    })
    setFeaturesByCategory(filteredFeatures)
  }

  useEffect(() => {
    if (selectedCategory) {
      getAndSetFeaturesByCategory()
    }
  }, [selectedCategory])

  const handleSearch = () => {
    const results = getFeaturesBySearch(search, features)
    setSearchResults(results)
  }
  
  useEffect(() => {
    if (search) {
      handleSearch()
    }
  }, [search])

  return (
    <Box
      sx={{
        display: 'grid',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#cce4f9',
        gridTemplate: `
          "header header header"
          "category-menu content content"
          "category-menu content content"
          "category-menu content content"
        `,
        gridTemplateColumns: 'auto minmax(0, 1fr) auto',
        gridTemplateRows: '100px 1fr 50px auto'
      }}
    >

      <Header gridAreaName='header' search={search} setSearch={setSearch} />

      <Box sx={{ 
          gridArea: 'category-menu',
          marginTop: 4,
          paddingX: 4, 
          height: '80vh', 
          overflow: 'hidden', 
          overflowY: 'auto'
        }}
      >
        <CategoriesList 
          categories={categories} 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isSearching={!!!search}
          setSearch={setSearch}
        />
      </Box>

      <Box sx={{ gridArea: 'content', paddingRight: 8, paddingLeft: 2, marginTop: 4, height: '80vh', overflow: 'hidden', overflowY: 'auto' }}>
        <CategoryFeatures 
          selectedCategory={selectedCategory} 
          featuresByCategory={featuresByCategory} 
          search={search} 
          searchResults={searchResults}
        />
      </Box>
    </Box>
  );
}

export default App;
