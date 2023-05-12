import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle, BannerShopButton } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <BannerContainer>
            <BannerImage src="/images/banner/LOGO.png"/>
            <BannerContent>
                <Typography variant="h6">Huge Collection</Typography>
                <BannerTitle variant="h1">K-Used Store</BannerTitle>
                <BannerDescription variant="subtitle">
                    "Unlock your potential with the K-Used Store.
                     Your go-to destination for all things academic.
                      From books to tech, we've got you covered."
                </BannerDescription>
                <BannerShopButton color="secondary">Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
}