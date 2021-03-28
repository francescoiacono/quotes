import classes from './App.module.css';
import Footer from './components/Footer/Footer';
import InfoPage from './components/InfoPage/InfoPage';
import Logo from './components/Logo/Logo';
import Quote from './components/Quote/Quote';

function App() {
  return (
    <main className={classes.App}>
      <Logo/>
      <Quote/>
      <Footer/>
      <InfoPage/>
    </main>
  );
}

export default App;
