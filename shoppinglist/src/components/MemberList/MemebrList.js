import React from 'react';
import './memberList.css';
import { useUser } from '../../context/userContext';
import { useShoppingList } from '../../context/shoppingListProvider';

const MemberList = ({ shoppingList }) => {
  const { findUserById } = useUser();
  const { removeMemberFromList } = useShoppingList();
  const members = shoppingList.membersIds;

  const handleRemoveMember = (memberId) => {
    if (window.confirm("Are you sure you want to remove this member?")) {
      removeMemberFromList(shoppingList.id, memberId);
    }
  };

  return (
    <div className="">
      <h2>Members list</h2>
      <ul className="members-list">
        {members.map(memberId => {
          const member = findUserById(memberId);
          return (
            <li key={memberId} className="flex items-center justify-between py-2 px-3 dark:text-gray-300 border rounded-md hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700"> 
            <span>{member ? member.name : 'Unknown Member'}</span>
            <button onClick={() => handleRemoveMember(memberId)} className="text-red-500 hover:text-red-700">
                <i className="fa-solid fa-trash"></i>
            </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MemberList;