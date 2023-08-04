import PropTypes from 'prop-types'
import { Input, Label } from 'components/Form/Form.styled'

export const Filter = ({ value, changeFilter }) => {
    return (<Label>
        Find contacts by name
        <Input type="text" value={value} onChange={changeFilter } />
    </Label>
    )
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
}