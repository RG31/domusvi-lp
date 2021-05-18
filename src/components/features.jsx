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
        <div className='col-md-12'>
            <h2>Lorem ipsum</h2>
            <h6>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elitAccusantium exercitationem officia adipisci, odio sapiente tenetur facere in vero praesentium, ratione, natus earum id accusamus nesciunt! Est itaque fugiat molestiae deleniti.</h6>
            </div>
      </div>

    </div>
  )
}
