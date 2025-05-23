import { useState } from 'react';
import './App.css';
import FetchingData from './components/FetchingData.jsx';
import  PostingData  from './components/PostingData.jsx';
import MyAwsome from './components/MyAwesome';

function App() {
  const [showFetchData, setShowFetchData] = useState(true);
  const [showPostData, setPostData] = useState(false);

  const handleShowFetchDataDemo = () => {
    setShowFetchData(true);
    setPostData(false);
  };

  const handleShowPostDataDemo = () => {
    setShowFetchData(false);
    setPostData(true);
  };

  return (
    <div className="container">
      <button onClick={() => handleShowFetchDataDemo()} className="button">
        Fetching Data Demo
      </button>
      <button onClick={() => handleShowPostDataDemo()} className="button">
        Posting Data Demo
      </button>
      <hr />
      {showFetchData ? <FetchingData /> : <PostingData />}

      <hr />
      <h2>Week 3 Mini Library  Components</h2>
      <MyAwsome />

    </div>

    
  );
}



export default App;

//import './App.css';
//import Todo from './Todo';
//import { Modal } from "./modal";
//function App() {
//    return (
//        <div class="todo-container">
//            <div class="card">
//                <Todo></Todo>
//
//            </div>
//        </div>
//
//    );
//}
//
//export default App;

