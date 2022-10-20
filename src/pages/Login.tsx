import { Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useEcoleDirecteSession } from "../hooks/useEcoleDirecteSession";

export const Login: React.FC = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { login, isLoading, isError } = useEcoleDirecteSession();
    return <Stack
        justifyContent="center"
        alignItems="center"
        spacing={4}
        padding={4}
    >
        <Typography>
            Connectez-vous à votre compte EcoleDirecte
        </Typography>
        {
            isError ? (
                <Typography color="error">
                    Une erreur est survenue
                </Typography>
            ) : isLoading ? (
                <CircularProgress />
            ) : (
                <>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={() => login({ username, password })}>Login</Button>
                </>
            )
        }
    </Stack>
}