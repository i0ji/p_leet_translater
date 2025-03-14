import styles from "./App.module.scss";
import TextBlock from './components/TextBlock/TextBlock';

console.log('v: 1.0.0')

export default function App() {
    return (
        <div className={styles.App}>
            <TextBlock/>
        </div>
    );
}