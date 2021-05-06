import { useState } from 'react'
// npm install emailjs-com --save 
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'service_eqi2aez', 'template_5fn44tk', e.target, 'user_Jf6dGf94PvBbsbQ44wxg9'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        },
        // Clear and reset form input fields
        // e.target.reset()
      )
  }
  return (
    
    <div>
      <div id='contact'>
        <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-8'>
            <div className='about-text'>
              <h2>MODUSVI, NOS RESIDENCES SENIOR </h2>
              <p>blavblabla</p>
              <h3>Why Choose Us?</h3>
              <div className='list-style'>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-md-6'>

              <div className='section-title'>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                <div className='col-xs-12 col-md-4
                
                
                
                
                '>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          </div>
      </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 By Regina31 React Land Page . Design by{' '}
            <a href='http://' rel='nofollow'>
             
            </a>
          </p>
        </div>
      </div>
    </div>
  
  )
}
