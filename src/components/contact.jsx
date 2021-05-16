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
  message: '',
  label: ''
}

export const Contact = (props) => {


  const [showResults, setShowResults] = useState(false)
  console.log ("showResults", showResults ,)
  const onClick = () => setShowResults(true)

  const Results = () => (
    <div className='container'>
      <div className='row-lp'>
      <div className='col-md-4'>
      <h4 className="thanks"> Merci! Nous avons bien pris en compte votre demande</h4>  
 </div>
 </div>
 </div>

  )
  

  const [{ name, surname, email, phone, message, label }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(" name: ", name, " surname: ", surname, " email: ", email, " phone: ", phone ," message: ", message, " value: ", label )
    emailjs
      .sendForm(
        'service_eqi2aez', 'template_5fn44tk', e.target, 'user_Jf6dGf94PvBbsbQ44wxg9'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
           onClick() 
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
          <div className='col-md-6'>
                <div className='contact-text'>
                <img
                  src='img/DomusVi_logo_coul_baseline.png'
                  className='img-responsive'
                  alt='domusVi'
                />{' '}
              
                <h2>3 EHPAD DomusVi en Haute-Garonne (31)</h2>
                </div>
                <div id="shadow">
                <img
                      src='img/sdv.png'
                      className='img-responsive'
                      alt='domusVi'
                    />{' '}
                </div>
          </div>
          <div className='col-md-1'>
          </div>

          <div className='col-md-5'>
            <div className='form'>
              <div >
              </div>
              <h3> Tél : 05.67.78.89.90 <br></br> Nous vous rappelons</h3>
             
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row lp'>
                <div className='col-md-12'>
                    <div className='form-group'>
                    <label for="inlineFormCustomSelect"> </label>
                    <select id="inlineFormCustomSelect">
                      <option selected>Vous recherchez une résidence à </option>
                      <option value="1">Toulouse</option>
                      <option value="2">Blagnac</option>
                      <option value="3">Indifférent</option>
                    </select>
                    </div>
                  </div>
                  
                  <div className='col-md-12'>
                    <div className='form-group'>
                    <label for="inlineFormCustomSelect"></label>
                    <select id="inlineFormCustomSelect">
                      <option selected>Délai de votre séjour</option>
                      <option value="1">Urgent</option>
                      <option value="2">1 à 3 mois</option>
                      <option value="3">Supérieur à 3 mois</option>
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
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email*'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>

                  <div className='col-md-12'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='phone'
                        name='phone'
                        className='form-control'
                        placeholder='Téléphone*'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                    
                    <div className='col-md-12'> 
                    { showResults ? <Results /> : null } 
                    </div>
                  
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
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}
