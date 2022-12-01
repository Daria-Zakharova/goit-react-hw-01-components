import { ProfileCard, Info, Stats } from "./UserProfile.styled";
import PropTypes from 'prop-types'; 

export const UserProfile = ({username, tag, location, avatar, stats : {followers, views, likes}}) => {

    return (
    <ProfileCard>
        <Info>
            <img src={avatar} alt="User avatar"/>
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </Info>
        <Stats>
            <li>
                <span>Followers</span>                
                <span>{followers}</span>
                </li>
            <li>
                <span>Views</span>                
                <span>{views}</span>
                </li>
            <li>
                <span>Likes</span>                
                <span>{likes}</span>
                </li>
        </Stats>
    </ProfileCard>);
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}