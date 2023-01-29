import './index.css';
import { Route, Routes } from "@solidjs/router";
import Layout from './components/Layout';
import LogIn from './pages/LogIn';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';


function App() {
  return <>
      <Routes>
        <Route path='/' element={<Layout />}>
         <Route path='/' element={<HomePage />} />
         <Route path='cabinet' element={<div>Hello hello</div>} />
         <Route path='log-in' element={<LogIn />} />
         <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
  </>
}

export default App;
