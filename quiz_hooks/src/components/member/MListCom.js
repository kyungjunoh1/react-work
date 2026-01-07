import { Link } from "react-router-dom";

function MListCom( {list} ) {
    return(<>
       <table border="1">
         <thead>
            <tr>
                <th>id</th>
                <th>name</th>
            </tr>
         </thead>
         <tbody>
            {list.map(m => (
                <tr key={m.id}>
                    <td>{m.id}</td>
                    <td>
                        <Link to={"/member/one?id=" + m.id}>{m.name}</Link>
                    </td>
                </tr>
            ))}
         </tbody>
       </table>
    </>)
}
export default MListCom;