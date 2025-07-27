const Trash = ({ onClick, className }) => {
    return (
        <span onClick={onClick} className={className}>
            🗑️
        </span>
    )
}

export default Trash