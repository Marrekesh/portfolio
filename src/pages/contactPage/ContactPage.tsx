import React from 'react';
import Title from "../../components/title/Title";
import Form from "../../components/ui/form/Form";

import c from './contactPage.module.css'
import classes from '../../components/app/App.module.css'

const ContactPage = () => {
    return (
        <div className={c.contactPage}>
            <div className={classes.container}>
                <Title textColor={'black'}>Contact</Title>

                <Form/>
            </div>
        </div>
    );
};

export default ContactPage;