import React from 'react'
import * as styles from './mailTo.module.scss'

const MailTo = ({ email, subject = '', body = '', children, enabled }) => {
    let params = subject || body ? '?' : '';

    if (subject)
        params += `subject=${encodeURIComponent(subject)}`;
    if (body)
        params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return (
        <a href={`mailto:${email}${params}`} className={styles.mailto} disabled>
            {children}
        </a>
    );
}

export default MailTo