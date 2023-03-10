import { Label, Input } from './FilterStyled';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Label>Find contacts by name:</Label>
      <Input type="text" value={value} onChange={onChange} />
    </div>
  );
};