import React from 'react'
import '../App.css'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

const Contact = () => (
    <div className='contact-body'>
        <Grid className='contact-grid'>
            <Cell col={6}>
                <h2>Toyoabasi Udosen</h2>
                <img
                    className='contact-img'
                    src='/img/avatar.png'
                    alt='avatar'
                    style={{height: '250px'}}
                />
                <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus nulla nec sapien cursus tempor. Curabitur urna lectus, molestie id malesuada ut, vulputate vel neque. Phasellus pretium neque quis nibh tincidunt, at aliquet risus euismod. Nulla bibendum orci scelerisque enim pulvinar consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin a bibendum erat. Sed venenatis maximus nibh hendrerit accumsan. Nam lobortis dui ac diam dictum mattis. 
                </p>
            </Cell>

            <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>

                <List>
                    <ListItem>
                        <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent icon="person">Aaron Paul</ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                    </ListItem>
                </List>

            </Cell>
        </Grid>
    </div>
)

export default Contact;