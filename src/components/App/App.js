import user from '../../json/user.json';
import data from '../../json/data.json';
import friends from '../../json/friends.json';
import transactions from '../../json/transactions.json'
import {UserProfile} from '../UserProfile/UserProfile';
import {Statistics} from '../Statistics/Statistics';
import {FriendList} from '../FriendList/FriendList';
import {TransactionsHistory }from '../Transactions/Transactions';


export const App = () => {
  return (
  <><UserProfile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
  <Statistics data = {data}/>
  <FriendList friends = {friends}/>
  <TransactionsHistory data = {transactions}/>
  </>
);
}
