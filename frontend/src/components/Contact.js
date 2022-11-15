import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
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

const Contact = () => {
  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item xs={12} sm={11} flex style={{ border: "1px solid green" }}>
        <Typography variant='h2' component='h2' gutterBottom>
          Contact
        </Typography>
      </Grid>
      <Grid item xs={12} sm={10} md={8}>
        <form>
          <FormGroup>
            <FormControlLabel
              control={
                <TextField
                  name='name'
                  label='Name'
                  variant='outlined'
                  color='success'
                  fullWidth
                  // value={formik.values.name}
                  // onChange={formik.handleChange}
                  className=''
                />
              }
            />
            {/* 
              {formik.errors.name && formik.touched.name ? (
                <div className='collab__errors'>{formik.errors.name}</div>
              ) : null} */}
            <FormGroup>
              <FormControlLabel
                control={
                  <TextField
                    type='number'
                    name='phoneNum'
                    label='Phone Number (optional)'
                    variant='outlined'
                    color='success'
                    fullWidth
                    // value={formik.values.phoneNum}
                    // onChange={formik.handleChange}
                    className='form-control'
                  />
                }
              />

              {/* {formik.errors.phoneNum && formik.touched.phoneNum ? (
                <div className="collab__errors">{formik.errors.phoneNum}</div>
              ) : null} */}
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <TextField
                    type='text'
                    name='email'
                    label='Email'
                    variant='outlined'
                    color='success'
                    fullWidth
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                    className='form-control'
                  />
                }
              />

              {/* {formik.errors.email && formik.touched.email ? (
                  <div className='collab__errors'>{formik.errors.email}</div>
                ) : null} */}
            </FormGroup>
            <FormGroup>
              <FormControlLabel
                control={
                  <TextField
                    type='text'
                    name='message'
                    label='Enter your message here'
                    rows='4'
                    Multiline={true}
                    variant='outlined'
                    color='success'
                    fullWidth
                    // value={formik.values.message}
                    // onChange={formik.handleChange}
                    className='form-control'
                  />
                }
              />

              {/* {formik.errors.message && formik.touched.message ? (
                  <div className='collab__errors'>{formik.errors.message}</div>
                ) : null} */}
            </FormGroup>
          </FormGroup>

          <Button type='submit'>
            Submit feedback
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Contact;
