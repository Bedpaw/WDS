import React from "react";
import './Contact.css'
import { FaPhone,  } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineHome} from 'react-icons/ai';

class Contact extends React.Component {

  render() {
    return (
      <section>
        <h2>Kontakt</h2>
        <div className={'ContactContainer'}>
          <div className={"Address"}>
            <AiOutlineHome/> Kazimierza Tetmajera 2A, 81-406 Gdynia
          </div>
          <div className={"Phone"}>
            <FaPhone/> 531 373 343
          </div>
          <div className={"Email"}>
            <AiOutlineMail/> martasmuk80gmail.com
          </div>
          <iframe className={"Map"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1377.380853305633!2d18.547389034329377!3d54.50758541430927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda735a05ab68f%3A0x90c41f63eba72b53!2sKazimierza%20Tetmajera%202A%2C%2081-406%20Gdynia!5e0!3m2!1spl!2spl!4v1602501536251!5m2!1spl!2spl"
            width="100%" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false"
            tabIndex="0"></iframe>
        </div>
      </section>
    )
  }
}

export default Contact;
