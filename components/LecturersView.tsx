import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Lecturers, Language } from '../types';
import Lecturer from './Lecturer';

function LecturersView({
  lecturers,
  language,
}: {
  lecturers: Lecturers;
  language: Language | null;
}) {
  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        color="primary.main"
        sx={{ pb: 3 }}
      >
        {language ? (
          <>
            <Box component="span" sx={{ color: 'secondary.main' }}>
              {language.name}
            </Box>{' '}
            Teachers
          </>
        ) : (
          'All Teachers'
        )}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {lecturers.map((lecturer) => (
          <Box key={lecturer.id} sx={{ p: 4 }}>
            <Lecturer lecturer={lecturer} />
          </Box>
        ))}
      </Box>
    </>
  );
}

export default LecturersView;
