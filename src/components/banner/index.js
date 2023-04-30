import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle, BannerShopButton } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/banner1.png"/>
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h2">K-Used Store</BannerTitle>
                <BannerDescription variant="subtitle">
                    Welcome to our K-Usesd Store, designed specifically for university students! We understand that as a student, you have a lot on your plate, which is why we offer a convenient one-stop-shop for all your needs.
                    Whether you're looking for textbooks, stationery, or the latest technology, we've got you covered. 
                </BannerDescription>
                <BannerShopButton color="primary">Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
}