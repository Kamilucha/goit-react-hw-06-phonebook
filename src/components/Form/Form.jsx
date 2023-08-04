import PropTypes from 'prop-types'
import { useState } from "react"
import shortid from "shortid"
import { Input, Label, FormContainer, Button } from "./Form.styled"


const Form = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInputId = shortid.generate();
    const telInputId = shortid.generate();


    const handleChange = e => {
        const { name, value } = e.target
        switch (name) {
            case 'name':
                setName(value)
                break;
            
            case 'number':
                setNumber(value)
                break;
        
            default:
                break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({ name, number })

        reset()
    };

    const reset = () => {
        setName('');
        setNumber('');
    }



    return (
        <FormContainer onSubmit={handleSubmit}>
            <Label htmlFor={nameInputId}> Name
            <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
                id={nameInputId}           />

                </Label>
                <Label htmlFor={telInputId}>
                    Number
            <Input
                type="tel"
                name="number"
               pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
               id={telInputId } />
                </Label>
            <Button type="submit">Add contact</Button>
     </FormContainer>
) 
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default Form

