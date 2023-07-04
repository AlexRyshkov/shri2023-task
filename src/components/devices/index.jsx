import React from 'react'
import { Data, TABS_KEYS } from './tabs/data.js'
import Event from '../event'

function Devices({ activeTab }) {
    const ref = React.useRef()
    const [hasRightScroll, setHasRightScroll] = React.useState(false)

    let sizes = []
    const onSize = (size) => {
        sizes = [...sizes, size]
    }

    React.useEffect(() => {
        const sumWidth = sizes.reduce((acc, item) => acc + item.width, 0)
        const sumHeight = sizes.reduce((acc, item) => acc + item.height, 0)

        const newHasRightScroll = sumWidth > ref.current.offsetWidth
        if (newHasRightScroll !== hasRightScroll) {
            setHasRightScroll(newHasRightScroll)
        }
    })

    const onArrowCLick = () => {
        const scroller = ref.current.querySelector(
            '.section__panel:not(.section__panel_hidden)'
        )
        if (scroller) {
            scroller.scrollTo({
                left: scroller.scrollLeft + 400,
                behavior: 'smooth',
            })
        }
    }

    return (
        <>
            <div className="section__panel-wrapper" ref={ref}>
                {TABS_KEYS.map((key) => (
                    <div
                        key={key}
                        role="tabpanel"
                        className={
                            'section__panel' +
                            (key === activeTab ? '' : ' section__panel_hidden')
                        }
                        aria-hidden={key === activeTab ? 'false' : 'true'}
                        id={`panel_${key}`}
                        aria-labelledby={`tab_${key}`}
                    >
                        <ul className="section__panel-list">
                            {Data[key].items.map((item, index) => (
                                <Event key={index} {...item} onSize={onSize} />
                            ))}
                        </ul>
                    </div>
                ))}
                {hasRightScroll && (
                    <div
                        className="section__arrow"
                        onClick={onArrowCLick}
                    ></div>
                )}
            </div>
        </>
    )
}

export default Devices
