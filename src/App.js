
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './views/Home';
// import Login from './views/Login';
// import Dashboard from './components/Dashboard';


// const App = () => {
//     return (
//         <Router>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<div>Home Page Test</div>} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
