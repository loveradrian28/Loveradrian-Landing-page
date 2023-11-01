import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart, faEye, faFolder, faImage, faLocationDot, faEarthAmericas, faGear, faComments, faUserGroup} from '@fortawesome/free-solid-svg-icons'


const AppDivIzquierdo = () => {
return (<>
<div className='AppDivIzquierdo__Container col-3 p-2'>
<DivFotoNombreYUser /> 
<NavBar /> 
<DescargarApp /> 
</div>
</>)
}

const DivFotoNombreYUser = () => {
  return (<>
    <div className='FotoNombreYUser__Container '>
      <div className='row'>
        <div className='col-12 '>
    <img src="https://picsum.photos/id/64/80/80" class="rounded-circle mx-auto d-block" alt="..." />
      </div>
    </div>
    <div className='text-center'>
  <p className='m-0'>Alexandra Turis</p>
  <p className=''>@TurisAlex128</p>
  </div>
    </div>
  </>)

}

const NavBar = () => {
return (<>
<div className='NavBar__Container '>
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active text-light bg-dark rounded" aria-current="page" href="#">News Feed</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" href="#"><FontAwesomeIcon icon={faEnvelope} /> Messeges</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" href="#"><FontAwesomeIcon icon={faComments} /> Forum</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" aria-current="page"><FontAwesomeIcon icon={faUserGroup} /> Friends</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active text-dark" aria-current="page" href="#"><FontAwesomeIcon icon={faImage} /> Media</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active text-dark" aria-current="page" href="#"><FontAwesomeIcon icon={faGear} /> Settings</a>
  </li>
</ul>
</div>
</>)

}

const DescargarApp = () => {
  return (<>
  <div className='DescargarApp__Container  border border-secondary rounded my-3 w-75 p-3'>
    <div className='row'>
      <div className='col-12'>
    <img src="https://picsum.photos/id/119/80/80" class="rounded-circle mx-auto d-block" alt="..." />
    </div>
    </div>
    <p className='text-center my-3'>Download the app</p>
  </div>
  </>)

}

const AppDivCentral = () => {
return (<>
<div className='AppDivCentral__Container  justify-content-center col-6 mb-3 p-2 '>
<HeaderCentro />
<PrimerPost /> 
<SegundoPost />
<BarraDeEstado /> 
</div>
</>)
}

const HeaderCentro = () => {
return (<>
<div className='HeaderCentro__Container '>
  <div className='row'>
    <div className='col-6'>
      <h5>Feeds</h5>
    </div>
    <div className='col-2'>
    <button type="button" class="btn ">Recents</button>
    </div>
    <div className='col-2'>
    <button type="button" class="btn">Friends</button>
    </div>
    <div className='col-2'>
    <button type="button" class="btn ">Popular</button>
    </div>
  </div>
</div>
</>)
}

const PrimerPost = () => {
  return (<>
  <div className='PrimerPost__Container container p-4 rounded-4'>
    
  <div className='HeaderPrimerPost__Container'>
    <div className='row'>
      <div className='Avatar col-2'><img src="https://picsum.photos/id/789/60/60" class="rounded-circle mx-auto d-block" alt="..." /></div>
      <div className='flex col-8'>
      <div className='PostUserName'><b>George Lobko</b></div>
      <div className='HowLongAgo small text-secondary'>2 hours ago</div>
      </div>
      <div className='HamburgerButton col-2 '><button type="button" class="btn btn-outline-dark">:</button></div>
  </div>
  </div>
  
  <div className='TextoPrimerPost py-4'>
  <p><b>Hi everyone, today I was on the most beautiful mountain in the world! I also want to say hi to @Silena, @Olya and @Davis!</b></p>
  </div>
  
  <div className='FotosPrimerPost'>
    <div className='row'>
      <div className='col-3 px-0'>
      <img src="https://picsum.photos/id/519/150/200" class="rounded float-start" alt="..." />
  </div>
  <div className='col-3 px-0'>
  <img src="https://picsum.photos/id/566/150/200" class="rounded float-start" alt="..." />
  </div>
  <div className='col-6 px-0'>
  <img src="https://picsum.photos/id/570/250/200" class="rounded float-start" alt="..." />
  </div>
  </div>
  </div>
  
  <div className='BotonesPrimerPost'>
  <div className='row my-2'>
    <div className='Visualizations col-2'><FontAwesomeIcon icon={faEye} /> 6540</div>
    <div className='Likes col-2'><FontAwesomeIcon icon={faHeart} /> Like</div>
    <div className='Comment col-3'><FontAwesomeIcon icon={faEnvelope} /> Comment</div>
    <div className='Reactions col-5 text-end'><button type="button" class="btn btn-outline-dark">:</button></div>
  </div>
  </div>
  </div>
  </>)
  }




