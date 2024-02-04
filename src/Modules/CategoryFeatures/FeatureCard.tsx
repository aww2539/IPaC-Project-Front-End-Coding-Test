import { Card, CardContent, Typography } from "@mui/material"
import { startCase } from 'lodash'
import { Feature } from "src/utils/types"

type FeatureCardProps = {
    feature: Feature
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
    const formatKeywords = (keywords: string[]) => {
        const formatted = keywords.map((keyword) => startCase(keyword.replace(/(\r\n|\n|\r)/gm, " ")))
        return formatted.join(' ')
    }

    return (
        <Card key={feature.sid.id} sx={{ height: '250px'}}>
            <CardContent>
                <Typography variant='h5' align='center' sx={{ margin: 1 }}>
                    {startCase(feature.displayName)}
                </Typography>

                <Typography variant='body1' sx={{ padding: 1, margin: 1 }}>
                    {feature.epKeywords.length > 0 ? 'Keywords: ' : 'No Keywords'}{formatKeywords(feature.epKeywords)}
                </Typography>
            </CardContent>
        </Card>
    )
}