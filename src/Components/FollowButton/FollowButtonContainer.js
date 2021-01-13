import React from "react"
import {useState} from "react";
import PropTypes from "prop-types";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import FollowButtonPresenter from "./FollowButtonPresenter";
import {  useMutation } from "react-apollo-hooks";


const FollowButtonContainer = ( { isFollowing, id } ) => {
    const [isFollowingS, setIsFollowing] = useState(isFollowing);
    const [followMutation] = useMutation(FOLLOW, { variables: {id} });
    const [unfollowMutation] = useMutation(UNFOLLOW, { variables: {id} });

    const onClick = () => {
        if(isFollowingS === true){
            setIsFollowing(false);
            unfollowMutation();
        }else{
            setIsFollowing(true);
            followMutation();
        }
    };

    return <FollowButtonPresenter onClick={onClick} isFollowing={isFollowing} id={id} />;

};

FollowButtonContainer.propTypes = {
    isFollowing: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
};

export default FollowButtonContainer;