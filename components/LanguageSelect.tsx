import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Data, Language } from '../types';
import BasicSelect from './BasicSelect';

function LanguageSelect({
  data,
  onLanguageChosen,
}: {
  data: Data;
  onLanguageChosen: Function;
}) {
  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        color="primary"
        sx={{ pb: 3 }}
      >
        Meet our teachers
      </Typography>
      <BasicSelect
        items={data.Languages}
        label="Choose Language"
        onSelect={onLanguageChosen}
      />
    </Box>
  );
}

export default LanguageSelect;
