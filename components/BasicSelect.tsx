import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect({
  label,
  items,
  onSelect,
}: {
  label: string;
  items: Array<{ id: number; name: string }>;
  onSelect: Function;
}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    onSelect(
      event.target.value === 'all' ? null : JSON.parse(event.target.value)
    );
  };

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        <MenuItem value="all">
          <em>All</em>
        </MenuItem>
        {items.map((item) => (
          <MenuItem key={item.id} value={JSON.stringify(item)}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
