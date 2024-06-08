import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
function BodyParts({ item, setBodyPart, bodyPart }) {
  // {item.charAt(0).toUpperCase() + item.slice(1)}
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff25260' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        gap: '47px',
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        styles={{ with: '40px', height: '40px' }}
      />
    </Stack>
  );
}

export default BodyParts;