const SegundoPost = () => {
  return (<>
  <div className='SegundoPost__Container container my-3 rounded-4'>
  <div className='HeaderSegundoPost__Container py-3  '>
  <div className='row'>
    <div className='Avatar col-2'><img src="https://picsum.photos/id/91/60/60" class="rounded-circle mx-auto d-block" alt="..." /></div>
    <div className='flex col-8'>
    <div className='PostUserName'><b>Vitaliy Boyko</b></div>
    <div className='HowLongAgo small text-secondary'>3 hours ago</div>
    </div>
    <div className='HamburgerButton col-2 '><button type="button" class="btn btn-outline-dark">:</button></div>
</div>
</div>

<div className='TextoSegundoPost__Container py-4'>
<p><b>I chose a wonderful coffee today, I wanted to tell you what product they have in stock - it`s a latte with coconut milk...</b></p>
</div>

<div className='BotonesSegundoPost__Container'>
<div className='row'>
<div className='Visualizations col-2'><FontAwesomeIcon icon={faEye} /> 6540</div>
    <div className='Likes col-2'><FontAwesomeIcon icon={faHeart} /> Like</div>
    <div className='Comment col-3'><FontAwesomeIcon icon={faEnvelope} /> Comment</div>
    <div className='Reactions col-5 text-end'><button type="button" class="btn btn-outline-dark">:</button></div>
</div>
</div>
  </div>
    </>)
}

const BarraDeEstado = () => {
  return (<>
  <div className='BarraDeEstado__Container'>
  <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
  <div className='row my-2'>
    <div className='File col-2'><FontAwesomeIcon icon={faFolder} /> File</div>
    <div className='Image col-2'><FontAwesomeIcon icon={faImage} /> Image</div>
    <div className='Location col-2'><FontAwesomeIcon icon={faLocationDot} /> Location</div>
    <div className='Public col-2'><FontAwesomeIcon icon={faEarthAmericas} /> Public</div>
    <div className='ButtonSend col-4 text-end'><button type="button" class="btn btn-outline-dark">Send</button></div>
  </div>
  </div>
    </>)
}


const AppDivDerecho = () => {
return (<>
<div className='AppDivDerecho__Container  col-3 mb-3'>
<HeaderDerecha /> 
<StoriesDerecha />
<SugerenciasDerecha />
<RecomendacionesDerecha /> 
</div>
</>)
}

const HeaderDerecha = () => {
  return(<>
  <div className='HeaderDerecha__Container row'>
    <div className='col-12 my-2'>
      <h3>Stories</h3>
    </div>
  </div>
  </>)
}

const StoriesDerecha = () => {
  return (<>
   <div className='StoriesDerecha__Container row justify-content-center'>
    <div className='col-5 px-0'>
<img src="https://picsum.photos/id/152/125/200" class="rounded float-start" alt="..." />
</div>
<div className='col-5 px-0'>
<img src="https://picsum.photos/id/401/125/200" class="rounded float-start" alt="..." />
</div>

</div>
  </>)
}

const SugerenciasDerecha = () => {
  return (<>
  <div className='SugerenciasDerecha__Container my-4'>
    <div className='row'>
      <h3>Suggestions</h3>
    </div>
    <div className='row my-2'>
    <div className='Avatar col-2'><img src="https://picsum.photos/id/248/60/60" class="rounded-circle mx-auto d-block" alt="..." /></div>
    <div className='flex col-7'>
    <div className='PostUserName mx-2'>Viviana</div>
    <div className='HowLongAgo mx-2 '>Yibeli</div>
    </div>
    <div className='col-2'>
    <button type="button" class="btn btn-outline-dark">Follow</button>
    </div>
  </div>
  <div className='row my-2'>
    <div className='Avatar col-2'><img src="https://picsum.photos/id/152/60/60" class="rounded-circle mx-auto d-block" alt="..." /></div>
    <div className='flex col-7'>
    <div className='PostUserName mx-2'>Lorenzo</div>
    <div className='HowLongAgo mx-2'>Mendoza</div>
    </div>
    <div className='col-2'>
    <button type="button" class="btn btn-outline-dark">Follow</button>
    </div>
  </div>
  <div className='row my-2'>
    <div className='Avatar col-2'><img src="https://picsum.photos/id/129/60/60" class="rounded-circle mx-auto d-block" alt="..." /></div>
    <div className='flex col-7'>
    <div className='PostUserName mx-2'>Fernando</div>
    <div className='HowLongAgo mx-2 '>Carrero</div>
    </div>
    <div className='col-2'>
    <button type="button" class="btn btn-outline-dark">Follow</button>
    </div>
  </div>
  </div>
  </>)
}

const RecomendacionesDerecha = () => {
  return (<>
  <div className='row'>
    <h3>Recommendations</h3>
  </div>
  <div className='row px-5 my-2'>
    <div className='col-5'>
    <img src="https://picsum.photos/id/859/100/100" class="rounded float-start" alt="..." />
      <p className='text-center'>UI/UX</p>
    </div>
    <div className='col-5'>
    <img src="https://picsum.photos/id/836/100/100" class="rounded float-start" alt="..." />
      <p className='text-center'>Music</p>
    </div>
  </div>
  <div className='row px-5 my-2'>
    <div className='col-5'>
    <img src="https://picsum.photos/id/755/100/100" class="rounded float-start" alt="..." />
      <p className='text-center'>Cooking</p>
    </div>
    <div className='col-5'>
    <img src="https://picsum.photos/id/806/100/100" class="rounded float-start" alt="..." />
      <p className='text-center'>Hiking</p>
    </div>
  </div>
  </>)
}

export default function App() {
  return (<>
  <div className='app__Container container-fluid d-flex mb-3 column '>
    <AppDivIzquierdo /> 
    <AppDivCentral />
    <AppDivDerecho /> 
  </div>
  </>);
}
