import { FeatureCard } from "./FeatureCard"
import { Grid } from "@mui/material"
import { CategoryFeatureDetail } from "./CategoryFeatureDetail"
import { Category, Feature } from "src/utils/types"

type CategoryFeatureProps = {
    selectedCategory: Category
    featuresByCategory: Feature[]
    search: string
    searchResults: Feature[]
}

export const CategoryFeatures = ({ selectedCategory, featuresByCategory, search, searchResults }: CategoryFeatureProps) => {
    const featuresToDisplay: Feature[] = !!search ? searchResults : featuresByCategory

    return (
        <Grid container direction='row' flexWrap='wrap' spacing={2}>
            {!search.length && selectedCategory && (
                <Grid item xs={12}>
                    <CategoryFeatureDetail selectedCategory={selectedCategory} totalFeatures={featuresByCategory.length} />
                </Grid>
            )}

            {featuresToDisplay?.map((feature: Feature) => (
                <Grid item xs={4} key={feature.sid.id}>
                    <FeatureCard feature={feature} />
                </Grid>
                
            ))}
        </Grid>
    )
}