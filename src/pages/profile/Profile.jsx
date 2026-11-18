import React from "react";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  Stack,
  Typography,
  Paper,
  Button,
} from "@mui/material";

const skills = ["React", "JavaScript", "Material UI", "Node.js", "REST APIs", "Git"];

export default function Profile() {
  const user = {
    name: "Abhishek Shewale",
    role: "Full Stack Developer",
    email: "abhishek.shewale@example.com", // TODO: apni real email yaha daalo
  };

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Profile
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Avatar
            sx={{
              width: 84,
              height: 84,
              fontSize: 30,
              fontWeight: 700,
              backgroundImage: "linear-gradient(135deg, #6366f1, #14b8a6)",
            }}
          >
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Avatar>
          <Box>
            <Typography variant="h6">{user.name}</Typography>
            <Typography color="secondary.main" fontWeight={500}>
              {user.role}
            </Typography>
            <Typography color="text.secondary">{user.email}</Typography>
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Typography variant="subtitle1" gutterBottom>
          Tech Stack
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
          {skills.map((s) => (
            <Chip key={s} label={s} color="primary" variant="outlined" />
          ))}
        </Stack>

        <Typography variant="subtitle1" gutterBottom>
          Account
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            Edit profile
          </Button>
          <Button variant="outlined" color="error">
            Log out
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
