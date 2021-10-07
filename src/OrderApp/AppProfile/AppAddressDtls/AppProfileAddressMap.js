import AppProfileAddressConcat from './AppProfileAddressConcat';
function AppProfileAddressMap(props) {
    return props.concatAddress.map(val => {
        return (<AppProfileAddressConcat concatenationAdd = {val}></AppProfileAddressConcat>)
    });
}
export default AppProfileAddressMap;