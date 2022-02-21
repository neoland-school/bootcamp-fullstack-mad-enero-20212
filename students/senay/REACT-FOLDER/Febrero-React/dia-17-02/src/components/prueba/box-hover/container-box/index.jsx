import FillBox from "../fill-box";
import EmptyBox from "../empty-box";


function ContainerBox() {
    return (
        <div className="container-box">
            <EmptyBox></EmptyBox>
            <FillBox></FillBox>
        </div>
    )
}
export default ContainerBox;