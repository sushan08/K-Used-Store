import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppBarDesktop({matches, onLoginClick, onLogoutClick }){
    const { setShowSearchBox } = useUIContext();
    return (
        <AppbarContainer>
            <AppbarHeader>KU Store</AppbarHeader>
            <MyList type="row">
                <ListItemText primary = "Home" />
                <ListItemText primary = "Categories" />
                <ListItemText primary = "Product" />
                <ListItemText primary = "Contact Us" />
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

