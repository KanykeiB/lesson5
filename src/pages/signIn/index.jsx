// import React from 'react';

// const Form = () => {
//     return (
//         <div>
//             <form className="container text-center bg-success bg-opacity-25 ">
//                 <div className="form-group">
//                     <label for="exampleInputEmail1">Email address</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//                     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                 </div>
//                 <div className="form-group">
//                     <label for="exampleInputPassword1">Password</label>
//                     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
//                 </div>
//                 <div className="form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-success">Submit</button>
//                 </form>
//         </div>
//     );
// };

// export default Form;

//using material ui

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function ColorTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField label="Outlined secondary" color="secondary" focused />
//       <TextField label="Filled success" variant="filled" color="success" focused />
//       <TextField
//         label="Standard warning"
//         variant="standard"
//         color="warning"
//         focused
//       />
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

export default function ComposedTextField() {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
        marginTop:"50px",
        display:"flex",
        justifyContent:'center'
      }}
    >
      <FormControl variant="standard">
        <InputLabel htmlFor="component-helper">Sign In Form</InputLabel>
        <Input
          id="component-helper"
          placeholder="Email address"
          aria-describedby="component-helper-text"
        />

        <Input
          id="component-password"
          placeholder="Password"
          aria-describedby="component-password-text"
          type='password'
        />
        <FormHelperText id="component-password-text">
            We'll never share your password.
        </FormHelperText> 

      </FormControl>

    </Box>
  );
}