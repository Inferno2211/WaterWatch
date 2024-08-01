'use client';
import '@styles/globals.css';
import React, { useState } from 'react';
import { Container, Box, Typography, Button, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const UploadContainer = styled(Box)(({ theme }) => ({
  height: '959px',
  width: '1183px',
  backgroundColor: '#FFFFFF',
  color: '#6D31ED',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px dashed #6D31ED',
  borderRadius: '10px',
  padding: theme.spacing(4),
  textAlign: 'center',
}));

const ProgressBarContainer = styled(Box)(({ theme }) => ({
  width: '80%',
  marginTop: theme.spacing(2),
}));

const UploadPage = () => {
  const [progress, setProgress] = useState(76);
  const [uploadedFile, setUploadedFile] = useState('Image-100.png');

  const handleFileUpload = (event) => {
    // Handle file upload logic here
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Upload a clear image
      </Typography>
      <Typography variant="body1" gutterBottom>
        Make your problems heard to the right people
      </Typography>
      <UploadContainer>
        <Box>
          <Image alt="Upload icon" width={100} height={100} />
        </Box>
        <Typography variant="body1">
          Drag & drop your files here <br /> OR
        </Typography>
        <Button variant="contained" component="label" color="primary" style={{ backgroundColor: '#6D31ED', color: 'white' }}>
          Browse files
          <input type="file" hidden onChange={handleFileUpload} />
        </Button>
        <ProgressBarContainer>
          <Box display="flex" alignItems="center">
            <Typography variant="body2">{uploadedFile}</Typography>
            <Box flexGrow={1} mx={2}>
              <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Typography variant="body2">{`${progress}%`}</Typography>
            <Button onClick={() => setUploadedFile(null)}>X</Button>
          </Box>
        </ProgressBarContainer>
      </UploadContainer>
      <Button variant="contained" style={{ backgroundColor: '#6D31ED', color: 'white', marginTop: '20px' }}>
        Next
      </Button>
    </Container>
  );
};

export default UploadPage;
