import React from 'react'
import '../App.css'
import {Grid, Cell} from 'react-mdl'


const MainPage = () =>(
    <div className='banner'>
        <div className='text-banner'>
            <h2>Full Stack Developer</h2>
            <hr/>
            <p>
                JavaScript | NodeJs | React | HTML/CSS | Express | MongoDB
            </p>

            <div className='social-links'>
                        <a href='http://google.com' target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-linkedin-square' aria-hidden='true' />
                        </a>

                        <a href='http://google.com' target='_blank' rel='noopener noreferrer'>
                            <i class="fa fa-github-square" aria-hidden="true"></i>
                        </a>
                    </div>
            </div>
            
        <div className='img'>
            <img
                className='avatar'
                src='/img/avatar.png'
                alt='avatar'
            />
        </div>
    </div>
)

export default MainPage;