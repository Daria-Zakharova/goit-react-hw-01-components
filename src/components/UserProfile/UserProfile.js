import { ProfileCard, Info, Stats } from "./UserProfile.styled";
import {Section, SectionTitle} from '../Statistics/Statistics.styled';
import PropTypes from 'prop-types'; 

export const UserProfile = ({username, tag, location, avatar, stats}) => {

    return (<Section>
    <SectionTitle>User Profile</SectionTitle>
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
                <span>{stats.followers}</span>
                </li>
            <li>
                <span>Views</span>                
                <span>{stats.views}</span>
                </li>
            <li>
                <span>Likes</span>                
                <span>{stats.likes}</span>
                </li>
        </Stats>
    </ProfileCard>
    </Section>);
}

UserProfile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
}