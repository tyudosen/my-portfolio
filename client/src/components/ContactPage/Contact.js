import React from "react";
import { List, ListItem, ListItemContent } from "react-mdl";
import Footer from "../Footer/Footer";
import "./Contact.css";

const Contact = () => (
  <div>
    <div className="contact-container">
      <div className="contact-item">
        <h2>Toyo Udosen</h2>
        <img className="avatar-two" src="/img/me-two.png" alt="avatar" />
        <p className="about">
          I am a Computer Science graduate from Sam Houston State University
          with a passion for building web and mobile applications. I enjoy
          solving complex problems with code. I am always learning new
          technologies and working on side projects. I am currently looking for
          a position as a fullstack developer.
        </p>
      </div>
      <div className="contact-item contact-center">
        <h2>Contact Me</h2>
        <hr />
        <div className="contact-list">
          <List>
            <ListItem>
              <ListItemContent
                style={{ fontSize: "30px", fontFamily: "Anton" }}
              >
                <i class="fa fa-phone-square" aria-hidden="true" />1 (346)
                252-2540
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent
                style={{ fontSize: "25px", fontFamily: "Anton" }}
              >
                <i class="fa fa-envelope" aria-hidden="true" />
                <a href="mailto:toyo.i.udosen@gmail.com">
                  toyo.i.udosen@gmail.com
                </a>
              </ListItemContent>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;
