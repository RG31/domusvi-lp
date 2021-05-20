export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/chambre-Toulouse-large.jpg'
                    title='Zoom'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4></h4>
                    </div>
                    <img
                      src='img/portfolio/chambre-Toulouse-small.jpg'
                      className='img-responsive'
                      alt='chambre'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/terrasse1-large.jpg'
                    title='Zoom'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4></h4>
                    </div>
                    <img
                      src='img/portfolio/terrasse1-small.jpg'
                      className='img-responsive'
                      alt='terrasse'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <div className='portfolio-item'>
                <div className='hover-bg'>
                  {' '}
                  <a
                    href='img/portfolio/restaurant-large.jpg'
                    title='Zoom'
                    data-lightbox-gallery='gallery1'
                  >
                    <div className='hover-text'>
                      <h4></h4>
                    </div>
                    <img
                      src='img/portfolio/restaurant-small.jpg'
                      className='img-responsive'
                      alt='restaurant'
                    />{' '}
                  </a>{' '}
                </div>
              </div>
            </div>
      
    </div>

   </div>
   
 </div>
</div>
  )
}
