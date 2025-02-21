import React from 'react'
import './Contact.css'
import sms from '../../assets/sms.png'
import gblue from '../../assets/gbue.png'
import phoneicon from '../../assets/phoneicon.webp'
import locationblue from '../../assets/locationblue.png'
import whiteright from '../../assets/whiteright.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "676defc0-b0d9-43fb-8fae-614c0b1a5c67");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };


  return (
   
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={sms} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={gblue} alt="" />ajayiopeyemi403@gmail.com</li>
            <li><img src={phoneicon} alt="" />+1 123-456-7890</li>
            <li><img src={locationblue} alt="" />77 Massachusetts Ave, Cambridge<br/> MA 01239, United States.</li>

        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
          <label>Write your messages here </label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit now<img src={whiteright} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact
