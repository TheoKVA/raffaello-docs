{/* 
    LOAD RAFFAELLO
    For loading the scripts of RAFFAELLO.js

    import RaffaelloLoader from '@site/src/components/RaffaelloLoader';
    <RaffaelloLoader license="MXunPm" />
*/}

import { useEffect } from 'react';

export default function RaffaelloLoader({ license = 'MXunPm' }) {
    useEffect(() => {

        // Load JS if not already present
        const scriptId = 'raffaello-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://cdn.jsdelivr.net/npm/raffaello@1.2.0/dist/raffaello.min.js';
            script.setAttribute('data-license', license);
            script.async = true;
            document.head.appendChild(script);
        }

        // Load CSS if not already present
        const cssId = 'raffaello-style';
        if (!document.getElementById(cssId)) {
            const link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.href = 'https://cdn.jsdelivr.net/npm/raffaello@1.1.2/dist/raffaello.min.css';
            document.head.appendChild(link);
        }
    }, [license]);

    return null;
}