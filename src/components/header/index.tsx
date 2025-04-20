import Image from 'next/image';
import styles from './header.module.css';


const Header = () => {
    return <div className={styles.header}>
        <Image src="/images/logoo.png" alt="Logo" width={140} height={140} className={styles.logo} />
    </div>
}

export default Header;