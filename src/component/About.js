import Carousel from 'react-bootstrap/Carousel'
import './about.css'

export default function About() {
    return (
        <div className='About' style={{ textAlign: 'center' }}>
            <Carousel fade interval={1000}>
                <Carousel.Item >
                    <img

                        src="data:image/jpeg;base64,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"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img

                        src="data:image/png;base64,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"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2IRhoXEMHwclFxoT8YTMb2ZA7HLxVgqAmA&usqp=CAU"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}