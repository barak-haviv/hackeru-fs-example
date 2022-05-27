import Typography from '@mui/material/Typography';
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
    <>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        color="blue"
        sx={{ pb: 3 }}
      >
        Meet our teachers
      </Typography>
      <BasicSelect
        items={data.Languages}
        label="Choose Language"
        onSelect={onLanguageChosen}
      />
    </>
  );
}

export default LanguageSelect;
