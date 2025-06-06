import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, Button, ButtonGroup } from "@mui/material";
import links from './links.json';
import SekvenserLogo from './sekvenser-logo.svg'

function App() {
  const [visible, setVisible] = useState("publit");

  useEffect(() => {
    if (visible === "publit") {
      if (!document.querySelector('script[src="https://webshop.publit.com/publit-webshop-1.0.js"]')) {
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute("loading", "lazy");
        script.src = "https://webshop.publit.com/publit-webshop-1.0.js";
        script.text = `
          {
            "id": "5659",
            "sortBy": "priority:desc"
          }
        `;
        document.body.appendChild(script);
      }
    }
  }, [visible]);

  return (
    <Container>
      <Box my={4} textAlign="center">
        <img
          src={SekvenserLogo}
          alt="Sekvenser logo"
          style={{ maxWidth: 400, width: "100%", height: "auto", marginBottom: 16 }}
        />
        <Typography>
          [ˈtɛkːnadɛ ˈseːrjɛr]
        </Typography>

        {/* Navigation Buttons */}
        <Box mt={3} mb={2}>
          <ButtonGroup variant="contained">
            <Button
              color={visible === "publit" ? "primary" : "inherit"}
              onClick={() => setVisible(visible === "publit" ? null : "publit")}
            >
              {visible === "publit" ? "Webbshop" : "Webbshop"}
            </Button>
            <Button
              color={visible === "about" ? "primary" : "inherit"}
              onClick={() => setVisible(visible === "about" ? null : "about")}
            >
              {visible === "about" ? "Om" : "Om"}
            </Button>
            <Button
              color={visible === "contact" ? "primary" : "inherit"}
              onClick={() => setVisible(visible === "contact" ? null : "contact")}
            >
              {visible === "contact" ? "Kontakt" : "Kontakt"}
            </Button>
            <Button
              color={visible === "links" ? "primary" : "inherit"}
              onClick={() => setVisible(visible === "links" ? null : "links")}
            >
              {visible === "links" ? "Länkar" : "Länkar"}
            </Button>
          </ButtonGroup>
        </Box>

        {/* Views */}
        {visible === "contact" && (
          <Paper elevation={3} sx={{ mt: 4, p: 2, display: "inline-block" }}>
            <Typography variant="h6">Kontaktuppgifter</Typography>
            <Typography>Redaktör: Mikke Schirén</Typography>
            <Typography>E-post: mikkeschiren@gmail.com</Typography>
          </Paper>
        )}
        {visible === "about" && (
          <Paper elevation={3} sx={{ mt: 4, p: 2, display: "inline-block" }}>
            <Typography variant="h6">Om</Typography>
            <Typography variant="body1">Sekvenser är en tidskrift om teckande serier.</Typography>
            <Typography variant="body1">Förstra numret sedan nystarten 2025 utkom i maj,</Typography>
            <Typography variant="body1">nummer två utkommer i september och nummer tre i december.</Typography>
            <Typography variant="body1">Vi har för närvarande ingen egen distribution, utan enda sättet att köpa tidskriften här via webben.</Typography>
          </Paper>
        )}

        {visible === "publit" && (
          <Box sx={{ mt: 4 }}>
          <Paper elevation={3} sx={{ mt: 4, p: 2, display: "inline-block" }}>
          <Typography variant="h6">Webbshop</Typography>
          <Typography variant="body1">Beställningar i webbshoppen hanteras av Publit, och görs här.</Typography>
          </Paper>
            <div id="publit-webshop-root" />
          </Box>
        )}

        {visible === "links" && (
          <Paper elevation={3} sx={{ mt: 4, p: 2, display: "inline-block" }}>
            <Typography variant="h6" gutterBottom>Länkar</Typography>
            {links.map((link, i) => (
              <Typography key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
              </Typography>
            ))}
          </Paper>
        )}
      </Box>
    </Container>
  );
}

export default App;