import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../Containers/Container'
import ContainerChild from '../../Containers/Container/ContainerChild'
import LayoutContainer from '../../Containers/LayoutContainer'
import LayoutContainerChild from '../../Containers/LayoutContainer/LayoutContainerChild'
import Content from '../../Content'
import Header from '../../Header'
import Button from '../../Header/Button'
import './Settings.css'
const Settings = () => {
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
                            <ContainerChild>
                                <ul className="settings-list">
                                    <li>
                                        <Link to="/settings/customFood">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="26.378" height="26.863" viewBox="0 0 26.378 26.863">
                                                <g transform="translate(-4.617)">
                                                    <path d="M88.284,166.273l-2.061,2.04-.76-.85a.787.787,0,0,0-1.174,1.048L85.6,169.98a.788.788,0,0,0,1.141.035l2.65-2.623a.787.787,0,0,0-1.108-1.118Z" transform="translate(-75.303 -157.333)" />
                                                    <path d="M213.874,200.934h4.46a.787.787,0,0,0,0-1.574h-4.46a.787.787,0,0,0,0,1.574Z" transform="translate(-197.532 -188.9)" />
                                                    <path d="M88.284,260.868l-2.061,2.04-.76-.851a.787.787,0,0,0-1.174,1.048l1.312,1.469a.787.787,0,0,0,1.141.035l2.65-2.623a.787.787,0,0,0-1.108-1.119Z" transform="translate(-75.303 -246.965)" />
                                                    <path d="M88.284,355.463l-2.061,2.04-.76-.85a.787.787,0,0,0-1.174,1.048L85.6,359.17a.788.788,0,0,0,1.141.035l2.65-2.623a.787.787,0,0,0-1.108-1.118Z" transform="translate(-75.303 -336.597)" />
                                                    <path d="M213.9,295.534h2.187a.787.787,0,0,0,0-1.574h-2.209a.787.787,0,0,0-.786.824A.8.8,0,0,0,213.9,295.534Z" transform="translate(-197.532 -278.537)" />
                                                    <path d="M29.014,17.593a4.2,4.2,0,0,0,.784-3.9.787.787,0,0,0-.624-.624,4.63,4.63,0,0,0-3.416.4V5.576A1.839,1.839,0,0,0,23.922,3.74H21.087a2.373,2.373,0,0,0-2.235-1.582H17.7a2.545,2.545,0,0,0-5.031,0H11.523A2.373,2.373,0,0,0,9.289,3.74H6.453A1.838,1.838,0,0,0,4.617,5.576v19.45a1.838,1.838,0,0,0,1.836,1.836h21.06a2.68,2.68,0,0,0,1.787-1c2.765-3.418,1.766-6.923-.286-8.274Zm-.679-3.063a2.361,2.361,0,0,1-.471,1.989,2.884,2.884,0,0,1-2.1.584c-.091-2.02.824-2.759,2.573-2.573ZM11.406,3.74c.087-.012-.058-.008,2.024-.008a.787.787,0,0,0,.787-.787v-.4a.971.971,0,1,1,1.941,0v.4a.787.787,0,0,0,.787.787c2.081,0,1.939,0,2.024.008a.8.8,0,0,1,0,1.574c-.092.013-7.462.014-7.563,0a.8.8,0,0,1,0-1.574Zm4.936,18.22h2.619a6.857,6.857,0,0,0,1.249,3.329H6.453a.262.262,0,0,1-.262-.262V5.576a.262.262,0,0,1,.262-.262H9.289A2.373,2.373,0,0,0,11.523,6.9h7.329a2.373,2.373,0,0,0,2.235-1.582h2.835a.263.263,0,0,1,.262.262V17.35a3.112,3.112,0,0,0-1.792-.31,4.136,4.136,0,0,0-3.32,3.346H16.342a.787.787,0,1,0,0,1.574Zm11.735,2.917a1.221,1.221,0,0,1-.647.412H22.585a1.2,1.2,0,0,1-.719-.412c-2.577-3.185-.943-6.065.725-6.276a1.874,1.874,0,0,1,1.747.909.787.787,0,0,0,1.268,0,1.874,1.874,0,0,1,1.747-.909c1.668.211,3.3,3.09.725,6.276Z" />
                                                </g>
                                            </svg>
                                            Eigene Nahrungsmittel verwalten
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/settings/rda">
                                            <svg id="ziel" xmlns="http://www.w3.org/2000/svg" width="79.281" height="79.281" viewBox="0 0 79.281 79.281">
                                                <g id="Gruppe_16" data-name="Gruppe 16">
                                                    <g id="Gruppe_15" data-name="Gruppe 15">
                                                        <path id="Pfad_6" data-name="Pfad 6" d="M74.4,37.318A34.89,34.89,0,0,0,41.963,4.88V0H37.318V4.88A34.89,34.89,0,0,0,4.88,37.318H0v4.645H4.88A34.89,34.89,0,0,0,37.318,74.4v4.88h4.645V74.4A34.89,34.89,0,0,0,74.4,41.963h4.88V37.318ZM37.318,9.534v9.332A20.943,20.943,0,0,0,18.866,37.318H9.534A30.244,30.244,0,0,1,37.318,9.534Zm0,60.213A30.244,30.244,0,0,1,9.534,41.963h9.332A20.943,20.943,0,0,0,37.318,60.415Zm0-18.493v4.479a16.3,16.3,0,0,1-13.77-13.77h4.479V37.318H23.548a16.3,16.3,0,0,1,13.77-13.77v4.479h4.645V23.548a16.3,16.3,0,0,1,13.77,13.77H51.254v4.645h4.479a16.3,16.3,0,0,1-13.77,13.77V51.254Zm4.645,18.493V60.415A20.943,20.943,0,0,0,60.415,41.963h9.332A30.244,30.244,0,0,1,41.963,69.747ZM60.415,37.318A20.943,20.943,0,0,0,41.963,18.866V9.534A30.244,30.244,0,0,1,69.747,37.318Z" />
                                                    </g>
                                                </g>
                                                <g id="Gruppe_18" data-name="Gruppe 18" transform="translate(32.673 32.673)">
                                                    <g id="Gruppe_17" data-name="Gruppe 17">
                                                        <path id="Pfad_7" data-name="Pfad 7" d="M217.968,211a6.968,6.968,0,1,0,6.968,6.968A6.976,6.976,0,0,0,217.968,211Z" transform="translate(-211 -211)" />
                                                    </g>
                                                </g>
                                            </svg>
                                            Nährwerteziel verwalten
                                        </Link>
                                    </li>
                                </ul>
                            </ContainerChild>

                        </Container>
                    </LayoutContainerChild>
                </LayoutContainer>
            </Content>


        </>
    )
}

export default Settings