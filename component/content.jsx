const Content = (props) => {
    return(
        <div className='gap-4'>
            <h2 className='text-xl text-center font-semibold'>{props.heading}</h2>
            <p>
                {props.details}
            </p>
        </div>
    )
}

export default Content;
