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
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: '1800', left: '100', behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ with: '40px', height: '40px' }} />

      <Typography
        fontsize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyParts;
