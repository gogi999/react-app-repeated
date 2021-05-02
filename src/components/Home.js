import logo from '../assets/images/logo.png';
import '../assets/styles/site.css';

const styles = {
    image: {
        width: '300px'
    },
    title: {
        fontSize: '3em'
    }
}

const Home = () => {
    return (
        <div className="container">
            <img src={logo} alt="logo" style={styles.image} />
            <div style={styles.title}>Welcome to my First ReactApp</div>
        </div>
    );
}

export default Home;
