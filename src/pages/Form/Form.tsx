import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Stack } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import Toaster from "../../components/Toaster";

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const phoneRegex = /^(?:\+?2)?(010|011|012|015)[0-9]{8}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function Form() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = () => {
    console.log("data");
    handleClick();
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          label="First name"
          sx={{ flexGrow: 1 }}
          variant="filled"
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "this field is required" : null}
          {...register("firstName", { required: true, minLength: 3 })}
        />
        <TextField
          label="Last name"
          sx={{ flexGrow: 1 }}
          variant="filled"
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "this field is required" : null}
          {...register("lastName", { required: true, minLength: 3 })}
        />
      </Stack>

      <TextField
        label="Email"
        variant="filled"
        error={Boolean(errors.email)}
        helperText={errors.email ? "please provide a valid email" : null}
        {...register("email", { required: true, pattern: emailRegex })}
      />
      <TextField
        label="Contact Number"
        variant="filled"
        error={Boolean(errors.phone)}
        helperText={errors.phone ? "please provide a valid Phone number" : null}
        {...register("phone", { required: true, pattern: phoneRegex })}
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField
        id="filled-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box textAlign={"right"}>
        <Button
          type="submit"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
        >
          Create New User
        </Button>
        <Toaster open={open} setOpen={setOpen} severity='info' message="User added successfully" />
      </Box>
    </Box>
  );
}
