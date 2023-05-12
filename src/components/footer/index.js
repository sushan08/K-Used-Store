import styled from "@emotion/styled";
import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Box
      sx={{
        background: '#f5f5f5',
        color: Colors.black,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            This website is a semester project done for the partial fulfillment of the grade for the end semester examination of the third semester.
            Thanks to members:
            Sushan Shrestha,
            Dipin Panta,
            Farman Mansoor and
            Gaurab Wagle.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon sx={{ mr: 1 }} />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <TwitterIcon sx={{ mr: 1 }} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <a href="#" target="_blank" rel="noopener noreferrer" onClick={(e) => {
                  e.preventDefault();
                  window.open('about:blank').document.write('Yet to build');
                }}>About Us</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <a href="#" target="_blank" rel="noopener noreferrer" onClick={(e) => {
                  e.preventDefault();
                  window.open('about:blank').document.write('Yet to build');
                }}>Order Tracking</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <a href="#" target="_blank" rel="noopener noreferrer" onClick={(e) => {
                  e.preventDefault();
                  window.open('about:blank').document.write('Yet to build');
                }}>Privacy &amp; Policy</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                <a href="#" target="_blank" rel="noopener noreferrer" onClick={(e) => {
                  e.preventDefault();
                  window.open('about:blank').document.write('Yet to build');
                }}>Terms &amp; Conditions</a>
              </Typography>
            </ListItemText>
          </List>

        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}