import React from "react"
import styles from "./ConvertButton.module.scss"

export default function ConvertButton(props: any) {
    return (
        <button className={styles.ConvertButton} onClick={props.onClick}>
            ROLL ON!
        </button>
    )
}