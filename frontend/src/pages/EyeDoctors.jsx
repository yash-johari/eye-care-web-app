import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Rating,
  Button,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import {fetchDoctors} from "../doctors";
import {useState, useEffect} from "react";

function EyeDoctors() {

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDoctors = async () => {
      try {
        const data = await fetchDoctors();
        setDoctors(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load doctors");
        setLoading(false);
      }
    };

    loadDoctors();
  }, []);
  
  if (loading) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" align="center" color="error">{error}</Typography>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Our Eye Care Specialists
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Expert care from board-certified ophthalmologists and optometrists
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {doctors.map((doctor) => (
          <Grid item key={doctor.id} xs={12}>
            <Card sx={{ display: { xs: "block", md: "flex" }, height: "100%" }}>
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "100%", md: 300 },
                  height: { xs: 300, md: "auto" },
                }}
                image={doctor.image}
                alt={doctor.name}
              />
              <CardContent sx={{ flex: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    {doctor.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    {doctor.hospital}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Rating value={parseFloat(doctor.rating)} precision={0.1} readOnly />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      ({doctor.rating})
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="subtitle2" gutterBottom>
                  Education & Experience
                </Typography>
                <Typography variant="body2" paragraph>
                  {doctor.education} • {doctor.experience}
                </Typography>

                <Typography variant="subtitle2" gutterBottom>
                  Specialties
                </Typography>
                <Box sx={{ mb: 2 }}>
                  {doctor.specialties.map((specialty, index) => (
                    <Chip
                      key={index}
                      label={specialty}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOnIcon color="action" />
                    <Typography variant="body2">{doctor.address}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <PhoneIcon color="action" />
                    <Typography variant="body2">{doctor.contact}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <EmailIcon color="action" />
                    <Typography variant="body2">{doctor.email}</Typography>
                  </Box>
                </Box>

                <Button variant="contained" sx={{ mt: 2 }}>
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default EyeDoctors;
