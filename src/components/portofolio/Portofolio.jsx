import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const Portofolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className='container portofolio__container'>
        <article className='portofolio__item'>
        <div className='portofolio__item-image'>
          <img src={IMG1} alt="" />

        </div>
        <h3>This ia a porttofolio item title</h3>
        <div className="portofolio__item-cta">
        <a href="https://github.com" className='btn'>Ghithub</a>
        <a href="https://dribbble.com/" className='btn btn-primary' targe='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portofolio__item'>
        <div className='portofolio__item-image'>
          <img src={IMG2} alt="" />

        </div>
        <h3>This ia a porttofolio item title</h3>
        <div className="portofolio__item-cta">
        <a href="https://github.com" className='btn'>Ghithub</a>
        <a href="https://dribbble.com/" className='btn btn-primary' targe='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portofolio__item'>
        <div className='portofolio__item-image'>
          <img src={IMG3} alt="" />

        </div>
        <h3>This ia a porttofolio item title</h3>
        <a href="https://github.com" className='btn'>Ghithub</a>
        <a href="https://dribbble.com/" className='btn btn-primary' targe='_blank'>Live Demo</a>
        </article>
        <article className='portofolio__item'>
        <div className='portofolio__item-image'>
          <img src={IMG4} alt="" />

        </div>
        <h3>This ia a porttofolio item title</h3>
        <div className="portofolio__item-cta">
        <a href="https://github.com" className='btn'>Ghithub</a>
        <a href="https://dribbble.com/" className='btn btn-primary' targe='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portofolio__item'>
        <div className='portofolio__item-image'>
          <img src={IMG5} alt="" />

        </div>
        <h3>This ia a porttofolio item title</h3>
        <div className="portofolio__item-cta">
        <a href="https://github.com" className='btn'>Ghithub</a>
        <a href="https://dribbble.com/" className='btn btn-primary' targe='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portofolio__item'>
        <div className='portofolio__item-image'>
          <img src={IMG6} alt="" />

        </div>
        <h3>This ia a porttofolio item title</h3>
        <div className="portofolio__item-cta">
        <a href="https://github.com" className='btn'>Ghithub</a>
        <a href="https://dribbble.com/" className='btn btn-primary' targe='_blank'>Live Demo</a>
        </div>
        </article>
      </div>
    </section>
  )
}

export default Portofolio

// https://youtu.be/G-Cr00UYokU
// interesting things, if you want to improuve a little it's good