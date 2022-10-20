import { Button, Stack } from "@mui/material";
import React from "react";
import { useEcoleDirecteSession } from "../hooks/useEcoleDirecteSession";
import { Grades } from "./Grades";
import { Login } from "./Login";

export const Welcome: React.FC = () => {
    const { account, logout } = useEcoleDirecteSession();
    return (
        <Stack>
            <Stack direction="row" justifyContent="end">
                <Button onClick={logout}>Logout</Button>
            </Stack>
            {account ? <Grades /> : <Login />}
        </Stack>
    )
}