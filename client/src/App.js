import React from 'react';
import './App.css'
import { Layout, Navigation, Drawer, Content, Header, Footer, FooterSection, FooterLinkList} from 'react-mdl'
import { NavLink } from 'react-router-dom'
import AppRouter from './Routers/AppRouter'

const MyHeader = () => (
  <div className="demo-big-content">
  <Layout>
      <Header className='header-color' title="Toyo Udosen" scroll>
          <Navigation>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/projects'>Projects</NavLink>
              <NavLink to='/resume'>Resume</NavLink>
              <NavLink to='/contact'>Contact</NavLink>
          </Navigation>
      </Header>
      <Drawer>
          <Navigation>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/resume'>Resume</NavLink>
            <NavLink to='/contact'>Contact me</NavLink>
          </Navigation>
      </Drawer>
      <Content>
          <div className="page-content" />
            <AppRouter/>
      </Content>
  </Layout>
  
</div>
)
export default MyHeader;