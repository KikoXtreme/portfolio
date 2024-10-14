import '../../css/skills.css';

const Skills = () => {
    return (
        <section id='skills' className="skills">
            <h2>Skills</h2>
            <div className="grid">
                <section className="skill-section professional">
                    <h3>Professional</h3>
                    <ul>
                        <div className="logo-section">
                            <img src="/assets/js.png" alt="js" />
                            <li>JavaScript</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/ts.png" alt="ts" />
                            <li>Typescript</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/react.png" alt="react" />
                            <li>React</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/html.png" alt="html" />
                            <li>HTML</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/css.png" alt="scc" />
                            <li>CSS</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/sass.png" alt="sass" />
                            <li>SASS</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/bootstrap.png" alt="bootstrap" />
                            <li>Bootstrap</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/materialui.png" alt="materialui" />
                            <li>MaterialUI</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/git.png" alt="git" />
                            <li>Git</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/angular.png" alt="angular" />
                            <li>Angular</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/nodejs.png" alt="nodejs" />
                            <li>Node.js</li>
                        </div>
                        <div className="logo-section">
                            <img src="/assets/mongodb.png" alt="mongodb" />
                            <li>MongoDB</li>
                        </div>
                    </ul>
                </section>
                <section className="skill-section personal">
                    <h3>Personal</h3>
                    <ul>
                        <li>Responsibility</li>
                        <li>Drive for results</li>
                        <li>Team player</li>
                        <li>Hard work</li>
                        <li>Leadership</li>
                        <li>Positive directed</li>
                        <li>Attention to details</li>
                    </ul>
                </section>
                <section className="skill-section languages">
                    <h3>Languages</h3>
                    <div>
                        <h5>Bulgarian</h5>
                        <p>Fluent speaker</p>
                    </div>
                    <div>
                        <h5>English</h5>
                        <p>Excellent speaker</p>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Skills;