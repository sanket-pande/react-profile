import Section from '../../components/section/Section';
import styles from './Contact.module.scss'

const Contact = () => {
    return (
        <Section className={styles.contact} title="Contact Me" id="contact">
            <p>Email: sanketpande99001@gmail.com</p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/sanket-pande" target="_blank" rel="noopener noreferrer">Sanket Pande</a></p>
            <p>GitHub: <a href="https://github.com/sanket=pande" target="_blank" rel="noopener noreferrer">Sanket Pande</a></p>
        </Section>
    );
}

export default Contact;
