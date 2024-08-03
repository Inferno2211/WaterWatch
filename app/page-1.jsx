'use client'
import '@styles/globals.css'
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useRouter } from 'next/navigation';

const containerStyle = {
  width: '1183px',
  height: '949px'
};

const center = {
  lat: 28.6139,
  lng: 77.2090
};

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState(center);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Logic to update location based on search
  };

  const handleNextClick = () => {
    router.push('/next-step');
  };
  const containerStyle = {
    position: 'fixed',
    bottom: '0',
    right: '0',
    height: '959px',
    width: '1183px',
  };

  return (
    <Container style={containerStyle}>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom={2}>
        <Typography variant="h4" gutterBottom>
          Locate the issue site
        </Typography>
      </Box>
      <Typography variant="subtitle1" gutterBottom>
        Make your problems heard to the right people
      </Typography>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <TextField
          label="Enter a nearby postcode, or street name and area"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          fullWidth
          margin="normal"
        />
        <Button onClick={handleSearchSubmit} variant="contained" color="primary">
          Go
        </Button>
      </Box>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={10}
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
      <Box marginTop={2}>
        <Typography variant="body2" color="error">
          Message from General Council: If you are reporting an issue you consider to be dangerous or an emergency please call our Out of Hours Team on 0300 303 8671.
        </Typography>
      </Box>
      <Button
        onClick={handleNextClick}
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '20px' }}
      >
        Next
      </Button>
    </Container>
  );
};

export default Home;

