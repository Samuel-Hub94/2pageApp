// import styled from'styled-components';
// import { useState } from 'react';
// import { useNavigate } from'react-router-dom';

// const Page1 = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");

//   const handleProceed = () => {
//     if (username) {
//       navigate('/page2');
//     } else {
//       alert("Please enter a username");
//     }
//   };

//   return (
//     <Container><Input 
//         type="text" 
//         placeholder="Enter Username" 
//         value={username} 
//         onChange={(e) => setUsername(e.target.value)} 
//       />
//       <ButtonGroup><Button onClick={() => navigate(-1)}>Back</Button><Button onClick={handleProceed}>Proceed</Button></ButtonGroup></Container>
//   );
// };

// export default Page1;

// const Container = styled.div`
//   height: 100vh;
//   background-image: url('path-to-your-background-image.jpg');
//   background-size: cover;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   color: white;
// `;

// const Input = styled.input`
//   padding: 10px;
//   margin-bottom: 20px;
//   border-radius: 5px;
//   border: none;
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   gap: 10px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   border-radius: 5px;
//   border: none;
//   cursor: pointer;
//   background-color: #007bff;
//   color: white;
// `;


// Review1:
import { useState } from'react';
import styled from'styled-components';
import { useNavigate } from'react-router-dom';

const Page1 = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleProceed = () => {
    if (username) {
      navigate('/page2');
    } else {
      alert("Please enter a username");
    }
  };

  return (
    <Container><Input 
        type="text" 
        placeholder="Enter Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <ButtonGroup><Button onClick={() => navigate(-1)}>Back</Button><Button onClick={handleProceed}>Proceed</Button></ButtonGroup></Container>
  );
};

export default Page1;

const Container = styled.div`
  height: 100vh;
  background-image: url('path-to-your-background-image.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;
`;
