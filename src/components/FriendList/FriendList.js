import { Friends} from './FriendsList.styled';
import { FriendCard } from './FriendCard';
import PropTypes from 'prop-types';

export const FriendList = ({friends}) => {
    return (
            <Friends>
                {friends.map(({avatar, name, isOnline, id}) =>
                    <li key = {id}>
                        <FriendCard 
                            online={isOnline}
                            avatarLink = {avatar}
                            username = {name} />
                    </li>)
                    }
            </Friends>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    ),
};
