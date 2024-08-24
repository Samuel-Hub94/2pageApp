// import styled from'styled-components';
// import Card from'./Card'; // Assuming you have a Card component
// const Page2 = () => {
//   return (
//     <Container>
//         <Header>
//             <Div>
//                 Header Div 1
//             </Div>
//             <Div>
//                 Header Div 2
//             </Div>
//             <Div>
//                 Header Div 3
//             </Div>
//         </Header>

//         <Image src="path-to-your-image.jpg" alt="Your image" />

//         <CardContainer>
//             <Card title="Card 1" description="This is the first card." />
//             <Card title="Card 2" description="This is the second card." />
//             <Card title="Card 3" description="This is the third card." />
//         </CardContainer>
//     </Container>
//   );
// };

// export default Page2;

// const Container = styled.div`
//   padding: 20px;
// `;

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// const Div = styled.div`
//   flex: 1;
//   padding: 10px;
//   background-color: #f1f1f1;
//   margin: 0 10px;
//   text-align: center;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: auto;
//   margin-bottom: 20px;
// `;

// const CardContainer = styled.div`
//   display: flex;
//   gap: 20px;
// `;


// Review1:

import styled from'styled-components';
import Card from'./Card';

const Page2 = () => {
  return (
    <Container>
      <Header>
        <Div>
          Header Div 1
        </Div>
        <Div>
          Header Div 2
        </Div>
        <Div>
          Header Div 3
        </Div>
      </Header>
      <Image src="path-to-your-image.jpg" alt="Your image" />
      <CardContainer>
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Card title="Card 3" description="This is the third card." />
      </CardContainer>
    </Container>
  );
};

export default Page2;

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Div = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #f1f1f1;
  margin: 0 10px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
`;
