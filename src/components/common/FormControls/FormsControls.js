import React from "react";
import css from "./FormsControls.module.css"

const FormControl = ({input, meta:{touched, error}, children}) => {
    const hasError = touched && error;
    //Деструктуризируем инпут и пропс,
    //т.к. тут уже нет инпут и пропс
    return (
        <div className={css.formControl + " " + (hasError ? css.error : " ")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )

}


//REST OPERATOR
// достаём деструктуризацией input & meta
// и оставляем всё оставшееся в пропсах
// Пропсы содержат всё кроме инпута и меты

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}