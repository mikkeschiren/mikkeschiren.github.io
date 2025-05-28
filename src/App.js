import './App.css';
import { Button, Container, Typography, Box } from '@mui/material';

function App() {
  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          Sekvenser
        </Typography>
        <Typography>
        [ˈtɛkːnadɛ ˈseːrjɛr]
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Köp
        </Button>
      </Box>
    </Container>
  );
}

export default App;
