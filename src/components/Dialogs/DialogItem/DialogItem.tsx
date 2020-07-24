import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

type DialogType = {
    name: string
    id: string
}

function DialogItem(props: DialogType) {
    // let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;