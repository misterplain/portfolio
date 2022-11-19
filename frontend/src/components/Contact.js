import React from "react";
import axios from '../api/axios';
import {
  Button,
  Fade,
  Box,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  FormControl,
  Grid,
} from "@mui/material";
import Link from "@mui/material/Link";
import { Formik } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object({
  name: Yup.string()
    .min(3, "Your name should have more than 3 characters")
    .required("Required"),
  phoneNum: Yup.string().min(
    9,
    "Phone number should have more than 9 characters, please include country code"
  ),
  email: Yup.string().min(3, "Too short"),
  message: Yup.string()
    .min(2, "You can do better than that")
    .required("Required"),
});

const Contact = () => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      id='contact'
      sx={{ marginTop: "50px" }}
    >
      <Grid item xs={12} sm={11} flex>
        <Typography variant='h2' component='h2' gutterBottom>
          Contact
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        <Formik
          initialValues={{ name: "", phoneNum: "", email: "", message: "" }}
          validationSchema={contactSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              let data = {
                name: values.name,
                phoneNum: values.phoneNum,
                email: values.email,
                message: values.message,
              };
              // setBool(true);
              const res = await axios.post("/contact", data);
              if (
                data.name.length === 0 ||
                data.phoneNum.length === 0 ||
                data.email.length === 0
              ) {
                console.log(res.data.message);
                // setBool(false);
              } else if (res.status === 200) {
                console.log(res.data.message); 
                // setBool(false);
              }
            } catch (error) {
              console.log(error);
            }

            resetForm();
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlue,
            values,
            isValid,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <TextField
                      name='name'
                      label='Name'
                      variant='outlined'
                      color='secondary'
                      fullWidth
                      value={values.name}
                      onChange={handleChange}
                      helperText={errors.name}
                    />
                  }
                  sx={{ m: 1.5 }}
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <TextField
                      type='number'
                      name='phoneNum'
                      label='Phone Number (optional)'
                      variant='outlined'
                      color='secondary'
                      fullWidth
                      value={values.phoneNum}
                      onChange={handleChange}
                      helperText={errors.phoneNum}
                    />
                  }
                  sx={{ m: 1.5 }}
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <TextField
                      type='text'
                      name='email'
                      label='Email'
                      variant='outlined'
                      color='secondary'
                      fullWidth
                      value={values.email}
                      onChange={handleChange}
                      helperText={errors.email}
                    />
                  }
                  sx={{ m: 1.5 }}
                />
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={
                    <TextField
                      type='textarea'
                      name='message'
                      label='Enter your message here'
                      multiline
                      rows={4}
                      variant='outlined'
                      color='secondary'
                      fullWidth
                      value={values.message}
                      onChange={handleChange}
                      helperText={errors.message}
                    />
                  }
                  sx={{ m: 1.5 }}
                />
              </FormGroup>

              <Button type='submit' variant="outlined" color="secondary" style={{ marginBottom: '20px' }}>
                Send Message
              </Button>
            </form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default Contact;
