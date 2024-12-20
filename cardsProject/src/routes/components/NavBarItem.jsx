import React from "react";
import NavBarLink from "./NavBarLink";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";



export default function NavBarItem({ to, sx, label }) {

    return (
        <NavBarLink to={to} sx={sx}>
            <Button color="inherit">
                <Typography>{label}</Typography>
            </Button>
        </NavBarLink>
    );
}
