import user from '../../json/user.json';
import data from '../../json/data.json';
import friends from '../../json/friends.json';
import transactions from '../../json/transactions.json';
import { Section } from 'components/Section/Section';
import {UserProfile} from '../UserProfile/UserProfile';
import {Statistics} from '../Statistics/Statistics';
import {FriendList} from '../FriendList/FriendList';
import {TransactionsHistory }from '../Transactions/Transactions';


export const App = () => {
  return (
  <>
  <Section sectionTitle={"User Profile"}>
    <UserProfile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </Section>

  <Statistics title = {"Statistics"} stats = {data}/>

  <Section sectionTitle={"Friends"}>
    <FriendList friends = {friends}/>
  </Section>

  <Section sectionTitle={"History of transactions"}>
    <TransactionsHistory data = {transactions}/>
  </Section>
  </>
);
}
