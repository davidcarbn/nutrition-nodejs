import React, { useState } from 'react'
import Food from '../../../../objects/Food'
import Container from '../../../Containers/Container'
import ContainerChild from '../../../Containers/Container/ContainerChild'
import LayoutContainer from '../../../Containers/LayoutContainer'
import LayoutContainerChild from '../../../Containers/LayoutContainer/LayoutContainerChild'
import Content from '../../../Content'
import FoodDetails from '../../../Food/FoodDetails'
import Header from '../../../Header'
import Button from '../../../Header/Button'

const DashboardDetails = (props) => {
    
    const food = props.location.state.food
    return (
        <>
            <Header>
                <Button target="/dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.429" height="14.03" viewBox="0 0 8.429 14.03">
                        <path d="M149.076,42.925l-5.6,5.6,5.6,5.6" transform="translate(-142.061 -41.511)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                    </svg>
                </Button>
            </Header>
            <Content>
                <LayoutContainer>
                    <LayoutContainerChild>
                        <Container>
                                <FoodDetails food={food} showName={false}/>
                        </Container>
                    </LayoutContainerChild>
                </LayoutContainer>
            </Content>
        </>
    )
}

export default DashboardDetails