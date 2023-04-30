import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppBarMobile from "./appbarMobile";
import AppBarDesktop from "./appbarDesktop";
import useDialogModal from "../../hooks/useDialogModal";
import Login from "../Login";
import { firebasedb } from "../search/firebase/db";

export default function Appbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [ShowLoginDialog, openLoginDialog] = useDialogModal(Login);

    const handleLogin = () => {
        openLoginDialog();
    }

    const handleLogout = async() => {
        await firebasedb.logout();
    }

    return (
        <>
            {matches ?
                <AppBarMobile
                    onLoginClick={handleLogin}
                    onLogoutClick={handleLogout}
                    matches={matches}
                />
                :
                <AppBarDesktop
                    onLoginClick={handleLogin}
                    onLogoutClick={handleLogout}
                    matches={matches}
                />
            }

            <ShowLoginDialog />
        </>
    );
}

