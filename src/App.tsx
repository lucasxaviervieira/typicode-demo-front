import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import Profile from "./components/Profile";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PostList />}></Route>
          <Route path="/posts/:id" element={<PostDetail />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
