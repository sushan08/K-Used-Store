import { Dialog, DialogContent, DialogTitle, Box, IconButton, TextField, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { firebasedb } from "../search/firebase/db";


export default function Login({ open, onClose }) {
    const [joinUs, setJoinUs] = useState(false);
    const [loading, setLoading]= useState(false);
    const [form, setForm]= useState({
        firstname: '',
        lastname:'',
        email:'',
        password: ''
    });
    const handleJoinUsSubmit=async(event) => {
        event.preventDefault();
        setLoading(true);
        try {
            await firebasedb.register({...form});
            onClose();
    }
    catch(error){
        console.log(error);
    }
    setLoading(false);
}

    const handleLoginSubmit =async(event) =>{
        event.preventDefault();
        setLoading(true);
       try {
        await firebasedb.login({...form});
        onClose();
       } 
       catch (error) {
            console.log(error);
       } 
       setLoading(false);
    }

    const handleFormFieldUpdate = (value, field) => {
        setForm({...form, [field] : value});
    }
    return (
        <Dialog open={open}
        >
            <DialogTitle>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent={"space-between"}
                >
                    Login
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>

            <DialogContent>
                {
                    joinUs ?
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            sx={{ width: '100%' }}>

                            <form onSubmit={handleJoinUsSubmit}>


                                <TextField
                                    label="First Name"
                                    variant="standard"
                                    sx={{ mb: 2 }}
                                    fullWidth
                                    value={form.firstname}
                                    onChange={(event)=> handleFormFieldUpdate(event.target.value, 'firstname')}
                                />
                                <TextField
                                    label="Last Name"
                                    variant="standard"
                                    sx={{ mb: 2 }}
                                    fullWidth
                                    value={form.lastname}
                                    onChange={(event)=> handleFormFieldUpdate(event.target.value, 'lastname')}
                                />
                                <TextField
                                    label="Email"
                                    variant="standard"
                                    sx={{ mb: 2 }}
                                    fullWidth
                                    value={form.email}
                                    onChange={(event)=> handleFormFieldUpdate(event.target.value, 'email')}
                                />
                                <TextField
                                    label="Password"
                                    type={"password"}
                                    variant="standard"
                                    sx={{ mb: 2 }}
                                    fullWidth
                                    value={form.password}
                                    onChange={(event)=> handleFormFieldUpdate(event.target.value, 'password')}
                                />

                                <Button disabled={loading} fullWidth type="submit" variant="contained">
                                    {loading ? "Please wait..." : "Sign Up"}</Button>
                            </form>
                            <Box sx={{ mt: 2, textAlign: "center" }}>
                                <Typography variant="caption">
                                    Have an account ?{" "}
                                    <Button onClick={() => setJoinUs(false)}>Login</Button>
                                </Typography>
                            </Box>
                        </Box>
                        :
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            sx={{ width: '100%' }}>

                            <form onSubmit={handleLoginSubmit}>


                                <TextField
                                    label="Email"
                                    variant="standard"
                                    sx={{ mb: 2 }}
                                    fullWidth
                                    value={form.email}
                                    onChange={(event)=> handleFormFieldUpdate(event.target.value, 'email')}
                                />
                                <TextField
                                    label="Password"
                                    type={"password"}
                                    variant="standard"
                                    sx={{ mb: 2 }}
                                    fullWidth
                                    value={form.password}
                                    onChange={(event)=> handleFormFieldUpdate(event.target.value, 'password')}
                                />

                                <Button disabled={loading} fullWidth type="submit" variant="contained">
                                {loading ? "Please wait..." : "Login"}</Button>
                            </form>
                            <Box sx={{ mt: 2, textAlign: "center" }}>
                                <Typography variant="caption">
                                    Don't have an account ?{" "}
                                    <Button onClick={() => setJoinUs(true)}>Sign up</Button>
                                </Typography>
                            </Box>
                        </Box>

                }


            </DialogContent>
        </Dialog>
    );
}