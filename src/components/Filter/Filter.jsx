import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
return  <Input
            placeholder="Type name..."
            type="text"
            name="name"
            onChange={onChange}
            value={value}
        />
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}