import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import Stack from '@mui/material/Stack';

function Navbar() {
  return (
    <Stack
      justifyContent="space-around"
      direction="row"
      sx={{
        gap: { sm: '122px', xs: '20px' },
        mt: { sm: '32px', xs: '30px' },
        justifyContent: 'none',
        px: '20px',
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', height: '48px', margin: '0px 20px' }}
        />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems={'flex-end'}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #ff2625',
          }}
        >
          Home
        </Link>
        <a
          href="#excercises"
          style={{ textDecoration: 'none', color: '#3A1212' }}
        >
          Excercises
        </a>
      </Stack>
    </Stack>
  );
}

export default Navbar;
