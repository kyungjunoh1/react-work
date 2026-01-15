import imageFile from "../styles/images/car.png"
import { StyleContentBlock, StyleContentWrap } from "./common/StyleContent";
import { ProductContext, ProductImg, ProductList, ProductListBox, ProductName, ProductPrice, ProductTitle } from "./common/StyleProduct";


const products = [
     { id:1, name:"슈퍼카", context: "남자의 로망 람보르기니", price : "2억", url : imageFile},
     { id:2, name:"슈퍼카", context: "남자의 로망 페라리", price : "2억", url : imageFile},
     { id:3, name:"슈퍼카", context: "남자의 로망 롤스로이스", price : "3억", url : imageFile},
     { id:4, name:"슈퍼카", context: "남자의 로망 포르쉐", price : "1억", url : imageFile},
     { id:5, name:"슈퍼카", context: "남자의 로망 아벤타토르", price : "2억", url : imageFile},
     { id:6, name:"슈퍼카", context: "남자의 로망 람보르기니", price : "2억", url : imageFile},
     { id:7, name:"슈퍼카", context: "남자의 로망 람보르기니", price : "2억", url : imageFile},
     { id:8, name:"슈퍼카", context: "남자의 로망 람보르기니", price : "2억", url : imageFile},
     { id:9, name:"슈퍼카", context: "남자의 로망 람보르기니", price : "2억", url : imageFile}
]
const IndexCom = () => {
    return (<>
       <StyleContentBlock>
         <StyleContentWrap>
            <ProductTitle>상품 제목</ProductTitle>
            <ProductList>
                {products.map( pro => (
                <ProductListBox key={pro.id}>
                    <ProductImg src={pro.url} alt="" />
                    <ProductName>{pro.name}</ProductName>
                    <ProductContext>{pro.context}</ProductContext>
                    <ProductPrice>{pro.price}</ProductPrice>
                </ProductListBox>
                ) ) }
            </ProductList>
         </StyleContentWrap>
       </StyleContentBlock>
    </>)
}
export default IndexCom;