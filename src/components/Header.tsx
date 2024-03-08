
import logoImg from "../assets/Logo.svg";


export default function HeaderSection() {

 return (
   <header className="container">
     <nav
       className="mx-auto flex items-center justify-between gap-3 py-3 md:py-5 lg:py-6"
       aria-label="Global"
     >
       <div className="flex lg:flex-1">
         <a href="#" className="-m-1.5 p-1.5">
           <span className="sr-only">Test task logo</span>
           <img className="h-8 w-auto" src={logoImg} alt="Test task logo" />
         </a>
       </div>

       <div className="flex flex-1 gap-2 justify-end">
         <button className="btn-primary">Users</button>
         <button className="btn-primary">Sign up</button>
       </div>
     </nav>
   </header>
 );
}
