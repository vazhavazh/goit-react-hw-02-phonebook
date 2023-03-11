import PropTypes from 'prop-types'
import { Label, Input } from './FilterStyled';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <Label>Find contacts by name:</Label>
      <Input type="text" value={value} onChange={onChange} />
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};