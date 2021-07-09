import { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';

import Sidebar from '@components/Sidebar';
import styles from '@styles/page.module.scss';
import prefix from '@utils/prefix';

export default function Home() {
    const [open, setOpen] = useState(false);

    return (
        <main className={cx(styles.main, { [styles.open]: open })}>
            <i className="bi bi-list mobile-sidebar-toggle" onClick={() => setOpen(!open)}></i>
            <Sidebar className={styles.sidebar} />
            <section id="home" className={styles.parallax}>
                <div className={styles.overlay}></div>
                <div className={styles.shadow__overlay}></div>
                <div className={styles.hero}>
                    <div className={styles.hero__wrapper}>
                        <h1>🏠</h1>
                        <h3>Hi! My name is</h3>
                        <h1>Achmad Ahlar Ridha</h1>
                        <h4>I&lsquo;m a Web Developer👨🏻‍💻</h4>
                    </div>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <div className="section-title">
                        🙋🏻‍♂️ About
                    </div>
                    <div className="section-content">
                        <div className="container mb-4">
                            <div className="row">
                                <p>I&lsquo;m a 24 years old web developer who is currently focusing on Front End Development for Web Applications.
                                    I have knowledge of JavaScript Modern Front End Libraries such as React, JQuery, and more for more than 2+ Years.
                                </p>
                                <p>
                                    While my strong point is on Front End, sometimes i always do Back End stuff to create something like a REST API for The Front End Data Exchange.
                                </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-8 order-1 order-md-0">
                                    <h3>📔 Bio: </h3>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><strong>Birthday: </strong> 2 July 1997</li>
                                                <li className="list-group-item"><strong>City: </strong> Tangerang Selatan, Indonesia</li>
                                                <li className="list-group-item"><strong>Email: </strong> aar.frontline@gmail.com</li>
                                            </ul>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item"><strong>Age: </strong> 25</li>
                                                <li className="list-group-item"><strong>Degree: </strong> Bachelor</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 order-0 text-center mb-4">
                                    <Image src={`${prefix}/img/profile.jpg`} width={250} height={250} quality={100} alt="about-photo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills">
                <div className="container">
                    <div className="section-title">
                        📚 Skills
                    </div>
                    <div className="section-content">
                        <div className="container mb-4">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <p>
                                        I&lsquo;m also very confident in my set of skills:
                                    </p>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/js-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">JavaScript</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/html5-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">HTML 5</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/css3-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">CSS 3</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/php-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">PHP</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/python-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">Python</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '30%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/amazondb-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">SQL</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src="https://img.icons8.com/color/48/000000/new-spreadsheet.png" width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">Spreadsheet</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '75%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src="https://img.icons8.com/office/80/000000/console.png" width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">Unix</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '74%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/nodejs.jpg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">Node JS</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '74%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p>
                                        While my stacks are:
                                    </p>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/react-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">React</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '95%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/jquery-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">JQuery</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/nextjs-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">Next.js</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/laravel-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">Laravel</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src={`${prefix}/img/mysql-logo.svg`} width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">MySQL</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src="https://img.icons8.com/color/48/000000/postgreesql.png" width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">PostgreSQL</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '60%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src="https://img.icons8.com/color/48/000000/redis.png" width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">Redis</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '50%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src="https://img.icons8.com/color/48/000000/amazon-web-services.png" width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">AWS</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '30%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <h6></h6>
                                        <label className="d-flex align-items-center mb-2">
                                            <Image src="https://img.icons8.com/color/48/000000/azure-1.png" width="30px" height="30px" alt="js-logo" quality={100} />
                                            <span className="ms-2">Azure AD</span>
                                        </label>
                                        <div className="progress" style={{ height: '10px' }}>
                                            <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#4577c1', width: '35%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="portfolio">
                <div className="container">
                    <div className="section-title">
                        📒 Portfolio
                    </div>
                    <div className="section-content">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-4">
                                <div className="col">
                                    <div className="card">
                                        <figure className="enlarge">
                                            <a href="#">
                                                <div className="img-box">
                                                    <Image src={`${prefix}/img/siukat.png`} className="card-img-top" layout="fill" objectFit="cover" alt="..." />
                                                </div>
                                            </a>
                                            <div className="overlay-tool">
                                                <div className="overlay-desc">
                                                    <h5>Aplikasi Sistem Uang Kuliah Tunggal</h5>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <figure className="enlarge">
                                            <a href="#">
                                                <div className="img-box">
                                                    <Image src={`${prefix}/img/aplikasi-ujian.png`} className="card-img-top" layout="fill" objectFit="cover" alt="..." />
                                                </div>
                                            </a>
                                            <div className="overlay-tool">
                                                <div className="overlay-desc">
                                                    <h5>Aplikasi Ujian Pascasarjana (Front)</h5>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <figure className="enlarge">
                                            <a href="#">
                                                <div className="img-box">
                                                    <Image src={`${prefix}/img/sisca.png`} className="card-img-top" layout="fill" objectFit="cover" alt="..." />
                                                </div>
                                            </a>
                                            <div className="overlay-tool">
                                                <div className="overlay-desc">
                                                    <h5>Aplikasi Sistem Seleksi Pascasarjana UNJ</h5>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <figure className="enlarge">
                                            <a href="#">
                                                <div className="img-box">
                                                    <Image src={`${prefix}/img/multibank.png`} className="card-img-top" layout="fill" objectFit="cover" alt="..." />
                                                </div>
                                            </a>
                                            <div className="overlay-tool">
                                                <div className="overlay-desc">
                                                    <h5>Aplikasi Multibank (Full Stack)</h5>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <figure className="enlarge">
                                            <a href="#">
                                                <div className="img-box">
                                                    <Image src={`${prefix}/img/verif-akademik.png`} className="card-img-top" layout="fill" objectFit="cover" alt="..." />
                                                </div>
                                            </a>
                                            <div className="overlay-tool">
                                                <div className="overlay-desc">
                                                    <h5>Aplikasi Verifikasi Akademik (Front)</h5>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <figure className="enlarge">
                                            <a href="#">
                                                <div className="img-box">
                                                    <Image src={`${prefix}/img/beasiswa-sfd.png`} className="card-img-top" layout="fill" objectFit="cover" alt="..." />
                                                </div>
                                            </a>
                                            <div className="overlay-tool">
                                                <div className="overlay-desc">
                                                    <h5>Aplikasi Beasiswa SFD (Front)</h5>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className="container">
                    <div className="section-title">
                        📞 Contact
                    </div>
                    <div className="section-content">
                        <div className="col">
                            <div className="card text-center">
                                <div className="mb-2">
                                    <h2>📩 Email Me! @ <a href="mailto://aar.frontline@gmail.com">aar.frontline@gmail.com</a></h2>
                                </div>
                                <div className="mb-2">
                                    <h2>👨🏻‍💻</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
