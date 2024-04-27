import styles from './App.module.css';
import RandomJoke from './components/RandomJoke';

function App() {
  return (
    <div class={styles.App}>
      <RandomJoke />
    </div>
  );
}

export default App;
