import React from 'react'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'

const FooterMem = () => {
  const links = [
    {
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
      <Container fluid className='d-flex foc align-items-center justify-content-between pt-3 pb-3'>
       <NavLink className="text-decoration-none text-dark" to="/"> <div className='ffor'>Medium</div></NavLink>
        <div>
          {
            links.map((v, i) => {
              return (
                <a key={i} href={v.href} className=" me-3 text-dark fsl">{v.text}</a>
              )
            })
          }
        </div>
      </Container>
    </div>
  )
}

export default FooterMem