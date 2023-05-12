import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList,MyLink } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { Link } from "react-router-dom";

export default function AppBarDesktop({matches, onLoginClick, onLogoutClick }){
    const { setShowSearchBox } = useUIContext();
    return (
        <AppbarContainer>
            <AppbarHeader>KU Store</AppbarHeader>
            <MyList type="row">
                <MyLink to={'/home'}><ListItemText primary = "Home" /></MyLink>
                <MyLink to={'/categories'}><ListItemText primary = "Categories" /></MyLink>
                <MyLink to={'/products'}><ListItemText primary = "Product" /></MyLink>
                <MyLink to={'/contact'}><ListItemText primary = "Contact Us" /></MyLink>


                <ListItemButton onClick={() => setShowSearchBox(true)}>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions 
                onLogin= {onLoginClick}
                onLogout={onLogoutClick}
                matches={matches}/>
        </AppbarContainer>
    );

}

