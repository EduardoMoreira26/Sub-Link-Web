import { Carousel } from 'antd';
import { Container, Content } from '../styles/components/SlideIntro'

export default function onChange() {

  return (
    <Container>
      <Carousel afterChange={onChange}>
        <Content>
          <p>slide 1</p>
        </Content>
        <Content>
         <p>slide 2</p>
        </Content>
        <Content>
          <p>slide 3</p>
        </Content>
        <Content>
          <p>slide 4</p>
        </Content>
      </Carousel>
    </Container>

  );

}



