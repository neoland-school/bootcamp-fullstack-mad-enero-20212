import './cards.css'

function NewCards(){
    return (
        <div className='container'>
            <div className='header'>
                <img className='image' src="https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2019/01/30175327/Screen-Shot-2019-01-30-at-5.53.11-PM.png" alt="" />
            </div>
            <div className='content'>
                <h2 className='title'>MADTREE BREWING</h2>
                <ul>
                    <li className='list__element'>Type</li>
                    <li className='list__element'>State</li>
                    <li className='list__element'>Country</li>
                    <li className='list__element'>City</li>
                </ul>
            </div>
        </div>
    )
}

export default NewCards;