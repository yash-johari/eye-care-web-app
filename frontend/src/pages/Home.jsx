import React from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

function Home() {
  const features = [
    {
      title: "Expert Eye Care",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=80",
      description:
        "Access to top ophthalmologists and optometrists in your area.",
    },
    {
      title: "Symptom Checker",
      image:
        "data:image/jpeg;base64,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",
      description: "Advanced tool to help identify potential eye conditions.",
    },
    {
      title: "24/7 Support",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80",
      description: "Round-the-clock assistance for your eye care needs.",
    },
  ];

  const tips = [
    {
      title: "20-20-20 Rule",
      description:
        "Every 20 minutes, look at something 20 feet away for 20 seconds.",
    },
    {
      title: "Healthy Diet",
      description:
        "Include foods rich in vitamins A, C, E, and omega-3 fatty acids.",
    },
    {
      title: "Regular Check-ups",
      description: "Schedule comprehensive eye exams at least once a year.",
    },
    {
      title: "UV Protection",
      description: "Wear sunglasses that block both UVA and UVB rays.",
    },
  ];

  return (
    <>
      <Box
        sx={{
          // background: 'linear-gradient(45deg, #2196f3 30%, #21CBF3 90%)',
          // background: 'linear-gradient(45deg,rgb(30, 89, 138) 30%, #21CBF3 90%)',
          background:
            "linear-gradient(45deg,rgb(17, 17, 17) 30%,rgb(49, 49, 49) 90%)",
          color: "white",
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                fontWeight="bold"
              >
                See the world clearly — one drop at a time.
              </Typography>
              <Typography variant="h5" paragraph>
                Discover the perfect care for your eyes with our smart Eye Care Web App. Whether you're facing redness, dryness, irritation, or just want expert advice, we've got you covered. Get tailored eye drop suggestions, natural remedies, and find trusted eye specialists near you — all in one place.
              </Typography>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <img
                className="hero-img"
                src="src\assets\eye image.jpg"
                alt="Eye care"
              />
            </Grid> */}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6 }}>
          Our Services
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6 }}>
          Eye Care Tips
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {tips.map((tip, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: "100%",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {tip.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tip.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
