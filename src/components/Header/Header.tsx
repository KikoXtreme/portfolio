import { useEffect } from 'react';
import '../../css/header.css';

const Header = () => {
    useEffect(() => {
        const navButtons = document.querySelectorAll('ul a');
        const navBackground = document.querySelector('.nav-background');

        const aboutSection = document.querySelector('#about');
        const skillsSection = document.querySelector('#skills');
        const projectsSection = document.querySelector('#projects');
        const workSection = document.querySelector('#work');
        const certificatesSection = document.querySelector('#certificates');
        const headerSection = document.querySelector('#header');

        const aboutLink = document.querySelector('.about-link');
        const skillsLink = document.querySelector('.skills-link');
        const projectsLink = document.querySelector('.projects-link');
        const workLink = document.querySelector('.work-link');
        const certificatesLink = document.querySelector('.certificates-link');
        const contactsLink = document.querySelector('.contacts-link');

        const scrollHandler = () => {
            const y = window.scrollY;

            if (navBackground) {
                if (y > 0) {
                    navBackground.classList.add('active');

                    if (navButtons.length > 0) {
                        navButtons.forEach((e) => e.classList.add('scroll'));
                    }
                } else {
                    navBackground.classList.remove('active');

                    if (navButtons.length > 0) {
                        navButtons.forEach((e) => {
                            e.classList.remove('scroll');
                            e.classList.remove('active');
                        });
                    }
                }
            }

            if (headerSection && aboutSection && skillsSection && projectsSection && workSection && certificatesSection) {
                let documentHeight = document.body.scrollHeight;
                let currentScroll = window.scrollY + window.innerHeight;

                if (y <= getPosition(headerSection)) {
                    navButtons.forEach((e) => e.classList.remove('active'));
                } else if (
                    y >= getPosition(aboutSection) - 200 &&
                    y <= getPosition(skillsSection) - 150
                ) {
                    navButtons.forEach((e) => e.classList.remove('active'));
                    aboutLink?.classList.add('active');
                } else if (
                    y >= getPosition(skillsSection) - 150 &&
                    y <= getPosition(projectsSection) - 100
                ) {
                    navButtons.forEach((e) => e.classList.remove('active'));
                    skillsLink?.classList.add('active');
                } else if (
                    y >= getPosition(projectsSection) - 100 &&
                    y <= getPosition(workSection) - 100
                ) {
                    navButtons.forEach((e) => e.classList.remove('active'));
                    projectsLink?.classList.add('active');
                } else if (
                    y >= getPosition(workSection) - 100 &&
                    y <= getPosition(certificatesSection) - 100
                ) {
                    navButtons.forEach((e) => e.classList.remove('active'));
                    workLink?.classList.add('active');
                } else if (
                    y >= getPosition(certificatesSection) - 100 &&
                    !(currentScroll + 5 >= documentHeight)
                ) {
                    navButtons.forEach((e) => e.classList.remove('active'));
                    certificatesLink?.classList.add('active');
                } else if (currentScroll + 5 >= documentHeight) {
                    navButtons.forEach((e) => e.classList.remove('active'));
                    contactsLink?.classList.add('active');
                }
            }
        };

        const getPosition = (element: any) => {
            let yPosition = 0;

            while (element) {
                yPosition +=
                    element.offsetTop - element.scrollTop + element.clientTop;
                element = element.offsetParent;
            }

            return yPosition;
        };

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return (
        <header>
            <section className="header-wrapper">
                <nav>
                    <div className="nav-background"></div>
                    <ul>
                        <a className="about-link" href="#about">
                            <li>About</li>
                        </a>
                        <a className="skills-link" href="#skills">
                            <li> Skills</li>
                        </a>
                        <a className="projects-link" href="#projects">
                            <li>Projects</li>
                        </a>
                        <a className="work-link" href="#work">
                            <li>Work</li>
                        </a>
                        <a className="certificates-link" href="#certificates">
                            <li>Certificates</li>
                        </a>
                        <a className="contacts-link" href="#contacts">
                            <li>Contacts</li>
                        </a>
                    </ul>
                </nav>
            </section>
            <section id="header" className="personal-info">
                <div className="img-wrapper"></div>
                <div id="header"></div>
                <h1>Kiril Valkov</h1>
                <h2>Front-End Developer</h2>
                <section className="contact-links-section">
                    <div className="link-wrapper">
                        <a href="https://github.com/KikoXtreme" target="_blank" rel="nooper noreferrer">
                            <svg className="github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                            </svg>
                        </a>
                    </div>
                    <div id="about"></div>
                    <div className="link-wrapper">
                        <a href="https://www.linkedin.com/in/kiril-valkov-26a75a37/" target="_blank" rel="nooper noreferrer">
                            <svg className="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                        </a>
                    </div>
                </section>
            </section>
        </header>
    );
}

export default Header;
