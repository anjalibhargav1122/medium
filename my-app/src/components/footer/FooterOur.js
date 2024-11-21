import React from 'react'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'

const FooterOur = () => {
    const links = [{
        "text": "About",
        "href": "#"
    }, {
        "text": "Terms",
        "href": "#"
    }, {
        "text": "Privacy",
        "href": "#"
    },

    {
        "text": "Help",
        "href": "#"
    },

    {
        "text": "Teams",
        "href": "#"
    },

    {
        "text": "Press",
        "href": "#"
    }


    ]
    return (
        <div>
            <Container fluid className='bg-white pt-4 pb-4 ps-4 pe-4 d-flex justify-content-between align-items-center foc'>
            <NavLink className="text-decoration-none text-dark" to="/"><p className='for'>Medium</p></NavLink>    <div>{
                    links.map((v, i) => {
                        return (
                            <a key={i} href={v.href} className=" me-3 text-dark fsll ">{v.text}</a>
                        )
                    })
                }</div>
            </Container>
        </div>
    )
}

export default FooterOur