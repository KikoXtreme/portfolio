import './contacts.scss';

export const Contacts = () => {
    return (
        <section id="contacts" className="contacts">
            <h2>{"( "}Contacts{" )"}</h2>
            <a href="https://github.com/KikoXtreme" target="_blank" rel="nooper noreferrer">
                <div className="card-wrapper first-contact">
                    <img src="/portfolio/assets/github.png" alt="git icon" />
                    <p>GitHub</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/kiril-valkov-26a75a37/" target="_blank" rel="nooper noreferrer">
                <div className="card-wrapper second-contact">
                    <img src="/portfolio/assets/linkedin.png" alt="linkedin icon" />
                    <p>Kiril Valkov</p>
                </div>
            </a>
            <div className="card-wrapper third-contact">
                <img src="/portfolio/assets/phone.png" alt="phone icon" />
                <div>
                    <p>+359 878 801590</p>
                </div>
            </div>
            <div className="card-wrapper fourth-contact">
                <img src="/portfolio/assets/mail.png" alt="email icon" />
                <div>
                    <p>valkov.kiko@gmail.com</p>
                </div>
            </div>
            <div className="card-wrapper fifth-contact">
                <img src="/portfolio/assets/mail.png" alt="email icon" />
                <div>
                    <p>kiril_dgr@abv.bg</p>
                </div>
            </div>
        </section>
    );
};