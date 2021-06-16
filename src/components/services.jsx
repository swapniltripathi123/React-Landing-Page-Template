import {Link,Switch,Route} from 'react-router-dom';
import Engineering from '../pages/Engineering';
import Environment from '../pages/Environment';
import './services.css';
export const Services = (props) => {
  return (
<<<<<<< users/akde/AddCss
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`}>
                  <div className='portfolio-items'>
                    <div className='col-sm-6 col-md-4 col-lg-4'>
                      <div className='portfolio-item'>
                        <div className='hover-bg'>
                          <a href="https://www.google.com"  target="_blank">
                            <div className='hover-text'>
                              <h4>{d.name}</h4>
                            </div>
                            </a>
                            <img
                              src={d.icon}
                              className='img-responsive'
                              alt='Project Title'
                            />
                        </div>{' '}
                      </div>
                    </div>
                    </div>
                    </div>
              ))
            : 'loading'}
            

      
  );
};
>>>>>>> master
