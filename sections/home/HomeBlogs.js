import { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';

// @mui
import { Box, CardHeader, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// components
import { CarouselArrows } from '../../components/carousel';
import HomeBlogCard from './HomeBlogCard';

// Helper
import { blogData } from '../../helper/blog';

export default function HomeBlogs({ title, sx, ...other }) {
    const theme = useTheme();

    const [blogs, setBlogs] = useState([])

    const carouselRef = useRef(null);

    useEffect(() => {
        preloadBlogData()
    }, [])

    const preloadBlogData = () => {
        blogData()
            .then((data) => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setBlogs(data)
                }
            }
            )
    }


    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        rtl: Boolean(theme.direction === 'rtl'),
        responsive: [
            {
                breakpoint: theme.breakpoints.values.lg,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: theme.breakpoints.values.md,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: theme.breakpoints.values.sm,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const handlePrevious = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    return (
        <div>

            <Box sx={{ py: 4, ...sx }} {...other}>
                <CardHeader
                    title={title}
                    sx={{
                        p: 0,
                        ml: 2,
                        mb: 2,
                        '& .MuiCardHeader-action': { alignSelf: 'center' },
                    }}
                />
                <Box sx={{ position: 'relative' }}>
                    <CarouselArrows filled onNext={handleNext} onPrevious={handlePrevious}>
                        <Slider ref={carouselRef} {...settings}>
                            {blogs.map((blog, index) => (
                                <BlogItem key={index} item={blog} />
                            ))}

                        </Slider>
                    </CarouselArrows>
                </Box>

            </Box>
        </div>
    );
}

function BlogItem({ item }) {
    return (
        <Paper sx={{ mx: 1.5, borderRadius: 2, m: 1, bgcolor: 'background.neutral' }}>
            <HomeBlogCard blog={item} />
        </Paper>
    );
}
