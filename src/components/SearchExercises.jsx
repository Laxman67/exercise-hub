import React, { useState, useEffect } from 'react';
import HorizontalScrollBar from './HorizontalScrollBar';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, excerciseOptions } from '../utils/fetchData';

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  let url = 'https://exercisedb.p.rapidapi.com/exercises';
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    // Fetch with 0 dependencies
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        excerciseOptions
      );

      setBodyParts(['all', ...bodyPartsData]);
    };
    // Call imediately
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    // if serach is present and the search is not empty
    if (search) {
      const excercisesData = await fetchData(url, excerciseOptions);

      const searchedExercises = await excercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search.toLowerCase()) ||
          exercise.target.toLowerCase().includes(search.toLowerCase()) ||
          exercise.bodyPart.toLowerCase().includes(search.toLowerCase()) ||
          exercise.equipment.toLowerCase().includes(search.toLowerCase())
      );
      setExercises('');
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
      id="exercises"
    >
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: '44px',
            xs: '30px',
          },
        }}
        textAlign="center"
        mb="50px"
      >
        Awesome Excercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mt="72px">
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '5px',
            },
            width: {
              lg: '980px',
              xs: '350px',
            },
            borderColor: '#FfF',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Excercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            position: 'absolute',
            width: {
              lg: '175px',
              xs: '80px',
            },
            fontSize: {
              lg: '20px',
              xs: '14px',
            },
            height: '56px',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
