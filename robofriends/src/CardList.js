import Card from './Card';


const CardList = ({ robots, title }) => {
    const CardSize = 200;

    return (
        <div className='tc'>
            <h1 className='fw4'>{title}</h1>
            {
                robots.map(number =>
                    <Card
                        key={number.id}
                        cardsize={CardSize}
                        id={number.id}
                        name={number.name}
                        username={number.username}
                        email={number.email} />
                )
            }
        </div>
    )
}

export default CardList;