function TallComponent (){
    return Array.from({length:1000},(_,i)=>(
        <div className='h-16'>{i}</div>
    ))
};


export default function Home() {
  return (
    <div className='flex '>
        <div className=''>left</div>
        <div>middle</div>
        <div></div>
    </div>
  )
}
