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
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            <Grid item xs={12} md={6}>
              <img
                className="hero-img"
                src="src\assets\eye image.jpg"
                alt="Eye care"
              />
            </Grid>
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
