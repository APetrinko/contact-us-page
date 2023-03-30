import React, { FC, memo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type Props = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  setFirstName: (event) => void;
  setLastName: (event) => void;
  setPhoneNumber: (event) => void;
  setEmail: (event) => void;
};

export const UserContacts: FC<Props> = memo(({
  firstName,
  lastName,
  phoneNumber,
  email,
  setFirstName,
  setLastName,
  setPhoneNumber,
  setEmail,
}) => {
  return (
    <Box
      component=""
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '95%',
          '& label.Mui-focused': {
            color: 'black',
            fontWeight: 600,
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
          },
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="fields">
        <div className="fields__full-name">
          <div className="fields__full-name__first-name">
            <TextField
              id="standard-required"
              label="First Name"
              variant="standard"
              value={firstName}
              onChange={event => {
                setFirstName(event.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              id="standard-required"
              label="Last Name"
              variant="standard"
              value={lastName}
              onChange={event => {
                setLastName(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="fields__contacts">
          <div className="fields__contacts-email">
            <TextField
              id="standard-required"
              label="Email"
              type="email"
              variant="standard"
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              id="standard-required"
              label="Phone Number"
              type="tel"
              variant="standard"
              value={phoneNumber}
              onChange={event => {
                setPhoneNumber(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </Box>
  );
});
