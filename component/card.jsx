import Content from './content';

const Card = (props) => {

    return(
        <div className='bg-white w-full h-64  text-black p-5 rounded-lg  shadow-lg overflow-y-auto wrap-break-words'>
            <Content {...props}/>
        </div>
    )
}

export default Card;