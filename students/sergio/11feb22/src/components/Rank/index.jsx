import '../Rank/style.css'

function Rank(prop) {

    
   


    console.log(prop)
    return <div>
    <p className='rank'>{prop.rank.rank}</p>
    <form onSubmit={handleSubmit}>
        <button type='submit' className='button'>Give a Star</button>
    </form>
    </div>
}

export default Rank;