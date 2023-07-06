import * as React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function ValidationTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      style={{ padding: 40 }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField error id="outlined-error" label="Name" defaultValue="Name" />
      </div>
      <div>
        <TextField
          error
          id="outlined-error-helper-text"
          label="Email"
          defaultValue="Email"
        />
      </div>
      <div>
        <TextField
          error
          id="filled-error"
          label="Meassage"
          defaultValue="Meassage"
        />
      </div>
      <div style={{ padding: 7 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: "100%", padding: 10 }}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}
