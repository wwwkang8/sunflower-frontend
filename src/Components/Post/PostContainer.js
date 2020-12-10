import React, { useState } from "react";
import PostPresenter from "./PostPresenter";
import PropTypes from "prop-types";
import useInput from "../../Hooks/useInput";

const PostContainer = ({id, 
                        user, 
                        files,
                        likeCount,
                        isLiked,
                        comments,
                        createdAt}) => {
    return <PostPresenter />;
}

PostContainer.propTypes = {
    id:PropTypes.string.isRequired,
    user:PropTypes.PropTypes.shape({
        id: PropTypes.string.isRequired,
        avatar:PropTypes.string,
        userName:PropTypes.string.isRequired
    }).isRequired, 
    files:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.string.isRequired,
            url:PropTypes.string.isRequired
        })
    ).isRequired,
    likeCount:PropTypes.number.isRequired,
    isLiked:PropTypes.bool.isRequired,
    comments:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
        user:PropTypes.shape({
            id:PropTypes.string.isRequired,
            userName:PropTypes.string.isRequired
        }).isRequired
    })).isRequired,
    createdAt:PropTypes.string.isRequired
};

export default PostContainer;