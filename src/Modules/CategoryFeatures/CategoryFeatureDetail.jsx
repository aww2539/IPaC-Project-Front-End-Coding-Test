import { Grid, Paper, Typography } from "@mui/material"


export const CategoryFeatureDetail = ({ selectedCategory, totalFeatures }) => {
    return (
        <Grid container>
            <Paper sx={{ width: '100%', minHeight: '20vh'}}>
                <Grid item xs={12} align='center' >
                    <Typography variant='h3' fontWeight='bold' >{selectedCategory.name} - {totalFeatures} Total</Typography>
                </Grid>
                <Grid item xs={12} align='center' padding={3}>
                    <Typography>{selectedCategory.optionalDescription || selectedCategory.optionalDisplayDescription}</Typography>
                </Grid>
            </Paper>
        </Grid>
    )
}