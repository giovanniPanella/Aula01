import styles from './Avatar.module.css';

export function Avatar(props) {  
    const hasBorder= props.hasBorder != false;
  return (
    <
        img src={props.src} 
        className={hasBorder ? styles.avatarComBorda : styles.avatar} 
    />
  );
}
