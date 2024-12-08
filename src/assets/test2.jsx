import pic from './tameer watan.jpg'
function Test2() {
    return (
        <div className="flex justify-between items-center px-10">
            <div className=' flex justify-between items-center gap-x-5'>
                <img  src={pic} alt=""  className='w-[150px] h-[130px] flex justify-between'/>
                <div>
                    <h1>Akram Khan</h1>
                    <h1>Naeem Uddin</h1>
                    <h1>Refrence Number 123</h1>
                    <button className="bg-fuchsia-900">Heart Surgery</button>
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <h3>Referred Hospital <span className='text-2xl text-yellow-400'>Northwest Hospital</span></h3>
                <h3>Treatment Completed</h3>
            </div>
        </div>
    )
}

export default Test2
