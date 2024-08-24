// import styled from'styled-components';

// const Card = ({ title, description }) => {
//   return (
//     <CardWrapper>
//         <h3>
//             {title}
//         </h3>
        
//         <p>
//             {description}
//         </p>
//     </CardWrapper>
//   );
// };

// export default Card;

// const CardWrapper = styled.div`
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   background-color: #fff;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
// `;


// Review1:
import styled from'styled-components';

const Card = ({ title, description }) => {
  return (
    <CardWrapper>
        <h3>
            {title}
        </h3>
        
        <p>
            {description}
        </p>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;
