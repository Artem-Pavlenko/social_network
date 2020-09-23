import React from 'react'
import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}: any) => {
    console.log(meta.error)
    return (
        <div className={`${s.formControl} ${meta.error && s.error}`}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <span>{meta.error}</span>
        </div>
    )
}

export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? s.error : ''}>
            <div>
                <input type="text" {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}



//или можно создать creator для элиментов

const FormControlCreator = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? s.error : ''}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input2 = (props: any) => {
    const {input,meta, ...restProps} = props
    return <FormControlCreator {...props}><input {...input} {...restProps}/> </FormControlCreator>
}

export const Textarea2 = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControlCreator {...props}><textarea {...input} {...restProps}/> </FormControlCreator>
}