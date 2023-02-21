import React from 'react'
import'./portfolio.css'
import IMG1 from '../../assests/portfolio1.png'
import IMG2 from '../../assests/portfolio2.png'
import IMG3 from '../../assests/portfolio3.png'
import IMG4 from '../../assests/portfolio4.png'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'The Ultimate Trivia Game for Knowledge Seekers',
        github: 'https://github.com/AmmarahZaveri/CapStone-Project-1-6',
    },

    {
        id: 2,
        image: IMG2,
        title: 'A Movie Watchlist with all the latest entertainment',
        github: 'https://github.com/AmmarahZaveri/Movie-watchlist-week10',
    },

    {
        id: 3,
        image: IMG3,
        title: 'A compilation of your everyday games',
        github: 'https://github.com/AmmarahZaveri/Unit-1-Tic-Tac-Toe',
    },

    {
        id: 4,
        image: IMG4,
        title: 'An Eatery website where you can find and create recipies',
        github: 'https://github.com/AmmarahZaveri/Eatery-Website-React-3',
    },

    {
        id: 5,
        image: IMG5,
        title: 'A Social Platform to post and interact: Social Mountain',
        github: 'https://github.com/AmmarahZaveri/Social-Mountain-reactt',
    },
    {
        id: 6,
        image: IMG6,
        title: 'A Country Explorer Website with information on any country',
        github: 'https://github.com/AmmarahZaveri/react-proj-5',
    },
]




const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
               {
                data.map(({id, image, title, github}) => {
                    return (
                        <article key={id} className='portfolio_item'>
                        <div className='portfolio_item-image'>
                            <img src={image} alt= {title}/>
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio_item-cta">
                            <a href= {github} className='btn' target='_blank'>Github</a>
                        </div>
                    </article>
                    )
                })
               }
            </div>
        </section>
    )
}

export default Portfolio