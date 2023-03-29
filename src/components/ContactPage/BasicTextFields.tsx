import React, {
  useState,
  memo,
  FC,
  useCallback,
} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const ContactIpunts: FC = memo(() => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState('');
  const [message, setMessage] = useState('');

  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelected(event.target.value);
  };

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
    console.log(firstName, phoneNumber, email, message); // eslint-disable-line no-console
    resetState();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        component=""
        sx={{
          '& .MuiTextField-root': {
            m: 1,
            width: '25ch',
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
            <div>
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
            <div>
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
      <div className="checkboxes">
        <div className="round">
          <label htmlFor="option">
            <input
              type="checkbox"
              id="option"
              name="option"
              value="option1"
              checked={selected === 'option1'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
        <div className="round">
          <label htmlFor="option2">
            <input
              type="checkbox"
              id="option2"
              name="option"
              value="option2"
              checked={selected === 'option2'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
        <div className="round">
          <label htmlFor="option3">
            <input
              type="checkbox"
              id="option3"
              name="option"
              value="option3"
              checked={selected === 'option3'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
        <div className="round">
          <label htmlFor="option4">
            <input
              type="checkbox"
              id="option4"
              name="option"
              value="option4"
              checked={selected === 'option4'}
              onChange={handleOptionChange}
            />
          </label>
        </div>
      </div>
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
      <button type="submit" onClick={handleSubmit}>Send Message</button>
    </form>
  );
});
