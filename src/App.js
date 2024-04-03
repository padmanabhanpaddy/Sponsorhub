import './App.css';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import EventListingPage from './pages/EventListingPage';
import SponsorListingPage from './pages/SponsorListingPage';
import SponsorApplyPage from './pages/SponsorApplyPage';
import EventMainPage from './pages/EventMainPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import EventPostPage from './pages/EventPostPage';
import UserEventListingPage from './pages/UserEventListingPage';
import EventSponsorListingPage from './pages/EventSponsorListingPage';
import SponsorEventListingPage from './pages/SponsorEventListingPage';
import ChatPage from './pages/ChatPage';
import ChatListingPage from './pages/ChatListingPage';
import SponsorshipCollectionDashboard from './pages/SponsorshipCollectionDashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>


          <Route path="/events" element={<EventListingPage/>}/>
          <Route path="/event_post" element={<EventPostPage is_user={false} />}/>
          <Route path="/events/:id/:name/:type/:address/:min_audience/:max_audience/:start_date/:end_date/:start_time/:end_time/:description/:images?/:plans?" element={<EventMainPage/>}/>


          <Route path="/sponsors" element={<SponsorListingPage/>}/>
          <Route path="/sponsorApply" element={<SponsorApplyPage/>}/>
          <Route path="/sponsor_signin" element={<SigninPage is_user={false} />}/>
          <Route path="/sponsor_signup" element={<SignupPage is_user={false} />}/>
          <Route path="/sponsor_events" element={<SponsorEventListingPage />}/>


          <Route path="/user_signin" element={<SigninPage is_user={true} />}/>
          <Route path="/user_signup" element={<SignupPage is_user={true} />}/>
          <Route path="/user_events" element={<UserEventListingPage/>}/>
          <Route path="/user_events/:id" element={<EventSponsorListingPage/>}/>
          <Route path="/user_events/:id/dashboard" element={<SponsorshipCollectionDashboard/>}/>

          <Route path='/chats/:userId?/:sponsorId?' element={<ChatPage />}/>
          <Route path='/all_user_chat' element={<ChatListingPage />} />
          <Route path='/all_sponsor_chat' element={<ChatListingPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
