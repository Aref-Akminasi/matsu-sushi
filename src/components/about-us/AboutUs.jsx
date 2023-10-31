import Container from '../container/container';
import aboutImg from '../../assets/about-us.jpg';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles['about-section']} id="about">
      <Container className={styles.container}>
        <img src={aboutImg} />
        <p>
          Nestled in the heart of the city, Matsu Sushi serves as a beacon for
          sushi enthusiasts. Drawing inspiration from ancient Japanese
          traditions, our establishment marries the art of sushi-making with
          contemporary culinary techniques. <br />
          <br />
          At Matsu, every grain of rice tells a story, and every slice of fish
          sings a song. Our dedicated chefs, with years of experience under
          their belts, craft each dish meticulously, ensuring an unparalleled
          gastronomic journey for our patrons. <br />
          <br />
          Dine with us to experience not just food, but an intimate dance of
          flavors, textures, and culture. Welcome to Matsu Sushi — where
          tradition meets modernity and every bite is a testament to our
          passion.
        </p>
      </Container>
    </section>
  );
};

export default AboutUs;
