import { useEffect, useState } from 'react';
import { getFeaturesBySearch } from './utils/helperFunctions';
import { CategoriesList } from './Modules/Categories/CategoriesList';
import { Header } from './Modules/Header/Header';
import { Box } from '@mui/material';
import { CategoryFeatures } from './Modules/CategoryFeatures/CategoryFeatures';
import { getAndSetCategoriesAndFeatures } from './utils/apiManager';
import { Category, Feature } from './utils/types';

const App = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [features, setFeatures] = useState<Feature[]>([])
  const [selectedCategory, setSelectedCategory] = useState<Category>()
  const [featuresByCategory, setFeaturesByCategory] = useState<Feature[]>([])
  const [search, setSearch] = useState<string>('')
  const [searchResults, setSearchResults] = useState<Feature[]>([])

  useEffect(() => {
    getAndSetCategoriesAndFeatures(
      setFeatures, 
      setSelectedCategory, 
      setCategories
    )
  }, [])

  const getAndSetFeaturesByCategory = () => {
    const filteredFeatures = features.filter((feature) => {
      return feature.categorySid?.id === selectedCategory?.sid.id
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

      <Header search={search} setSearch={setSearch} />

      <Box sx={{ 
          gridArea: 'category-menu',
          marginTop: 4,
          paddingX: 4, 
          height: '80vh', 
          overflow: 'hidden', 
          overflowY: 'auto'
        }}
      >
        {categories.length >= 1 && selectedCategory && (
          <CategoriesList 
            categories={categories} 
            selectedCategorySidId={selectedCategory.sid?.id}
            setSelectedCategory={setSelectedCategory}
            isSearching={!!!search}
            setSearch={setSearch}
          />
        )}
      </Box>

      <Box sx={{ 
        gridArea: 'content', 
        paddingRight: 8, 
        paddingLeft: 2, 
        marginTop: 4, 
        height: '80vh', 
        overflow: 'hidden', 
        overflowY: 'auto' 
        }}
      >
        {selectedCategory && (
          <CategoryFeatures 
            selectedCategory={selectedCategory} 
            featuresByCategory={featuresByCategory} 
            search={search} 
            searchResults={searchResults}
          />
          )}
      </Box>
    </Box>
  );
}

export default App;
