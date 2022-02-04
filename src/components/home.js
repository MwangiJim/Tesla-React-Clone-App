import React from 'react';
import Header from './header';
import styled from 'styled-components';
import Section from './section';

function Home() {
  return (
          <Container>
            <Header />
              <Section
                model = 'Model 3'
                description = 'Order Online for TouchLess Delivery'
                backgroundImg = '/Images/model-3.jpg'
                leftButtonText = 'Custom Order'
                rightButtonText = 'Existing Inventory'
              />
              <Section
                model = 'Model S'
                description = 'Order Online for TouchLess Delivery'
                backgroundImg = '/Images/model-s.jpg'
                leftButtonText = 'Custom Order'
                rightButtonText = 'Existing Inventory'
              />
              <Section
                model = 'Model X'
                description = 'Order Online for TouchLess Delivery'
                backgroundImg = '/Images/model-x.jpg'
                leftButtonText = 'Custom Order'
                rightButtonText = 'Existing Inventory'
              />
               <Section
                model = 'Model Y'
                description = 'Order Online for TouchLess Delivery'
                backgroundImg = '/Images/model-y.jpg'
                leftButtonText = 'Custom Order'
                rightButtonText = 'Existing Inventory'
              />
               <Section
                model = 'New Interior'
                description = 'Order Online for TouchLess Delivery'
                backgroundImg = '/Images/new-interior.jpg'
                leftButtonText = 'Custom Order'
                rightButtonText = 'Existing Inventory'
              />
               <Section
                model = 'Solar Panel'
                description = 'Order Online for TouchLess Delivery'
                backgroundImg = '/Images/solar-panel.jpg'
                leftButtonText = 'Custom Order'
                rightButtonText = 'Existing Inventory'
              />
               <Section
                model = 'Solar Roof'
                description = 'Order Online for TouchLess Delivery'
                backgroundImg = '/Images/solar-roof.jpg'
                leftButtonText = 'Custom Order'
                rightButtonText = 'Existing Inventory'
              />
               <Section
                model = 'Accessories'
                description = 'Order Online for TouchLess Delivery'
                backgroundImg = '/Images/accessories.jpg'
                leftButtonText = 'Custom Order'
              />
          </Container>
  )
}

export default Home;

let Container = styled.div`
    height:100vh;
`

 