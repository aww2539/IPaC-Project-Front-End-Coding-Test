import { AppBar, Grid, Typography } from "@mui/material"
import { Search } from "./Search/Search"

type HeaderProps = {
    search: string
    setSearch: (searchString: string) => void
  }

export const Header = ({ search, setSearch }: HeaderProps) => {
    
    return (
        <AppBar 
            variant='elevation' 
            sx={{ 
                bgcolor: '#323A45', 
                padding: '1rem' 
            }}
        >
            <Grid container alignItems='center'>

                <Grid item xs={8} paddingLeft={2}>
                    <Grid container>
                        <Grid item>
                            <Typography variant='h4'>IPaC Information for Planning and Consultation</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid container justifyContent='center'>
                        <Grid item textAlign='center'>
                            <Search search={search} setSearch={setSearch} />
                        </Grid>
                    </Grid> 
                </Grid>
                
            </Grid>

        </AppBar>

        
    )
}