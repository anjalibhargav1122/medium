import React, { useEffect, useRef, useState } from 'react'
import NavbarMem from '../components/navbar/NavbarMem'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import women from "../assets/women.jpg"
import uncle from "../assets/uncle.jpg"
import chines from "../assets/chines.jpg"
import Card from 'react-bootstrap/Card'
import { FaStar, FaCheck } from "react-icons/fa";
import { FaShieldHeart } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import FooterMem from '../components/footer/FooterMem';
import kai from "../assets/kai.png"
import kurtis from "../assets/kurtis.png"
import marlon from "../assets/marlon.png"
import qiunt from "../assets/qiunt.png"
import Sign from '../components/model/Sign';
import { useLocation } from 'react-router-dom';



const Member = () => {

  
  const [showSign, setShowSign] = useState(false);
  const handleShowSign = () => setShowSign(true);
  const handleCloseSign = () => setShowSign(false);

  const cdck = [
    {
      "text": "Read member-only stories"
    },
    {
      "text": "Support writers you read most"
    },
    {
      "text": "Earn money for your writing"
    },
    {
      "text": "Listen to audio narrations"
    },
    {
      "text": "Read offline with the Medium app"
    },
    {
      "text": "Access our Mastodon community"
    },
    {
      "text": "Connect your custom domain"
    },
    {
      "text": "Create your own publications"
    }
  ];

  const cdck2 = [
    {
      "text": "Give 4x more to the writers you read"
    },
    {
      "text": "Share member-only stories with anyone and drive more earnings for writers"
    },
    {
      "text": "Customize app icon"
    }
  ]

  const contx = [
    {
      "titl": "Reward writers",
      "tx": "Your membership directly supports the writers, editors, curators, and teams who make Medium a vibrant, inclusive home for human stories. A portion of your membership is allocated to the writers of the stories you read and interact with."
    },
    {
      "titl": "Unlock every story",
      "tx": "Get access to millions of original stories that spark bright ideas, answer big questions, and fuel bold ambitions."
    },
    {
      "titl": "Enhance your reading experience",
      "tx": "Immerse yourself in audio stories, read offline wherever you go, and connect with the Medium community on Mastodon."
    },
    {
      "titl": "Elevate your writing",
      "tx": "Create and contribute to publications to collaborate with other writers, create a custom domain for your profile, and level up your writing with our simple but powerful publishing tools."
    },
    {
      "titl": "Support a mission that matters",
      "tx": "Members are creating a world where original, human-crafted stories thrive. As a member-supported platform, quality comes first, not ads or clickbait."
    }
  ]

  const member = [
    {
      "titl": "Cassie Kozyrkov,",
      "tex": "Chief Decision Scientist at Google and Medium member",
      "img": women,
      "tx": "The easy path in social media is promoting the worst content, the cheapest, tackiest, lowest-effort stuff. That’s not what you get on Medium. You can actually find content you can build your brain with. I appreciate that, both as a reader and a writer."
    },
    {
      "titl": "Enrique Dans,",
      "tex": "Professor of Innovation at IE Business School and Medium member",
      "img": uncle,
      "tx": "Medium has proved a game-changer for me, and quickly became the subscription I value the most, and I have quite a few. The cost is nothing compared to the value Medium generates for me month after month."
    },
    {
      "titl": "Wenqi Glantz,",
      "tex": "Software Architect at ArisGlobal and Medium member",
      "img": chines,
      "tx": "For us tech folks, Medium membership unlocks a whole treasure trove of high-quality articles. One good technology book could sell for over the Medium membership fee amount. It’s your choice whether to buy one book, or buy hundreds and thousands of books by unlocking member-only reading on Medium. Investing in a Medium membership is one of the best investments I have ever made for my career."
    }
  ]


  const img = [
    {
      "img": "imgbg",
      "color": "clr2",
      "tx": "Don’t Just Set Goals. Build Systems",
      "tx1": "Kurtis Pykes",
      "tx2": "Author of Don't Just Set Goals. Build Systems",
      "img1": kurtis
    },
    {
      "img": "imgbg1",
      "color": "clr7",
      "tx": "AI and the Future of Work; What Stays 100% Human?",
      "tx1": "Cassie Kozyrkov",
      "tx2": "Chief Decision Scientist at Google",
      "img1": kurtis
    },
    {
      "img": "imgbg2",
      "color": "clr8",
      "tx": "Storytelling with Design: How to persuade your team with narrative",
      "tx1": "Kai Wong",
      "tx2": "Author of Data-informed UX Design",
      "img1": kai
    },
    {
      "img": "imgbg3",
      "color": "clr3",
      "tx": "How to Sleep on Hot Summer Nights; Science vs. Myth",
      "tx1": "Robert Roy Britt",
      "tx2": "Author of Make Sleep Your Superpower",
      "img1": kurtis
    }, {
      "img": "imgbg4",
      "color": "clr6",
      "tx": "How Can I Stop Focusing on the Bad Things in Life?",
      "tx1": "Kaki Okumura",
      "tx2": "Author of Wa: The Art of Balance",
      "img1": kurtis
    },
    {
      "img": "imgbg5",
      "color": "clr4",
      "tx": "How Starting an Investment Firm Almost Landed Me in a Federal Prison",
      "tx1": "Marlon Weems",
      "tx2": "Host of The Journeyman Unfiltered podcast",
      "img1": marlon
    },
    {
      "img": "imgbg6",
      "color": "clr5",
      "tx": "The Case For Reforesting Our Cities",
      "tx1": "Clive Thompson",
      "tx2": "Writer at Wired magazine and author of Coders",
      "img1": kurtis
    },
    {
      "img": "imgbg7",
      "color": "clr1",
      "tx": "Henrietta Lacks, Subjectivity, &amp; The Medical Exploitation of Women",
      "tx1": "Quintessa Williams",
      "tx2": "Writer for Cultured",
      "img1": qiunt
    }
  ]

  const [crntIx, setCrntx] = useState(0);

  useEffect(() => {
    const inter = setInterval(() => {
      setCrntx((preix) =>
        preix === img.length - 1 ? 0 : preix + 1
      )
    }, 2000);
    return () => clearInterval(inter)
  }, [img.length])



  const targetSection1 = useRef(null);

  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#member' && targetSection1.current) {
      targetSection1.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);


  const targetSection = useRef(null); 
  
  const scrollToPlans = () => {
    targetSection.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <NavbarMem />
      <Container fluid className='border-bottom border-dark'>
        <Row>
          <Col sm={12} md={7} lg={7} className={`pb-5  ps-5 ${img[crntIx].color}`}><h2 className='display-1 ffm mt-5 pt-3 pb-5 '>Support human stories</h2>
            <p className='pff fs-5 text-secondary mt-5 pt-5 w-75 mb-5'>Become a member to read without limits or ads, fund great writers, and join a global community of people who care about high-quality storytelling.</p>

            <button onClick={handleShowSign} className="btn btn-dark rounded-pill fmy  ps-3 pe-3" type="button"  >Get started</button>
            <button onClick={scrollToPlans} class="btn border-dark rounded-pill ms-3" type="submit">View plans</button></Col>
            <Col sm={12} md={5} lg={5} className='border-start border-dark position-relative overflow-hidden ps-0 pe-0 hitcol' >
            <div className={`${img[crntIx].img} w-100 h-100 hitcol d-flex flex-column justify-content-end ps-4 pb-5`}>
              <div className='bg-warning text-dark rounded-pill widbn d-flex align-items-center justify-content-center pt-2 pb-2 mb-4'> <FaStar className='me-2' /> Member-only story</div>
              <h3 className='mb-4'>{img[crntIx].tx}</h3>
              <Row>
                <Col sm={2} md={2} lg={2} ><img src={img[crntIx].img1} />
                </Col>
                <Col sm={10} md={10} lg={10} >
                  <p className='mb-0'>{img[crntIx].tx1}</p>
                  <p >{img[crntIx].tx2}</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Container ref={targetSection1}  fluid className='pt-4 mt-5 border-bottom border-dark'>
        <Row>
          <Col sm={12} md={6} lg={6} className='ps-5'><h2 className='display-2 ffm   pb-5 '>Why<br /> membership?</h2></Col>
          <Col sm={12} md={6} lg={6} className='pe-5 overflow-auto hico'>
            {
              contx.map((v, i) => {
                return (
                  <div key={i} className='mb-5 pb-5'>
                    <h3 className='display-5 ffm'>{v.titl}</h3 ><p className='of w-100 fs-5 mt-3 '>{v.tx}</p>
                  </div>
                )
              })
            }
          </Col>
        </Row>
      </Container>
      <Container fluid className='pt-4 mt-5 border-bottom border-dark'>
        <Row>
          <Col sm={12} md={6} lg={6} className='ps-5'><h2 className='display-2 ffm   pb-5 '>What members are saying</h2></Col>
          <Col sm={12} md={6} lg={6} className='pe-5 overflow-auto hico'>
            {
              member.map((v, i) => {
                return (
                  <Card key={i} className='mb-5 pb-2 border-0'>

                    <Card.Body>
                      <Row >
                        <Col sm={2} md={2} lg={2} > <Card.Img className='w-100 htimg rounded-circle  border' src={v.img} /></Col>
                        <Col sm={10} md={10} lg={10}><p className='of w-100 fs-5  '>{v.tx}</p>
                          <Card.Text><strong>{v.titl}</strong> {v.tex}</Card.Text></Col>
                      </Row>
                    </Card.Body>
                  </Card>
                )
              })
            }
          </Col>
        </Row>
      </Container>
      <Container fluid className=' mt-5  mb-5 pb-4' ref={targetSection}>
        <Row>
          <Col sm={12} md={6} lg={6} className='ps-5 pt-4'><h2 className='display-2 ffm   pb-5 '>Membership plans</h2></Col>
          <Col sm={12} md={6} lg={6} className='pe-5  overflow-auto hico'>
            <Row>
              <Col sm={12} md={6} lg={6} className='pt-4'>
                <Card >
                  <Card.Body><div className=' text-center mt-3'><FaStar className='text-warning fs-3' /></div>
                    <Card.Title className=' text-center fw-bold mt-4'>Medium Member</Card.Title>
                    <Card.Subtitle className="mb-4 text-center">$5/month or $60/year</Card.Subtitle>
                    <Button onClick={handleShowSign} variant='success' className='rounded-pill w-100'>Get started</Button>
                    <hr className='mt-4 mb-4' />
                    {
                      cdck.map((v, i) => {
                        return (
                          <div key={i} className='d-flex align-items-center mb-3'><FaCheck className='text-success me-3' />
                            <Card.Text className='fzs'>
                              {v.text}
                            </Card.Text>
                          </div>
                        )
                      })
                    }


                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6} lg={6} className='pt-4'>   <Card >
                <Card.Body><div className=' text-center mt-3'><FaShieldHeart className='text-warning fs-3' /></div>
                  <Card.Title className=' text-center fw-bold mt-4'>Friend of Medium</Card.Title>
                  <Card.Subtitle className="mb-4 text-center">$15/month or $150/year</Card.Subtitle>
                  <Button variant='success' onClick={handleShowSign} className='rounded-pill w-100'>Get started</Button>
                  <hr className='mt-4 mb-4' />
                  <div className='d-flex align-items-center '> <FaStar className='text-warning me-3' />  <Card.Text className='fzs'>
                    All Medium member benefits
                  </Card.Text></div>

                  <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
                    <div className='w-100 border-top border'></div>
                    <Card.Text className='fzs fs-6 mb-0 ms-3 me-3'>
                      PLUS
                    </Card.Text>
                    <div className='w-100 border-top border'></div>
                  </div>

                  {
                    cdck2.map((v, i) => {
                      return (
                        <div key={i} className='d-flex  mb-3'><FaCheck className={i === 1 ? 'text-success me-3 fs-2 ' : 'text-success me-3 mt-1'} />
                          <Card.Text className='fzs'>
                            {i === 0 ? <strong className='fs-6'>{v.text}</strong> : v.text}
                          </Card.Text>
                        </div>
                      )
                    })
                  }


                </Card.Body>
              </Card></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className={`border-bottom border-top  border-dark text-center pt-5 pb-5 ${img[crntIx].color}`}>
        <h2 className='display-2 ffm mt-4'>Unlock a world of wisdom</h2>
        <Button className='rounded-pill bg-dark text-white ps-3 pe-3 mt-5 mb-4' onClick={handleShowSign} variant=''>Get started</Button>
      </Container>

      <Sign openModal={showSign} handleClose={handleCloseSign} />
      <FooterMem />
    </div>
  )
}

export default Member
