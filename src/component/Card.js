import Card from 'react-bootstrap/Card'

export default function CARD() {
    return (
        <div>

            <Card.Body>
                <Card>
                    <div style={{ height: '200px', backgroundColor: 'rgb(220,220,220)', width: '100%', display: 'flex', gap: '30px', justifyContent: 'center' }}>

                        <div style={{ backgroundColor: '#3C99DC' }}>
                            <Card.Body>
                                <h1 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>ABOUT US</h1>
                            </Card.Body>
                        </div>
                        <div>
                            <img src='https://files.oyebesmartest.com/uploads/preview/-501567668725ri0kwvwyuz.jpg' style={{ borderRadius: '50%', height: '100px', width: '100px' }} alt='' />

                            <p style={{ justifyContent: 'center', textAlign: 'center', marginTop: '10px' }}>Lindo, CEO</p>
                        </div>
                        <p style={{ maxWidth: '200px', maxHeight: '100px' }}>Karma is a free Bootstrap template for e-commerce websites. It is a trendy, stylish, and dynamic web canvas,
                            perfectly suitable for online shopping, e-commerce sites, online clothing shops, and other fashion
                            and apparel related organizations. Built with HTML5 & CSS3, this web skin is 100% responsive, highly-optimized,
                            and well-capable for all the recent browsers.</p>
                    </div>

                </Card>

            </Card.Body>
            <Card.Body>
                <Card>
                    <div style={{ height: '200px', backgroundColor: 'rgb(220,220,220)', width: '100%', display: 'flex', gap: '30px', justifyContent: 'center' }}>
                        <div>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLc8j2eVHP6JsHbOWKuor1PrCoiRfAN9xden83CXR7OFx8jiN4IRQos4-GBJvu-upv3cI&usqp=CAU' style={{ borderRadius: '50%', height: '100px', width: '100px' }} alt='' />
                            <p style={{ justifyContent: 'center', textAlign: 'center', marginTop: '10px' }}>Nancy</p>
                            <p style={{ justifyContent: 'center', textAlign: 'center', marginLeft: '4px' }}>Manager</p>
                        </div>
                        <div>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMp12xuSf3cI25IG9Dp4_wf5Eza0cIQ-MG-Q&usqp=CAU' style={{ borderRadius: '50%', height: '100px', width: '100px' }} alt='' />
                            <p style={{ justifyContent: 'center', textAlign: 'center', marginTop: '10px' }}>Mary</p>
                            <p style={{ justifyContent: 'center', textAlign: 'center' }}>Designer</p>
                        </div>
                        <div>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ028lTMF9No7YkvqwbEr1hSlBrh7O-p-mEFA&usqp=CAU' style={{ borderRadius: '50%', height: '100px', width: '100px' }} alt='' />
                            <p style={{ justifyContent: 'center', textAlign: 'center', marginTop: '10px' }}>Helen</p>
                            <p style={{ justifyContent: 'center', textAlign: 'center' }}>Artist</p>
                        </div>
                        <div style={{ backgroundColor: '#3C99DC' }}>
                            <Card.Body>

                                <h1 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>OUR TEAM</h1>

                            </Card.Body>
                        </div>
                    </div>

                </Card>

            </Card.Body>


            <Card.Body>
                <Card>
                    <div style={{ height: '200px', backgroundColor: 'rgb(220,220,220)', width: '100%', display: 'flex', gap: '30px', justifyContent: 'center' }}>

                        <div style={{ backgroundColor: 'orange' }}>
                            <Card.Body>
                                <h1 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>SERVICES</h1>
                            </Card.Body>
                        </div>
                        <div style={{ backgroundColor: '#3C99DC' }}>
                            <Card.Body>
                                <h1 style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>SERVICES</h1>
                            </Card.Body>
                        </div>
                    </div>

                </Card>

            </Card.Body>
        </div>
    )
}