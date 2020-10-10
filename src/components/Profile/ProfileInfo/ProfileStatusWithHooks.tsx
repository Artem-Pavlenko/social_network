import React, {ChangeEvent, useEffect, useState} from "react";

type StatusStateToPropsType = {
    status: string | null
}
type StatusDispatchToPropsType = {
    updateProfileStatus: (status: string) => void
}
type ProfileStatusType = StatusStateToPropsType & StatusDispatchToPropsType


const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [statusText, setStatusText] = useState(props.status)
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatusText(props.status)
    }, [props.status])

    function activateEditMod() {
        setEditMode(true)
    }

    function changeStatusText(e: ChangeEvent<HTMLInputElement>) {
        setStatusText(e.currentTarget.value)
    }

    function addStatusText() {
        if (statusText) {
            props.updateProfileStatus(statusText)
        }
        setEditMode(false)
    }

    return (
        <div>
            <div>
                {editMode
                    ? <input
                        type="text"
                        value={statusText === null ? '' : statusText}
                        autoFocus={true}
                        onChange={changeStatusText}
                        onBlur={addStatusText}
                    />
                    : <span onDoubleClick={activateEditMod} title={'status'}>
                            {props.status === '' || props.status === null ? '---' : props.status}
                        </span>
                }
            </div>
        </div>
    )

}

export default ProfileStatusWithHooks;