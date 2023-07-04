import React from 'react'
import './index.css'

const links = [
    { href: '', label: 'Помощь' },
    { href: '', label: 'Обратная связь' },
    { href: '', label: 'Разработчикам' },
    { href: '', label: 'Условия использования' },
]

function Footer(props) {
    return (
        <footer className="footer">
            <ul className="footer__list">
                {links.map(({ href, label }) => (
                    <li key={label} className="footer__item">
                        <a
                            className="footer__link"
                            href={`${import.meta.env.BASE_URL}${href}`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="footer__copyright">© 1997–2023 ООО «Яндекс»</div>
        </footer>
    )
}

export default Footer
