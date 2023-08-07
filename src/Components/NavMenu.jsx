import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

export default function NavMenu({ result, handleListGetItem }) {
  return (
    <Paper sx={{ width: 230 }}>
      <MenuList>
        {result ? (
          <>
            {result.map((item) => {
              return (
                <MenuItem onClick={() => handleListGetItem(item.id)}>
                  <ListItemIcon>
                    <SendIcon fontSize="small" />
                  </ListItemIcon>
                  <Typography variant="inherit">{item.title.slice(0,10)}</Typography>
                </MenuItem>
              );
            })}
          </>
        ) : (
            <CircularProgress />
        )}
      </MenuList>
    </Paper>
  );
}
