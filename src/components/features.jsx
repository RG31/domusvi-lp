export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-2'>
                  {' '}
                  <img 
                  className='img-responsive'
                  src={d.icon} 
                  alt="mon_image" 
                  title="mon_image" />
                  <h5>{d.title}</h5>
                </div>
              ))
            : 'Loading...'}
        </div>
        <div className='contact-text'>
        <div className='col-md-12'>
            <h3>Pourquoi choisir nos maisons de retraite (EHPAD) en Haute-Garonne ?</h3>
            <h6>Situés à Toulouse et Blagnac, nos EHPAD vous proposent un accompagnement personnalisé par des équipes
               de professionnels attentifs à la santé et au bien-être des personnes accueillies. 
               Nous mettons un point d'honneur à préserver une ambiance familiale et conviviale favorisant le lien social au sein de nos maisons. 
               Tout au long de la semaine, les résidents peuvent participer à des activités variées, à visée ludique et/ou thérapeutique, selon 
               leur rythme et leurs envies : ateliers mémoire, gymnastique douce, jeux de société, ateliers artistiques et manuels, échanges 
               intergénérationnels… Des sorties sont également organisées : promenades, shopping, visites culturelles… Les menus servis dans 
               les restaurants de nos résidences sont élaborés sur place par nos chefs cuisiniers ; ils privilégient les produits frais de saison 
               et sont validés par une diététicienne.<br></br>
            </h6>
              <details>
                <summary>
                  <span id="open"> Lire plus ...</span>
                  <span id="close"> Fermer ...</span>
                </summary>
                <h6>
             Nos résidences disposent d'espaces de vie spacieux à la décoration soignée, ouverts sur l'extérieur grâce à leurs terrasses et 
             jardin aménagés. Les chambres sont meublées et peuvent être personnalisées avec du petit mobilier et des objets de décoration personnels. 
             Elles disposent toutes d'une salle d'eau individuelle adaptée aux personnes à mobilité réduite. <br></br>
             Pour répondre au mieux à vos besoins, nos maisons de retraite offrent la possibilité de faire de courts séjours et des séjours permanents.
              Nos résidences sont médicalisées et disposent d'unités Alzheimer pour accueillir dans des espaces dédiés les personnes âgées atteintes de 
              cette maladie ou de troubles apparentés.</h6>
              </details>
        </div>
        </div>
      </div>
    </div>
  )
}
