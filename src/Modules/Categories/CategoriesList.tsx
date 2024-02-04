import { Paper, Stack } from "@mui/material"
import { Category } from "src/utils/types"

type CategoryListProps = {
    categories: Category[]
    selectedCategorySidId: number
    setSelectedCategory: (category: Category) => void
    isSearching: boolean
    setSearch: (searchString: string) => void
}

export const CategoriesList = ({ 
    categories, 
    selectedCategorySidId, 
    setSelectedCategory, 
    isSearching, 
    setSearch 
}: CategoryListProps) => {

    const currentCategoryColor = (categorySidId: number) => {
        if (categorySidId === selectedCategorySidId && isSearching) {
            return '#828282'
        }
    }

    const hoverColor = (categorySidId: number) => {
        if (categorySidId === selectedCategorySidId) {
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