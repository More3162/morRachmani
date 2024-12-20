import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/providers/UserProvider";


export default function CardActionBar({ cardId, handleEdit, handleDelete, handelCall, handleLike }) {

    const user = useCurrentUser();
    /*     console.log(user.firstName); */


    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            <Box>
                <IconButton onClick={() => handleDelete(cardId)} >
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => handleEdit(cardId)}>
                    <ModeEditIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton onClick={() => handelCall(cardId)}>
                    <CallIcon />
                </IconButton>
                <IconButton onClick={() => handleLike(cardId)}>
                    <FavoriteIcon />
                </IconButton>
            </Box>
        </CardActions>
    );
}
