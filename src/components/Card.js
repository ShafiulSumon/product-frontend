import photo from '../assets/bag.jpg';

function Card({ product }) {

    const { name, desc, price } = product;

    const handleClick = () => {
        console.log(price);
    }

    return (
        <div className='bg-violet-50 rounded-xl p-2 flex flex-col w-52 h-96 justify-evenly shadow-xl overflow-clip'>
            <img src={photo} alt="product" width={200} height={200} className='rounded-md'/>
            <h2 className='text-2xl line-clamp-1'>{name}</h2>
            <p className='text-sm text-gray-500 line-clamp-2'>{desc}</p>
            <div className='flex flex-row justify-between'>
                <button 
                    className='border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white w-28 rounded' 
                    onClick={handleClick}
                >
                    Add to Cart
                </button>
                <h3 className='text-xl text-end text-red-800 line-clamp-1'>{price}<span> ৳</span></h3>
            </div>
        </div>
    );
}

export default Card;