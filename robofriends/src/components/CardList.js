import Card from './Card';


const CardList = ({ robots, cardsize ,setName}) => {

    return (
        <div className='tc'>
          
            {
                robots.map(item =>
                    <Card
                        key={item.id}
                        cardsize={cardsize}
                        id={item.id}
                        name={item.name}
                        username={item.username}
                        email={item.email} 
                        setName = {setName}
                        />
                )
            }
        </div>
    )
}

export default CardList;