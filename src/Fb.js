import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import UploadImage from './components/UploadImage';

export default function Fb() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Form />
      <TodoList />
      <UploadImage />
    </div>
  );
}