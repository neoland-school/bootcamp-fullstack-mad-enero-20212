


function AlPadre(props){
    return (
        <div>
            <input type="text" onChange={e => props.setTitle(e.target.value) }/>
        </div>
    )
}

export default AlPadre