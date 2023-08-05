import  Form  from './Form/Form'
import { Contacts } from './Contacts/Contacts'
import { Section } from './Section/Section'
import { Filter } from './Filter/Filter'
import { Container } from './App.styled';



const App = () => {
  // const contacts = useSelector(getContacts);


      return <Container>
      <Section title='Phonebook'>
          <Form/>
      </Section>
      <Section title='Contacts'>
          <Filter/>
          <Contacts/>
      </Section>
    </Container>
  
}

export default App
