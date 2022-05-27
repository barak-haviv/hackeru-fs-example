import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import DiamondIcon from '@mui/icons-material/Diamond';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <AppBar position="static">
       <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DiamondIcon sx={{ mr: 2 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                fontFamily: 'monospace',
                color: 'inherit',
                textDecoration: 'none',
              }}
              >
              FullStack Academy 
            </Typography>
          </Toolbar>
        </Container>
  </AppBar>
  );
}
