import * as React from 'react'
import { Typography, Box, Button, Grid } from '@mui/material'

export default function HomeCallSupport() {
    return (
        <>
            <Grid sx={{ display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(57deg,steelblue,#385f96)", p: { md: 3, xs: "10px" }, py: 5, marginBottom: 4, marginTop: 0, borderTop: '1px solid #eaeaea', borderBottom: '1px solid #eaeaea' }}>
                <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: 3, py: 1, background: "#fff", borderRadius: "20px", width: "90%" }}>
                    <Grid item xs={0}>
                        <Box>
                            <Typography sx={{ fontFamily: "Jost", letterSpacing: "-0.04rem", fontWeight: "500", fontSize: { md: '23px', xs: '19px' } }} variant="h5">Need help to setup your free fundraiser?
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={0}>
                        <Button target="_blank" href="tel:+919125239004" variant="contained" sx={{ m: 2, p: 1, fontWeight: "500", fontSize: { md: '18px', xs: '16px' }, borderRadius: "25px", px: 3 }}>
                            Call Support
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

