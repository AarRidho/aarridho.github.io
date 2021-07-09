import PropTypes from 'prop-types';

import styles from './layout.module.scss';
import Sidebar from '@components/Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <Sidebar />
            <section id="parallax" className={styles.parallax}>

            </section>
            <main className={styles.main}>
                {children}
            </main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;