import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, Typography, Button, Box } from '@mui/material'
import Slider from 'react-slick';

export default function HomeSlideshow(props) {

    const slides = [
        {
            name: "Impaac is India's 1st free and Trsuted Crowdfunding platform ",
            description: "India's only non-profit, technology driven crowdfunding, social networking platform. Connecting needy with people who wants to help. India's first Truly Free Crowdfunding Platform for social causes.",
            imgsrc: "https://img.graphicsurf.com/2020/11/donation-money-vector-flat-illustration.jpg"
        },
        {
            name: "We Charge 0% Commisson of Donations from You",
            description: "What is Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore in English?Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh ",
            imgsrc: "https://img.freepik.com/free-vector/hand-drawn-clothing-donation-concept_52683-54709.jpg?w=2000"
        },
        {
            name: "Impaac is India's Only Social Enterprise working for Earth",
            description: "What is Lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut laoreet dolore in English?Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh ",
            imgsrc: "https://img.freepik.com/free-vector/businessman-working-flying-like-superhero-with-briefcase-start-up-launch-start-up-venture-entrepreneurship-concept-white-background_335657-1678.jpg?w=2000"
        }
    ]

    return (
        <Carousel duration='700' navButtonsAlwaysInvisible>
            {
                slides.map((item, i) => <Slide key={i} item={item} />)
            }
        </Carousel>

    )
}

function Slide(props) {
    return (
        <Grid spacing={2} xs={0} sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: { md: "90%", xs: "100%" }, margin: "auto", pr: { md: 6, xs: 2 }, textAlign: { xs: "left", md: "left" }, paddingTop: { xs: "1rem", md: "4rem" }, paddingBottom: "1rem" }} container>
            <Grid item xs={0} md={6}>
                <Typography variant="h3" sx={{ color: "#1D1D1B", fontWeight: '600', margin: '20px 0', fontFamily: "Jost", fontSize: { md: "40px", xs: "35px" }, letterSpacing: "-0.04em", textAlign: "left" }}>
                    {props.item.name}
                </Typography>
                <Typography sx={{ fontFamily: "Jost", fontSize: "18px", textAlign: "left", letterSpacing: "-0.02em" }}>
                    {props.item.description}
                </Typography>
                <Button id="b_start_fundraiser_carousel" variant="contained" sx={{ marginTop: { xs: "26px", md: '33px' }, fontSize: "16px", height: 50, width: 220, borderRadius: 7, fontFamily: 'Jost', textTransform: "capitalize", background: "steelblue", textAlign: "center" }}>
                    Start a Free Fundrasier
                </Button>
            </Grid>
            <Grid item xs={0} md={6}>
                <Box component="img" sx={{ maxWidth: { xs: "90vw", md: 650 } }} src={props.item.imgsrc}>.</Box>
            </Grid>
        </Grid>
    )
}