import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import Home from './components/pages/Home/Home';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';

let App = ()=>{
    let name = ["rohit", "gaurav", "nidhi"];

    return(
        <>  
            <Navbar />
            <div className="container" style={{minHeight : "600px"}}>
                
                <Demo data={name}/>
                <Home />
            </div>

            <Footer />
        </>
    )
}

let Demo = (props)=>{
    let { data } = props;
    return(
        <div style={{backgroundColor:"gray", minHeight : "200px", width : "200px"}}>
            {
                data.map((a, n)=>{
                    return(
                        <>
                           
                            <Box key={n} name={a}/>
                        </>
                    )
                })
            }            
        </div>
    )
}

let Box = (props)=>{
    // let { name } = props;
    return(
        <h4>{props.name}</h4>
    )
}


export default App;