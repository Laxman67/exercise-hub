import React from 'react';
import { Link } from '@mui/material';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      to={`/exerciseDetails/${exercise.id}`}
      className="exercise-card"
      style={{ cursor: 'pointer' }}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            backgroundColor: '#fcc759   ',
            fontSize: '    14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            backgroundColor: '#ffa9a9',
            fontSize: '    14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight={'bold'}
        pb={'10px'}
        textTransform={'capitalize'}
        fontSize={'22px'}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
