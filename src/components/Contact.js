import {rgba} from "polished"
import styled from "styled-components"

const Contact = ({data}) => {
  const {firstName, lastName, phone, gender} = data

  return <ContactWrapper className="contact">
    <header>
      <h3 className="name">{firstName} {lastName}</h3>
      {gender ? <p className="gender">gender: {gender}</p> : null}
    </header>
    <article className="contacts">
      <p className="phone">
        phone: <a href={`tel:${phone}`}>{formatPhoneNumber(phone)}</a>
      </p>
    </article>
  </ContactWrapper>
}

export default Contact

function formatPhoneNumber(phone) {
  return phone.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4")
}

const ContactWrapper = styled.div`
  font-family: Montserrat, sans-serif;
  display: flex;
  flex-direction: column;
  width: 20rem;
  max-width: 20rem;
  margin: 0 1rem 2rem;
  padding: 1rem;;
  color: #404040;
  border-radius: 2rem;
  background-color: white;
  box-shadow: 0 1rem 1.5rem ${rgba("black", 0.5)};

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 3rem;
    padding: 1rem 0;

    .name {
      font-size: 1.4rem;
      font-weight: 700;
      text-align: center;
    }

    .gender {
      font-size: 0.95rem;
      margin-top: 0.7rem;
      color: #a0a0a0;
    }
  }

  .contacts {
    display: flex;
    margin: 0 auto;

    .phone {
      font-size: 1.4rem;
      align-self: flex-end;
      margin: 1.6rem 0 1rem 0;

      a {
        cursor: pointer;
        color: inherit;
      }
    }
  }

  @media (max-width: 30rem) {
    width: 14.5rem;
    max-width: 14.5rem;

    .phone {
      display: flex;
      align-items: center;
      flex-direction: column;

      a {
        margin-top: 0.8rem;
      }
    }
  }
`