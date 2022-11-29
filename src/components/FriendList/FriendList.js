import {Section, SectionTitle} from '../Statistics/Statistics.styled';
import { Friends, FriendCard } from './FriendsList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
        <Section>
            <SectionTitle>Friends</SectionTitle>
            <Friends>
                {friends.map(({avatar, name, isOnline, id}) =>
                    <FriendCard key = {id} online={isOnline}>
                        <span></span>
                        <img src={avatar} alt="User avatar"/>
                        <p>{name}</p>
                    </FriendCard>)}
            </Friends>
        </Section>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
        } 
    )),
};
