import React from 'react'
import './index.css'

const links = [
    { href: '', label: 'Сводка' },
    { href: 'devices', label: 'Устройства' },
    { href: 'scripts', label: 'Сценарии' },
]

function Header() {
    let [expanded, setExpanded] = React.useState(false)
    let [toggled, setToggled] = React.useState(false)

    const onClick = () => {
        if (!toggled) {
            setToggled(true)
        }

        setExpanded(!expanded)
    }

    return (
        <header className="header">
            <a href="/" className="header__logo" aria-label="Яндекс.Дом"></a>
            <button
                className="header__menu"
                aria-expanded={expanded ? 'true' : 'false'}
                onClick={onClick}
            >
                <span className="header__menu-text a11y-hidden">
                    {expanded ? 'Закрыть меню' : 'Открыть меню'}
                </span>
            </button>
            <ul
                className={
                    'header__links' +
                    (expanded ? ' header__links_opened' : '') +
                    (toggled ? ' header__links-toggled' : '')
                }
            >
                {links.map(({ href, label }) => (
                    <li key={label} className="header__item">
                        <a
                            className="header__link"
                            {...(label === 'Сводка' && {
                                'aria-current': 'page',
                                className: 'header__link header__link_current',
                            })}
                            href={`${import.meta.env.BASE_URL}${href}`}
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header
