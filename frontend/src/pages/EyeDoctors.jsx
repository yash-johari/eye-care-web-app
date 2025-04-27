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

function EyeDoctors() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80",
      hospital: "Vision Care Center",
      address: "123 Eye Street, Medical District",
      contact: "(555) 123-4567",
      email: "sarah.johnson@visioncare.com",
      rating: 4.8,
      specialties: ["Cataract Surgery", "Glaucoma Treatment", "LASIK"],
      education: "MD - Harvard Medical School",
      experience: "15+ years",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80",
      hospital: "Clear Vision Hospital",
      address: "456 Vision Avenue, Downtown",
      contact: "(555) 987-6543",
      email: "michael.chen@clearvision.com",
      rating: 4.9,
      specialties: [
        "Pediatric Ophthalmology",
        "LASIK Surgery",
        "Corneal Diseases",
      ],
      education: "MD - Johns Hopkins University",
      experience: "12+ years",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80",
      hospital: "Advanced Eye Institute",
      address: "789 Medical Park, Westside",
      contact: "(555) 456-7890",
      email: "emily.rodriguez@advancedeye.com",
      rating: 4.7,
      specialties: [
        "Retinal Surgery",
        "Diabetic Eye Care",
        "Macular Degeneration",
      ],
      education: "MD - Stanford University",
      experience: "10+ years",
    },
  ];

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
                    <Rating value={doctor.rating} precision={0.1} readOnly />
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
