const Sets = ({ navs, onNavChange }) => {
    return (
        <nav className="pa3 pa4-ns">
            {
                navs.map(item =>
                    <button className="link dim white b f6 f5-ns dib mr3 bg-light-purple" key={item.id}  name={item.name}  onClick={onNavChange}>{item.name}</button>

                )
            }
        </nav>
    )


}

export default Sets;