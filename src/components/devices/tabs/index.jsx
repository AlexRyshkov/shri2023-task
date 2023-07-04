import { Data, TABS_KEYS } from './data.js'
import React, { useEffect } from 'react'

function Tabs({ activeTab, onChange }) {
    const onSelectInput = (event) => {
        onChange(event.target.value)
    }

    return (
        <>
            <select
                className="section__select"
                defaultValue="all"
                onInput={onSelectInput}
            >
                {TABS_KEYS.map((key) => (
                    <option key={key} value={key}>
                        {Data[key].title}
                    </option>
                ))}
            </select>
            <ul role="tablist" className="section__tabs">
                {TABS_KEYS.map((key) => (
                    <li
                        key={key}
                        role="tab"
                        aria-selected={key === activeTab ? 'true' : 'false'}
                        tabIndex={key === activeTab ? '0' : undefined}
                        className={
                            'section__tab' +
                            (key === activeTab ? ' section__tab_active' : '')
                        }
                        id={`tab_${key}`}
                        aria-controls={`panel_${key}`}
                        onClick={() => setActiveTab(key)}
                    >
                        {Data[key].title}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Tabs
