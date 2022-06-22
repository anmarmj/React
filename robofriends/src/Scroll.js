

const Scroll = (props) => {
    return (

        <div style={{ overflowY: 'scroll', border: 'none', height: '700px' }}>
            {props.children}
        </div>
    )
}

export default Scroll;