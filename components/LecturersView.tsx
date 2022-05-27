import Typography from '@mui/material/Typography';
import { Lecturers, Language } from '../types';

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
        color="blue"
        sx={{ pb: 3 }}
      >
        {language ? (
          <>
            <span style={{ color: 'green' }}>{language.name}</span> Teachers
          </>
        ) : (
          'All Teachers'
        )}
      </Typography>
      <div>
        {lecturers.map((lecturer) => (
          <div key={lecturer.id}>{lecturer.name}</div>
        ))}
      </div>
    </>
  );
}

export default LecturersView;
