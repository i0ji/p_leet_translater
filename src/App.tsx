import styles from "./App.module.scss";
import TextBlock from './components/TextBlock/TextBlock';

export default function App() {
    return (
        <div className={styles.App}>
            <TextBlock/>
        </div>
    );
}