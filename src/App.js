import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

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
    <img src="https://placehold.co/80x80" class="rounded-circle mx-auto d-block" alt="..." />
      </div>
    </div>
    <div className='text-center'>
  <p className='m-0'>Nombre del usuario</p>
  <p className=''>@Usuario</p>
  </div>
    </div>
  </>)

}

const NavBar = () => {
return (<>
<div className='NavBar__Container '>
<ul class="nav flex-column">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">News Feed</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Messeges</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Forum</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" aria-current="page">Friends</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Media</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Settings</a>
  </li>
</ul>
</div>
</>)

}

const DescargarApp = () => {
  return (<>
  <div className='DescargarApp__Container  border border-danger my-3 w-75 p-3'>
    <div className='row'>
      <div className='col-12'>
    <img src="https://placehold.co/80x80" class="rounded-circle mx-auto d-block" alt="..." />
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
      <p>Recents</p>
    </div>
    <div className='col-2'>
      <p>Friends</p>
    </div>
    <div className='col-2'>
      <p>Popular</p>
    </div>
  </div>
</div>
</>)
}

const PrimerPost = () => {
return (<>
<div className='PrimerPost__Container container'>
  
<div className='HeaderPrimerPost__Container   '>
  <div className='row'>
    <div className='Avatar col-2'><img src="https://placehold.co/60x60" class="rounded-circle mx-auto d-block" alt="..." /></div>
    <div className='flex col-8'>
    <div className='PostUserName'>Nombre</div>
    <div className='HowLongAgo '>2 hours ago</div>
    </div>
    <div className='HamburgerButton col-2 '>button</div>
</div>
</div>

<div className='TextoPrimerPost py-4'>
<p>Hi everyone, today I was on the most beautiful mountain in the world! I also want to say hi to @Silena, @Olya and @Davis!</p>
</div>

<div className='FotosPrimerPost'>
  <div className='row'>
    <div className='col-3 px-0'>
<img src="https://placehold.co/150x200" class="rounded float-start" alt="..." />
</div>
<div className='col-3 px-0'>
<img src="https://placehold.co/150x200" class="rounded float-start" alt="..." />
</div>
<div className='col-6 px-0'>
<img src="https://placehold.co/250x200" class="rounded float-start" alt="..." />
</div>
</div>
</div>

<div className='BotonesPrimerPost'>
<div className='row'>
  <div className='Visualizations col-1'>6540</div>
  <div className='Likes col-1'>Like</div>
  <div className='Comment col-1'>Comment</div>
  <div className='Reactions col-9 text-end'>Button</div>
</div>
</div>
</div>
</>)
}



const SegundoPost = () => {
  return (<>
  <div className='SegundoPost__Container container py-3'>
  <div className='HeaderSegundoPost__Container   '>
  <div className='row'>
    <div className='Avatar col-2'><img src="https://placehold.co/60x60" class="rounded-circle mx-auto d-block" alt="..." /></div>
    <div className='flex col-8'>
    <div className='PostUserName'>Nombre</div>
    <div className='HowLongAgo '>2 hours ago</div>
    </div>
    <div className='HamburgerButton col-2 '>button</div>
</div>
</div>

<div className='TextoSegundoPost__Container py-4'>
<p>I chose a wonderful coffee today, I wanted to tell you what product they have in stock - it`s a latte with coconut milk...</p>
</div>

<div className='BotonesSegundoPost__Container'>
<div className='row'>
  <div className='Visualizations col-1'>6540</div>
  <div className='Likes col-1'>Like</div>
  <div className='Comment col-1'>Comment</div>
  <div className='Reactions col-9 text-end'>Button</div>
</div>
</div>
  </div>
    </>)
}

const BarraDeEstado = () => {
  return (<>
  <div className='BarraDeEstado__Container'>
  <input type="text" class="form-control" aria-label="Text input with dropdown button"/>
  <div className='row'>
    <div className='File col-2'>File</div>
    <div className='Image col-2'>Image</div>
    <div className='Location col-2'>Location</div>
    <div className='Public col-2'>Public</div>
    <div className='ButtonSend col-4 text-end'>Send</div>
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
<img src="https://placehold.co/125x200" class="rounded float-start" alt="..." />
</div>
<div className='col-5 px-0'>
<img src="https://placehold.co/125x200" class="rounded float-start" alt="..." />
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
    <div className='Avatar col-2'><img src="https://placehold.co/60x60" class="rounded-circle mx-auto d-block" alt="..." /></div>
    <div className='flex col-7'>
    <div className='PostUserName'>Nombre</div>
    <div className='HowLongAgo '>Apellido</div>
    </div>
    <div className='col-2'>
    <p>Button</p>
    </div>
  </div>
  <div className='row my-2'>
    <div className='Avatar col-2'><img src="https://placehold.co/60x60" class="rounded-circle mx-auto d-block" alt="..." /></div>
    <div className='flex col-7'>
    <div className='PostUserName'>Nombre</div>
    <div className='HowLongAgo '>Apellido</div>
    </div>
    <div className='col-2'>
    <p>Button</p>
    </div>
  </div>
  <div className='row my-2'>
    <div className='Avatar col-2'><img src="https://placehold.co/60x60" class="rounded-circle mx-auto d-block" alt="..." /></div>
    <div className='flex col-7'>
    <div className='PostUserName'>Nombre</div>
    <div className='HowLongAgo '>Apellido</div>
    </div>
    <div className='col-2'>
    <p>Button</p>
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
      <p>UI/UX</p>
    </div>
    <div className='col-5'>
      <p>Music</p>
    </div>
  </div>
  <div className='row px-5 my-2'>
    <div className='col-5'>
      <p>Cooking</p>
    </div>
    <div className='col-5'>
      <p>Hiking</p>
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
