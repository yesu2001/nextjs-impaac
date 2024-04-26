import React from 'react'
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import { styled } from '@mui/material/styles';


const Header = styled(CardHeader)(({ theme }) => ({
    color: theme.palette.background.default,
    background: theme.palette.grey[700],
    textAlign: "center",
    padding: 16
}))

const CardSection = styled(Card)(({ theme , customColor}) => ({
    marginTop: 30,
    marginLeft: 20,
    backgroundColor: customColor,
    color: "#000000de",
    borderRadius: 10,
    [theme.breakpoints.down('md')]: {
        marginTop: 20,
        marginLeft: 0,
    },
    overflow: "hidden",
}))

const ChildrenSection = styled(Card)(({customColor}) => ({
    padding: 10,
    // backgroundColor: "#f1f1f1",
    backgroundColor: customColor,
}))

function CustomCard(props) {
    const { title, children,customColor, ...other } = props
    return (
        <CardSection   {...other}>
            {title && <Header
                title={title}
            />}
            <ChildrenSection customColor={customColor}>
                {children}
            </ChildrenSection>
        </CardSection>
    )
}

export default CustomCard

