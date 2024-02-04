import { Grid, Paper, Typography } from "@mui/material"
import { Category } from "src/utils/types"

type CategoryFeatureDetailProps = {
    selectedCategory: Category
    totalFeatures: number
}

export const CategoryFeatureDetail = ({ selectedCategory, totalFeatures }: CategoryFeatureDetailProps) => {
    return (
        <Paper sx={{ width: '100%', minHeight: '20vh'}}>
            <Grid container textAlign='center'>
                <Grid item xs={12}>
                    <Typography variant='h3' fontWeight='bold' >{selectedCategory.name} - {totalFeatures} Total</Typography>
                </Grid>
                <Grid item xs={12} padding={3}>
                    <Typography>{selectedCategory.optionalDescription || selectedCategory.optionalDisplayDescription}</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}