import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from "../logo.svg";
import styled from 'styled-components'

export default class NavBar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
                <Link to="/">
                    <h4>Home</h4>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Artworks
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <h4>Cart</h4>
                    </ButtonContainer>
                </Link>
            </nav>

        )
    }
}

const ButtonContainer = styled.button`
 font-size:1.4rem;
 background:transparent;
 border:0.1rem solid var(--mylightBlue);
 color:var(--myGreen);
 padding:0.2rem 2rem;
 margin:0.2rem 0.5rem 0.2rem 0;
 transition:all 0.5s ease-in-out;
 &:hover{
     background:var(--mylightBlue);
     color:var(--myBlue);
 }
 &:focus{
     outline:none;
 }
`
