import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section 
      title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
      />
     <Section
      title="Solar Panels"
      description="Lowest Cost Solar Panels in America"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      />
     <Section
      title="Solar Roofs"
      description="Produce Clean Energy From Your Roof"
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      />
     <Section
      title="Accessories"
      description=""
      backgroundImg="accessories.jpg"
      leftBtnText="Shop Now"
      />
     </Container>
    
  )
}

export default Home

const Container=styled.div`
  height:100vh;
`