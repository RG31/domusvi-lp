import { useState } from 'react'
// npm install emailjs-com --save 
import emailjs from 'emailjs-com'
import background from './ehpad.jpeg'
import logo from './coeur.png'
//      <img src={logo}></img>

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: ''
}

export const Contact = (props) => {
  const [{ name, email, message, phone }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message, phone)
    emailjs
      .sendForm(
        'service_eqi2aez', 'template_5fn44tk', e.target, 'user_Jf6dGf94PvBbsbQ44wxg9'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          /*alert("Email envoyé avec succès! Merci pour votre confiance");*/

        },
        (error) => {
          console.log(error.text)
        },
        // Clear and reset form input fields
         e.target.reset()
      )
  }
  return (
    <div>
      <div id='contact' >
        <div className='container'>
        <div className='col-md-8'>
            <div className='contact-text'>
              <h2>DomusVi</h2>
              <h1>Nos Résidences</h1>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem at magnam reprehenderit natus ab ipsa repudiandae porro distinctio recusandae, officia dicta rerum iure alias harum quod blanditiis dolorum reiciendis quam.               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem at magnam reprehenderit natus ab ipsa repudiandae porro distinctio recusandae, officia dicta rerum iure alias harum quod blanditiis dolorum reiciendis quam.
                </p>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <div className=''>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Nom'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='texte'
                        id='surname'
                        name='surname'
                        className='form-control'
                        placeholder='Prénom'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>


                  <div className='col-md-12'>
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

                  <div className='col-md-12'>
                    <div className='form-group rounded-lg'>
                      <input
                        type='text'slected
                        id='phone'
                        phone='Téléphone'
                        className='form-control'
                        placeholder='Téléphone'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  
                  <div className='col-md-12'>
                    <div className='form-group'>
                    <label for="inlineFormCustomSelect">Vos préférences pour un séjour : </label>
                    <select id="inlineFormCustomSelect">
                      <option selected>Choisissez...</option>
                      <option value="1">Accueil en urgence</option>
                      <option value="2">Court séjour</option>
                      <option value="3">Autres</option>
                    </select>
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
                  Envoyer
                </button>
              </form>
            </div>
          </div>
 
        </div>
      </div>
    
    </div>
  )
}
