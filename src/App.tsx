import React from 'react';
import styles from './App.module.scss';
//import TestComponent from './components/TestComponent/TestComponent';
import TextBlock from './components/TextBlock/TextBlock';

export default function App() {
  return (
    <div className={styles.App}>
      <TextBlock/>
    </div>
  );
}