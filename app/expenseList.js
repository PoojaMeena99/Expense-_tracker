// src/components/ExpenseList.js
"use client"
import React, { useState } from 'react';

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedCategory, setEditedCategory] = useState('');
  const [editedPrice, setEditedPrice] = useState('');

  const handleEdit = (expense) => {
    setEditMode(expense.id);
    setEditedName(expense.name);
    setEditedCategory(expense.category);
    setEditedPrice(expense.price);
  };

  const handleSave = (id) => {
    const updatedExpense = {
      id,
      name: editedName,
      category: editedCategory,
      price: parseFloat(editedPrice),
    };
    editExpense(updatedExpense);
    setEditMode(null);
  };

  const handleCancel = () => {
    setEditMode(null);
  };

  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {editMode === expense.id ? (
              <div>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  type="text"
                  value={editedCategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                />
                <input
                  type="number"
                  value={editedPrice}
                  onChange={(e) => setEditedPrice(e.target.value)}
                />
                <button onClick={() => handleSave(expense.id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              <div>
                {expense.name} - {expense.category} - ${expense.price.toFixed(2)}
                <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                <button onClick={() => handleEdit(expense)}>Edit</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
