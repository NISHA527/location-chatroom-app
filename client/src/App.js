import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ChatroomList from './components/ChatroomList';
import Chat from './components/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chatrooms" element={<ChatroomList />} />
        <Route path="/chat/:id" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;