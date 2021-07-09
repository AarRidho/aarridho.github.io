import Image from 'next/image';
import cx from 'classnames';
import styles from './sidebar.module.scss';

const Sidebar = ({ className }) => {
    const classNames = cx(styles.container, className);
    return (
        <aside className={classNames}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <Image src="/img/profile-1.jpg" height={100} width={100} alt="profile-image" />
                    </div>
                    <h5>Achmad Ahlar Ridha</h5>
                    <h6>Web Developer</h6>
                </div>
                <nav className={cx('navbar', styles.nav)}>
                    <ul>
                        <li>
                            <a href="#home">
                                <span>🏠 Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <span>🙋🏻‍♂️ About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#skills">
                                <span>📚 Skills</span>
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio">
                                <span>📒 Portfolio</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <span>📞 Contact</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.socials}>
                    <h6>Social Links:</h6>
                    <a href="https://www.instagram.com/_aru.ridho/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/aar-ridho/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                    <a href="https://github.com/AarRidho" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                </div>
                <div className={styles.footer}>
                    <span>© Copyright Aar Ridho.</span>
                    <br />
                    <span>Icons by <a href="https://icons8.com/">Icons8</a>.</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;