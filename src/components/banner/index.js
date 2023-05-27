/*import { Typography, useMediaQuery } from "@mui/material";
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
} */

import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle, BannerShopButton } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const handleButtonClick = () => {
        const targetElement = document.getElementById("scroll-target");
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const scrollOptions = { behavior: "smooth" };
        window.scrollTo({ top: targetPosition + 0.7* window.innerHeight, ...scrollOptions });
    };

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
                <BannerShopButton color="secondary" onClick={handleButtonClick}>Shop Now</BannerShopButton>
            </BannerContent>
            <div id="scroll-target">
                {/* content to scroll to */}
            </div>
        </BannerContainer>
    );
}