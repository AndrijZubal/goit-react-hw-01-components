import React from 'react'

import './App.css';
import Profile from './Components/Profile/Profile';
import users from './database/user.json';

import Statistics from './Components/Statistics/Statistics';
import stats from './database/statistical-data.json';

import FriendList from './Components/Friends/FriendList';
import friends from "./database/friends.json";

import TransactionHistory from './Components/Transactions/TransactionHistory';
import transactions from './database/transaction.json';


function App() {
  return (
    <>
      <Profile users={users} />
      <Statistics stats={stats}/>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;