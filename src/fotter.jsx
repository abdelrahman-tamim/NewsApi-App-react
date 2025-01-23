import './fotter.css'
const Fotter=()=>{


    return (
        <>
        <footer>
            <div className='fotter-div'>
        <img className="fotter-logo" src="./src/images/NEWSLETTER.PNG" alt="" />
        <ol>
            <li>Privacy Police</li>
            <li>Terms of Servies</li>
            <li>Copyright police</li>
            <li>Data Policy </li>
            <li>Accessabilty</li>
            <li className='help'>Help</li>
        </ol>
        <div className='fotter-list'>
        <p className='item'> Politics </p>
        <p className='item'> World </p>
        <p className='item'> Economy </p>
        <p className='item'> Sience & Tech </p>
        <p className='item'> Economy </p>
        <p className='item'> Bussnies </p>
        </div>
       
        <div className='fotter-list2'>
        <p className='item'> Travel </p>
        <p className='item'> Climate </p>
        <p className='item'> Life Style </p>
        <p className='item'>Food </p>
        <p className='item'> Sports </p>
        <p className='item'> Stock Market </p>
        </div>
        
        </div>
        <div className='copyright'>&copy; 2023 Newsletter. All rights reserved </div>
        </footer>
        </>
    )
}
export default Fotter