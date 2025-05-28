import './App.css';
import React, { useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { Helmet } from "react-helmet";

function App() {

  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleLoadPublitScript = () => {
    // Prevent multiple injections
    if (scriptLoaded) return;

    // Create a script element
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute("loading", "lazy");
    script.src = "https://webshop.publit.com/publit-webshop-1.0.js";
    // Insert the JSON config as text content
    script.text = `
      {
        "id": "5659",
        "sortBy": "priority:desc"
      }
    `;
    document.body.appendChild(script);
    setScriptLoaded(true);
  };
  return (
    <Container>

      <Helmet>
        <title>Sekvenser</title>
      </Helmet>


      <Box my={4} textAlign="center">
        <Typography variant="h2" component="h1" gutterBottom>
          Sekvenser
        </Typography>
        <Typography>
        [ˈtɛkːnadɛ ˈseːrjɛr]
        </Typography>
        <Typography>
         Kontakt: mikkeschiren@gmail.com
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleLoadPublitScript}
          disabled={scriptLoaded}
        >
          {scriptLoaded ? "Webbshop" : "Webbshop"}
        </Button>

      </Box>
      <div id="publit-webshop-root" />
    </Container>
  );
}

export default App;
