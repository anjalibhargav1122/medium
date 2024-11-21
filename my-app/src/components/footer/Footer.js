import React from 'react'
import Container from 'react-bootstrap/Container'
import "./Footer.css"

const Footer = () => {
    const links = [
        {
            "text": "Help",
            "href": "#"
        },
        {
            "text": "Status",
            "href": "#"
        },
        {
            "text": "About",
            "href": "#"
        },
        {
            "text": "Careers",
            "href": "#"
        },
        {
            "text": "Press",
            "href": "#"
        },
        {
            "text": "Blog",
            "href": "#"
        },
        {
            "text": "Privacy",
            "href": "#"
        },
        {
            "text": "Terms",
            "href": "#"
        },
        {
            "text": "Text to speech",
            "href": "#"
        },
        {
            "text": "Teams",
            "href": "#"
        }
    ]
    return (
        <div>
            <Container className='bgfo text-center pt-4 pb-4' fluid>
                <Container>
                    {
                        links.map((v, i) => {
                            return (
                                <a key={i} href={v.href} className={i === 0 || i === 2 || i === 6 || i === 7 ? "text-decoration-none me-4 text-secondary fsl clr" : "text-decoration-none me-4 text-secondary fsl dn"}>{v.text}</a>
                            )
                        })
                    }
                </Container>
            </Container>
        </div>
    )
}

export default Footer