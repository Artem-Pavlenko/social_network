import {addPostActionCreator, ProfileType} from "../../../store/profileReducer";
import {DispatchType, StateType} from "../../../store/redux-store";
import {connect} from "react-redux";
import Post from "./Post/Post";
import React from "react";
import s from "./MyPosts.module.scss";
import FormPost, {FormPostType} from "./TextareaPostForm";

type MyPostPropsType = {
    addPost: (post: string) => void
    profilePage: ProfileType
}

const MyPosts = React.memo((props: MyPostPropsType) => {

    const onAddPost = (formData: FormPostType) => {
        props.addPost(formData.post)
    }

    return (
        <div className={s.myPost}>
            <h3> My posts </h3>
            <div>
                <FormPost onSubmit={onAddPost}/>
            </div>
            {props.profilePage.post.map(post => <Post comment={post.comm} likeCount={post.like} key={post.id}/>)}
        </div>
    )
})


let mapStateToProps = (state: StateType) =>{
    return {
        profilePage: state.profile
    }
}
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addPost: (post: string) => dispatch(addPostActionCreator(post)),
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;