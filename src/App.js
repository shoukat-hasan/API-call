import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import PostAPI from "./components/PostAPI";
import TodosAPI from "./components/TodosAPI";
import CommentsAPI from "./components/CommentsAPI";
import UserAPI from "./components/UserAPI";
import { useState } from "react";

function App() {
  const [showPost, setShowPost] = useState(false);
  const [showTodos, setShowTodos] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showUser, setShowUser] = useState(false);

  const handlePostClick = () => {
    setShowPost(true);
    setShowTodos(false);
    setShowComments(false);
    setShowUser(false);
  };

  const handleTodosClick = () => {
    setShowPost(false);
    setShowTodos(true);
    setShowComments(false);
    setShowUser(false);
  };

  const handleCommentsClick = () => {
    setShowPost(false);
    setShowTodos(false);
    setShowComments(true);
    setShowUser(false);
  };

  const handleUserClick = () => {
    setShowPost(false);
    setShowTodos(false);
    setShowComments(false);
    setShowUser(true);
  };
  return (
    <div className="container-fluid bg-info text-center my-3">
      <h1 className="display-3 fw-bold text-white">Get Data through Axios Method</h1>
      <button
        onClick={handlePostClick}
        type="button"
        className="btn btn-info text-white fw-bold fs-4 m-3 px-5 border rounded-pill"
      >
        POST API
      </button>
      <button
        onClick={handleTodosClick}
        type="button"
        className="btn btn-info text-white fw-bold fs-4 m-3 px-5 border rounded-pill"
      >
        Todos API
      </button>
      <button
        onClick={handleCommentsClick}
        type="button"
        className="btn btn-info text-white fw-bold fs-4 m-3 px-5 border rounded-pill"
      >
        Comment API
      </button>
      <button
        onClick={handleUserClick}
        type="button"
        className="btn btn-info text-white fw-bold fs-4 m-3 px-5 border rounded-pill"
      >
        User API
      </button>
      <div className="container">
        {showPost && <PostAPI />}

        {showTodos && <TodosAPI />}

        {showComments && <CommentsAPI />}

        {showUser && <UserAPI />}
      </div>
    </div>
  );
}

export default App;
