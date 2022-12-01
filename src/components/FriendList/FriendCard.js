import PropTypes from 'prop-types';
import { FriendInfo } from "./FriendCard.styled"

export const FriendCard = ({online, avatarLink, username}) => {
    return (
        <FriendInfo online = {online}>
            <span></span>
            <img src={avatarLink} alt="User avatar"/>
            <p>{username}</p>
        </FriendInfo>
    )
}

FriendCard.propTypes = {
    avatarLink: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
};