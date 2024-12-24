import { BrowserRouter as Router,Routes,Route} from "react-router";
import HomeSection from "./pages/Home/HomeSection";
import Characters from "./pages/Characters/Characters"
import Contact from "./pages/Contact/Contact"


export default function RouterSite() {
   
return(
<Router>
        <Routes>
            <Route path="/" element={<HomeSection/>}/>
            <Route path="/Characters" element={<Characters/>}/>    
            <Route path="/Contact" element={<Contact/>}/>  
        </Routes>
</Router>
) 

}