import { useState } from 'react'
// npm install emailjs-com --save 
import emailjs from 'emailjs-com'
// npm install --save reactstrap
// npm install = yarn

const initialState = {
  name: '',
  surname: '',
  email: '',
  phone: '',
}

export const Contact = (props) => {
  
  const [showResults, setShowResults] = useState(false)
  console.log ("showResults", showResults)
  const onClick = () => setShowResults(true)

  const Results = () => (
    <div className='container'>
      <div className='row-lp'>
       <div className='col-md-4'>
       <h4 className="thanks"> Merci ! Nous avons bien pris en compte votre demande</h4>  
       </div>
     </div>
    </div>
  )

  const [{ name, surname, email, phone}, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(
    " name: ", name, 
    " surname: ", surname, 
    " email: ", email, 
    " phone: ", phone, 
  )
    emailjs
      .sendForm(
       /* domusvi*/
       /*'service_qsp2rj1', 'template_205x3v9', e.target, 'user_M5d2VPZsG9UHjNUkSoVfN' */
        /* RG31*/
        'service_qra7ttk', 'template_kp2u4u3', e.target, 'user_8VEaqn0oNGu7ZWLJwP2Dm'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
          /*alert("Email envoyé avec succès! Merci pour votre confiance");*/
          onClick()
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
          <div className='col-md-6'>
                <div className='contact-text'>
                <h2>Les EHPAD DomusVi</h2>
                <h2 className="contact-text-title2"> en Haute-Garonne (31)</h2>
                </div>
                <div id="shadow">
                <img
                      src='img/Scene-de-vie-light.jpg'
                      className='img-responsive'
                      alt='domusVi'
                    />{' '}
                </div>
          </div>
          <div className='col-md-1'>
          </div>
          <div className='col-md-5'>
            <div className='form'>
              <div className="">
              </div>
              <h3> Nous contacter <br></br>Tél : 05 33 06 29 24</h3>
              <form className='formStyle' name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row lp'>
                <div className='col-md-12'>
                    <div className='form-group'>
                    <h3> Nous vous rappelons</h3>
                    <label for="Select1"> </label>
                    <select 
                    id="Select1"
                    name='Select1'
                    onChange={handleChange}
                    className="form-group-label-mine"
                    >
                      <option selected>Vous recherchez une résidence à </option>
                      <option value="Toulouse">Toulouse</option>
                      <option value="Blagnac">Blagnac</option>
                      <option value="Indifférent">Indifférent</option>
                    </select>
                    
                    </div>
                  </div>
                  <div className='col-md-12'><div className="bg-info"></div>
                    <div className='form-group'>
                    <label for='Select2'></label>
                    <select 
                    id='Select2'
                    name='Select2'
                    onChange={handleChange}
                    >
                      <option selected>Délai de votre recherche</option>
                      <option value="Urgent">Urgent</option>
                      <option value="1 à 3 mois">1 à 3 mois</option>
                      <option value="Supérieur à 3 mois">Supérieur à 3 mois</option>
                    </select>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Nom*'
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
                        placeholder='Prénom*'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='form-group'>
                    <input
                        type='tel'
                        id='phone'
                        name='phone'
                        Pattern="[0-9]{10}" 
                        size="10"
                        minlength="10" 
                        maxlength="10"
                        className='form-control'
                        placeholder='Téléphone* (10 chiffres)'
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
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                   <div className='form-check'>
                      <input type='checkbox' class='form-check-input' id="exampleCheck1" required/>
                      <label class='form-check-label'for='exampleCheck1'> J'accepte que mes données personnelles recueillies soient utilisées. </label>
                      <a href="https://www.domusvi.com/consentement" target="_blank" rel="noreferrer"> En savoir plus * </a>
                    </div>

                    <div className='col-md-12'> 
                    { showResults ? <Results /> : null } 
                    </div>
                  </div>
                <div id='success'></div>

                <button 
                  type='submit' 
                  className='btn btn-custom btn-lg'
                 /* onClick={onClick} */
                  >
                  Envoyer
                </button>
                </div>
              </form> 
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}
