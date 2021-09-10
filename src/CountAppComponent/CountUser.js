import CountsDisplay from './CountsDisplay';
function CountUser(props) {
   let count=props.cntData.map((data)=>{
        return <CountsDisplay cnt={data.count} txt={data.text}></CountsDisplay>
    }
    )
    return count;
}
export default CountUser;