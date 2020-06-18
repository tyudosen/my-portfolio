import React from 'react'
import '../App.css'
import {Grid, Cell} from 'react-mdl'


const MainPage = () =>(
    <div style={{width: '100%', margin: 'auto'}} >
        <Grid className='mainPage-grid'>
            <Cell col={12}>
                <img
                    className='avatar-img'
                    src='/img/avatar.png'
                    alt='avatar'
                />

                <div className='banner-text'>
                    <h1>Full Stack Developer</h1>
                    <hr/>
                    <p>JavaScript | NodeJs | React | HTML/CSS | Bootstrap | Express | MongoDB </p>

                    <div className='social-links'>
                        <a href='http://google.com' target='_blank' rel='noopener noreferrer'>
                            <i className='fa fa-linkedin-square' aria-hidden='true' />
                        </a>

                        <a href='http://google.com' target='_blank' rel='noopener noreferrer'>
                            <i class="fa fa-github-square" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </Cell>
        </Grid>
    </div>
)

export default MainPage;