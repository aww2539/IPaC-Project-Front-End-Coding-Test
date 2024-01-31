import { Paper, Stack } from "@mui/material"

export const CategoriesList = ({ 
    categories, 
    selectedCategory, 
    setSelectedCategory, 
    isSearching, 
    setSearch 
}) => {

    const currentCategoryColor = (categorySidId) => {
        if (categorySidId === selectedCategory.sid.id && isSearching) {
            return '#828282'
        }
    }

    const hoverColor = (categorySidId) => {
        if (categorySidId === selectedCategory.sid.id) {
            return {}
        } else {
            return { cursor: 'pointer', backgroundColor: '#e0e0e0' }
        }
    }

    return (
        <>
            <Stack direction='column' spacing={1} className='category-list'>
                {categories.map((category) => (
                    <Paper 
                        key={category.sid.id}
                        className='category-list-item'
                        sx={{ 
                            fontWeight: 'bold',
                            paddingX: '15px', 
                            paddingY: '15px',
                            background: `${currentCategoryColor(category.sid.id)}`,
                            ':hover': { ...hoverColor(category.sid.id) },
                            "&:active": {
                                boxShadow: 'none',
                                background: '#828282'
                            }              
                        }}
                        onClick={() => {
                            setSearch('')
                            setSelectedCategory(category)
                        }}
                    >
                        {category.name}
                    </Paper>
                ))}
            </Stack>
        </>

    )
}