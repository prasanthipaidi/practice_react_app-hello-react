import styles from './CountsDisplay.module.css'
function CountsDisplay(props){
    return (
       <div className={styles.countsDataDisplay}>
           <div className={styles.count}>{props.cnt}</div>
           <div className={styles.text}>{props.txt}</div>
       </div>
    )
}
export default CountsDisplay;