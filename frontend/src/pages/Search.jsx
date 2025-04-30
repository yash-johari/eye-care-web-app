import React, { useState } from 'react';
import {
  Container,
  Button,
  Chip,
  Paper,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Search() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const theme = useTheme(); // Hook for theme access
  const symptoms = [
    'Redness',
    'Itching',
    'Blurred Vision',
    'Dry Eyes',
    'Watery Eyes',
    'Light Sensitivity',
    'Eye Pain',
    'Double Vision',
    'Eye Strain',
    'Burning Sensation',
  ];

  const handleSymptomClick = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSearch = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setSearchResults({
        eyeDrops: [
          {
            name: 'Refresh Tears',
            image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&q=80',
            description: 'Lubricating drops for dry eyes',
          },
          {
            name: 'Visine Advanced',
            image: 'https://images.unsplash.com/photo-1576073719676-aa95576db207?w=300&q=80',
            description: 'Reduces redness and irritation',
          },
          {
            name: 'Systane Ultra',
            image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&q=80',
            description: 'Long-lasting relief for dry eyes',
          },
        ],
        causes: [
          {
            title: 'Digital Eye Strain',
            description: 'Prolonged exposure to digital screens',
          },
          {
            title: 'Allergies',
            description: 'Seasonal or environmental allergens',
          },
          {
            title: 'Dry Eye Syndrome',
            description: 'Insufficient tear production',
          },
        ],
        remedies: [
          {
            title: 'Warm Compress',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&q=80',
            description: 'Apply warm compress to eyes for 10 minutes',
          },
          {
            title: 'Eye Exercises',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80',
            description: 'Regular eye exercises to reduce strain',
          },
          {
            title: 'Proper Hydration',
            image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=300&q=80',
            description: 'Stay hydrated throughout the day',
          },
        ],
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mb: 4,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Symptom Checker
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
          Select your symptoms to get personalized recommendations
        </Typography>
        <Box
          sx={{
            mb: 3,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            justifyContent: 'center',
          }}
        >
          {symptoms.map((symptom) => (
            <Chip
              key={symptom}
              label={symptom}
              onClick={() => handleSymptomClick(symptom)}
              color={selectedSymptoms.includes(symptom) ? 'primary' : 'default'}
              sx={{ m: 0.5, fontSize: '1rem', py: 2 }}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleSearch}
            disabled={selectedSymptoms.length === 0 || loading}
            sx={{ px: 4, py: 1.5 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
          </Button>
        </Box>
      </Paper>

      {searchResults && (
        <>
          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Recommended Eye Drops
          </Typography>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {searchResults.eyeDrops.map((drop, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={drop.image}
                    alt={drop.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {drop.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {drop.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Possible Causes
          </Typography>
          <Grid container spacing={3} sx={{ mb: 6 }}>
            {searchResults.causes.map((cause, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {cause.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cause.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
            Natural Remedies
          </Typography>
          <Grid container spacing={4}>
            {searchResults.remedies.map((remedy, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={remedy.image}
                    alt={remedy.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {remedy.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {remedy.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default Search;
