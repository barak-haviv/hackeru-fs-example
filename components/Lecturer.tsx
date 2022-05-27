import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import MailIcon from '@mui/icons-material/Mail';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Lecturer } from '../types';

export default function LecturerView({ lecturer }: { lecturer: Lecturer }) {
  return (
    <Card sx={{ maxWidth: 345, justifyContent: 'center' }}>
      <CardMedia
        component="img"
        style={{ height: 300 }}
        image={lecturer.imageUrl}
        alt={lecturer.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {lecturer.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {lecturer.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            color: '#6363d5',
          }}
        >
          <MailIcon sx={{ m: 1 }} /> {lecturer.email}
        </Box>
      </CardActions>
    </Card>
  );
}
