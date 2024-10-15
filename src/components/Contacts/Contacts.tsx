import '../../css/contacts.css';

const Contacts = () => {
    return (
        <section id="contacts" className="contacts">
            <h2>Contacts</h2>
            <a href="https://www.linkedin.com/in/kiril-valkov-26a75a37/" target="_blank" rel="nooper noreferrer">
                <div className="card-wrapper">
                    <img src="/assets/linkedin.png" alt="Mail Icon" />
                    <p>Kiril Valkov</p>
                </div>
            </a>
            <div className="card-wrapper">
                <img src="/assets/mail.png" alt="Mail Icon" />
                <div>
                    <p>valkov.kiko@gmail.com</p>
                    <p>kiril_dgr@abv.bg</p>
                </div>
            </div>
            <div className="card-wrapper">
                <img src="/assets/phone.png" alt="Mail Icon" />
                <div>
                    <p>+359 878 801590</p>
                </div>
            </div>
        </section>
    )
}

export default Contacts;