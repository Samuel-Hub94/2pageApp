// import { Routes, Route } from "react-router-dom";
// import Page1 from'./Page1';
// import Page2 from'./Page2';


// const App = () => {
//   return (
//       <Routes>
//         <Route path="/" element={<Page1 />} />
//         <Route path="/page2"element={<Page2 />} />
//       </Routes>
    
//   );
// };

// export default App;


// Review1:
import { Routes, Route } from"react-router-dom";
import Page1 from'./Page1';
import Page2 from'./Page2';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/page2"element={<Page2 />} />
    </Routes>
  );
};

export default App;
