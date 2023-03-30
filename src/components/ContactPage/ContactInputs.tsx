import React, {
  useState,
  memo,
  FC,
  useCallback,
} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { UserContacts } from './Inputs/UserContacts';
import { Checkboxes } from './Inputs/Checkboxes';

export const ContactIpunts: FC = memo(() => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState('');
  const [message, setMessage] = useState('');

  const resetState = useCallback(() => {
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setSelected('');
    setMessage('');
  }, []);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event?.preventDefault();

    if (firstName.trim() === '' || phoneNumber.trim() === '' || email.trim() === '') {
      alert('Please fill in all required fields');

      return;
    }

    alert('Thank you for your message!');
    console.log(firstName, phoneNumber, email, message); // eslint-disable-line no-console
    resetState();
  };

  return (
    <form onSubmit={handleSubmit}>
      <UserContacts
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        email={email}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setPhoneNumber={setPhoneNumber}
        setEmail={setEmail}
      />
      <Checkboxes selected={selected} setSelected={setSelected} />
      <Box
        component=""
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            width: '100%',
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
        <TextField
          id="standard-multiline-flexible"
          label="Message"
          placeholder="Write your message"
          multiline
          maxRows={4}
          variant="standard"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
      </Box>
      <div className="button-container">
        <button type="submit" onClick={handleSubmit} className="submit">Send Message</button>
      </div>
    </form>
  );
});
