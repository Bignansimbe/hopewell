import React, { useState } from 'react';
import { usePopper } from 'react-popper';

const Tooltip = ({ children, content }) => {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });

    return (
        <div>
            <button
                type="button"
                ref={setReferenceElement}
                onMouseEnter={() => setPopperElement(popperElement)}
                onMouseLeave={() => setPopperElement(null)}
            >
                {children}
            </button>
            {popperElement && (
                <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
                    {content}
                    <div ref={setArrowElement} style={styles.arrow} />
                </div>
            )}
        </div>
    );
};

export default Tooltip;
