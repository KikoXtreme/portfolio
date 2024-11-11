import '../../css/contacts.css';

const Contacts = () => {
    return (
        <section id="contacts" className="contacts">
            <h2>Contacts</h2>
            <a href="https://github.com/KikoXtreme" target="_blank" rel="nooper noreferrer">
                <div className="card-wrapper">
                    <img src="/portfolio/assets/github.png" alt="git icon" />
                    <p>GitHub</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/kiril-valkov-26a75a37/" target="_blank" rel="nooper noreferrer">
                <div className="card-wrapper">
                    <img src="/portfolio/assets/linkedin.png" alt="linkedin icon" />
                    <p>Kiril Valkov</p>
                </div>
            </a>
            <div className="card-wrapper">
                <img src="/portfolio/assets/phone.png" alt="phone icon" />
                <div>
                    <p>+359 878 801590</p>
                </div>
            </div>
            <div className="card-wrapper">
                <img src="/portfolio/assets/mail.png" alt="email icon" />
                <div>
                    <p>valkov.kiko@gmail.com</p>
                    {/* <p>kiril_dgr@abv.bg</p> */}
                </div>
            </div>
            <div className="card-wrapper">
                <img src="/portfolio/assets/mail.png" alt="email icon" />
                <div>
                    <p>kiril_dgr@abv.bg</p>
                </div>
            </div>
        </section>
    )
}

export default Contacts;