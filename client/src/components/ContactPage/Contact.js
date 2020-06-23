import React from 'react'
import { List, ListItem, ListItemContent } from 'react-mdl'
import Footer from '../Footer/Footer'
import './Contact.css'

const Contact = () => (
    <div>
    <div className='contact-container'>
        <div className='contact-item'>
            <h2>Toyo Udosen</h2>
            <img
                className='avatar-two'
                src='/img/me-two.png'
                alt='avatar'
            />
            <p className='about'> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum tristique justo, eget consequat nulla sagittis eget. Curabitur quis sollicitudin magna, a euismod sem. Fusce mollis placerat metus, sed volutpat ipsum lobortis eget. Vestibulum ac nisl neque. Maecenas a molestie leo, a lacinia nisl. Proin dolor augue, rhoncus in molestie eget, convallis in elit. Ut sem ante, cursus molestie mollis vitae, tempor a ex. Pellentesque eu porta enim. Mauris eros purus, gravida vel lacinia in, vehicula sed leo. In sed dui nunc. Aenean vitae magna magna. Etiam maximus pulvinar felis a vulputate. 
            </p>
        </div>
        <div className='contact-item contact-center'>
            <h2>Contact Me</h2>
            <hr/>
            <div className='contact-list'>
                <List >
                    <ListItem>
                        <ListItemContent>
                            <i class="fa fa-phone-square" aria-hidden="true"> 1 (346) 252-2540</i>
                        </ListItemContent>
                    </ListItem>
                    <ListItem>
                        <ListItemContent>
                            <i class="fa fa-envelope" aria-hidden="true"> <a href='mailto:toyo.i.udosen@gmail.com'>toyo.i.udosen@gmail.com</a> </i>
                        </ListItemContent>
                    </ListItem>
                </List>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
)

export default Contact;