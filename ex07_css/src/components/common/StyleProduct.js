import styled from "styled-components";

export const ProductTitle = styled.h2`
    text-align: center;
    color: chocolate;
`;

export const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap; //해당 1000px 초과 시 밑칸으로 보내는 역할.
`;
//(1100 - 3 *30) / 4 = 252.5 넓이
export const ProductListBox = styled.div`
    width : 252.5px;
    border: 1px solid #ccc;
    border-radius: 5px; 
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-right : 30px;
    margin-top : 20px;
    &:nth-child(4n){margin-right : 0; }
`;
export const ProductImg = styled.img`
   width: 100%;
`;
export const ProductName = styled.h3`
   font-size: 20px; text-align: center;
   width: 50%; margin: auto;
   padding: 10px 0; border-bottom: 1px solid gray;
`;
export const ProductContext = styled.p`
   font-size: 20px; margin-left: 25px;
   margin-right: 25px;
`;
export const ProductPrice = styled.p`
font-size: 20px; 
margin-right: 15px;
color: green;
text-align: right;
`;