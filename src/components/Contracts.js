import {useState} from "react"
import styled from "styled-components"
import Contact from "./Contact"

const initialContacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}]

const Contacts = () => {
  const [contacts] = useState(initialContacts)

  return (
    <ContactsWrapper key={1}>
      {contacts.map(contact => <Contact data={contact} key={`${contact.firstName}${contact.phone}`}/>)}
    </ContactsWrapper>
  )
}

export default Contacts

const ContactsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0;
`