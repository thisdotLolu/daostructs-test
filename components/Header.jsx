import Image from "next/image";

const Header=()=>{
    return (
        <div className='nasa_page_header'>
          <div className='nasa_logo'>
            <Image 
            src='/NASA_logo.svg.png'
            className='nasa_logo_img'       
            alt='nasa logo'
            width='100'
            height='100'
            />
            <p>Lolu</p>
          </div>
          <p className='astronomy_text'>Astronomy Picture Of The Day</p>
        </div>
    )
}

export default Header;