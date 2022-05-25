import React from "react";
import styles from "./FormsControls.module.css"
import {Field} from "redux-form";

const Element = Element => ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={(hasError ? styles.error : "")}>
            <Element {...input} {...props} />
            {hasError && <span> {error} </span>}
        </div>
    );
};

export const Textarea = Element("textarea");

export const Input = Element("input");

export const createField = (placeholder, validators, name, component, props = {}, text = "") => (<div>
    <Field placeholder={placeholder} validate={validators} name={name} component={component} {...props}/>
    {text}
</div>)
