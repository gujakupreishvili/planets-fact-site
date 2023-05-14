// mercury
  const arrowMercury = document.querySelector(".arrow-mercury");
  const mercuryInfo = document.querySelector(".real-mercury");
  const overviewMercury = document.querySelector(".overview-mercury");
  const structureMercury =document.querySelector(".structure-mercury");
  const interalMercury =document.querySelector(".mercury-planet-mobile-interal");
  const planetMercury=document.querySelector(".mercury-planet-mobile");
  const overviewP =document.querySelector(".mercury-info-p");
  const structureP = document.querySelector(".mercury-structure-p");
  const geologyMercury = document.querySelector(".geology-mercury-mobile")
  const surface =document.querySelector(".surface-mercury");
  const surfaceP =document.querySelector(".surface-p");
 

  arrowMercury.addEventListener("click",() =>{
    mercuryInfo.style.display="block";
    overviewMercury.style.color='#497EFA';
    interalMercury.style.display="none";
      planetMercury.style.display="block";
      overviewP.style.display="block";
      structureP.style.display ="none";
      geologyMercury.style.display='none';
      overviewMercury.style.color='#497EFA';
      surfaceP.style.display="none";
      structureMercury.style.color="white";
      surface.style.color="white";
      arrowMercury.style.rotate= "90deg"; 
      arrowVenus.style.rotate="0deg"; 
      realVenus.style.display="none";
      realEarth.style.display="none";
      arrowMars.style.rotate="0deg";
      realMars.style.display="none";
      arrowJupiter.style.rotate="0deg";
      realJupiter.style.display="none";
      realSaturn.style.display="none";
      arrowUranus.style.rotate="0deg";
      realUranus.style.display="none";
      arrowNeptune.style.rotate="0deg";
      realNeptune.style.display="none";
     

      
  })
  overviewMercury.addEventListener("click",() =>{
    interalMercury.style.display="none";
      planetMercury.style.display="block";
      overviewP.style.display="block";
      structureP.style.display ="none";
      geologyMercury.style.display='none';
      overviewMercury.style.color='#497EFA';
      structureMercury.style.color="white";
      surface.style.color="white";
      surfaceP.style.display="none";
  })
  structureMercury.addEventListener("click",() =>{
      structureMercury.style.color="#497EFA";
      overviewMercury.style.color='white';
      interalMercury.style.display="block";
      planetMercury.style.display="none";
      overviewP.style.display="none";
      structureP.style.display ="block";
      geologyMercury.style.display='none';
      surface.style.color="white";
      surfaceP.style.display="none";
    })
  surface.addEventListener("click", () =>{
    geologyMercury.style.display='block';
    interalMercury.style.display="none";
    structureMercury.style.color="White";
    surface.style.color="#497EFA";
    overviewMercury.style.color="white";
    planetMercury.style.display="none";
    surfaceP.style.display="block";
    overviewP.style.display="none";
    structureP.style.display ="none";
    arrowEarth.style.rotate="0deg";
  }) 
  // venus-info
  const arrowVenus=document.querySelector(".arrow-venus");
  const realVenus=document.querySelector(".real-venus");
  const overviewVenus=document.querySelector(".overview-venus");
  const venusinteralMobile=document.querySelector(".venus-interal-mobile");
  const structurepVenus=document.querySelector(".structure-p-venus");
  const structureV=document.querySelector(".structure-venus");
  const venusPlanetaMobile=document.querySelector(".venus-planeta-mobile");
  const overviewpVenus=document.querySelector(".overview-p-venus");
  const surfacepVenus=document.querySelector(".surface-p-venus");
  const venusGeologyMobile=document.querySelector(".venus-geology-mobile");
  const surfaceV=document.querySelector(".surface-venus");
  

  arrowVenus.addEventListener("click",() =>{
    arrowMercury.style.rotate="0deg";
    mercuryInfo.style.display='none';
    arrowVenus.style.rotate="90deg";
    realVenus.style.display="block";
    overviewVenus.style.color="#EDA249";
    venusinteralMobile.style.display="none";
    structurepVenus.style.display="none";
    surfacepVenus.style.display="none";
    venusGeologyMobile.style.display="none";
    structureV.style.color="white";
    surfaceV.style.color="white";
    arrowEarth.style.rotate="0deg";
    realEarth.style.display="none";
    arrowMars.style.rotate="0deg";
    realMars.style.display="none";
    arrowJupiter.style.rotate="0deg";
    realJupiter.style.display="none";
    realSaturn.style.display="none";
    arrowUranus.style.rotate="0deg";
    realUranus.style.display="none";
    arrowNeptune.style.rotate="0deg";
    realNeptune.style.display="none";
  })
  overviewVenus.addEventListener("click",()=>{
    overviewVenus.style.color="#EDA249"
    venusinteralMobile.style.display="none"
    structurepVenus.style.display="none";
    venusPlanetaMobile.style.display="block";
    overviewpVenus.style.display="block";
    structureV.style.color="white";
    surfacepVenus.style.display="none";
    venusGeologyMobile.style.display="none";
    surfaceV.style.color="white"
  })
  structureV.addEventListener("click",() =>{
    venusinteralMobile.style.display="block";
    structurepVenus.style.display="block";
    venusPlanetaMobile.style.display="none";
    overviewpVenus.style.display="none";
    structureV.style.color="#EDA249";
    overviewVenus.style.color="white";
    surfacepVenus.style.display="none";
    venusGeologyMobile.style.display="none";
    surfaceV.style.color='white'

  })
  surfaceV.addEventListener("click",() =>{
    surfacepVenus.style.display="block";
    venusGeologyMobile.style.display="block";
    venusinteralMobile.style.display="none";
    venusPlanetaMobile.style.display="none";
    structurepVenus.style.display="none"
    overviewpVenus.style.display="none"
    surfaceV.style.color="#EDA249"
    structureV.style.color="white"
    overviewVenus.style.color="white"
  })

  // earth js 
  const arrowEarth=document.querySelector('.arrow-earth');
  const realEarth=document.querySelector(".real-earth");
  const overviewEarth=document.querySelector('.overview-earth');
  const structureEarth=document.querySelector(".structure-earth");
  const surfaceEarth=document.querySelector(".surface-earth");
  const earthinteralMobile =document.querySelector('.earth-interal-mobile');
  const earthGeologyMobile=document.querySelector(".earth-geology-mobile");
  const earthplanetaMobile=document.querySelector(".earth-planeta-mobile")
  const overviewpEarth=document.querySelector(".overview-p-earth");
  const structurepEarth=document.querySelector('.structure-p-earth');
  const surfacepEarth=document.querySelector(".surface-p-earth");



  arrowEarth.addEventListener("click",() =>{
    realVenus.style.display='none';
    mercuryInfo.style.display='none'
    arrowEarth.style.rotate="90deg";
    arrowMercury.style.rotate="0deg";
    arrowVenus.style.rotate="0deg";
    realEarth.style.display="block";
    overviewEarth.style.color="#6D2ED5";
    structureEarth.style.color="white";
    surfaceEarth.style.color="white";
    earthinteralMobile.style.display="none";
    earthGeologyMobile.style.display="none";
    structurepEarth.style.display="none";
    surfacepEarth.style.display="none";
    earthplanetaMobile.style.display="block"
    arrowMars.style.rotate="0deg";
    realMars.style.display="none";
    arrowJupiter.style.rotate="0deg";
    realJupiter.style.display="none";
    realSaturn.style.display="none";
    arrowUranus.style.rotate="0deg";
    realUranus.style.display="none";
    arrowNeptune.style.rotate="0deg";
    realNeptune.style.display="none";

  })
  overviewEarth.addEventListener("click",() =>{
    earthinteralMobile.style.display="none";
    earthGeologyMobile.style.display="none";
    structurepEarth.style.display="none";
    surfacepEarth.style.display="none";
    overviewpEarth.style.display="block";
    earthplanetaMobile.style.display="block";
    overviewEarth.style.color="#6D2ED5";
    structureEarth.style.color="white";
    surfaceEarth.style.color="white";

  })

  structureEarth.addEventListener("click",()=>{
    earthinteralMobile.style.display="block";
    earthGeologyMobile.style.display="none";
    structurepEarth.style.display="block";
    surfacepEarth.style.display="none";
    overviewpEarth.style.display="none";
    earthplanetaMobile.style.display="none";
    overviewEarth.style.color="white";
    structureEarth.style.color="#6D2ED5";
    surfaceEarth.style.color="white";

  })

  surfaceEarth.addEventListener("click",() =>{
    earthinteralMobile.style.display="none";
    earthGeologyMobile.style.display="block";
    structurepEarth.style.display="none";
    surfacepEarth.style.display="block";
    overviewpEarth.style.display="none";
    earthplanetaMobile.style.display="none";
    overviewEarth.style.color="white";
    structureEarth.style.color="white";
    surfaceEarth.style.color="#6D2ED5";

  })

  // mars js 
  const arrowMars= document.querySelector('.arrow-mars');
  const overviewMars=document.querySelector(".overview-mars");
  const structureMars=document.querySelector(".structure-mars");
  const surfaceMars=document.querySelector(".surface-mars");
  const realMars =document.querySelector(".real-mars");
  const marsPlanetamobile=document.querySelector(".mars-planeta-mobile");
  const marsInteralmobile=document.querySelector(".mars-interal-mobile");
  const marsGeologymobile=document.querySelector(".mars-geology-mobile");
  const overviewPMars=document.querySelector(".overview-p-mars");
  const structurePMars=document.querySelector(".structure-p-mars");
  const surfacePMars=document.querySelector(".surface-p-mars");

  arrowMars.addEventListener("click",() =>{
    arrowMars.style.rotate="90deg";
    realEarth.style.display="none";
    arrowEarth.style.rotate="0deg"
    realVenus.style.display='none';
    arrowVenus.style.rotate="0deg";
    mercuryInfo.style.display="none";
    arrowMercury.style.rotate="0deg";
    overviewMars.style.color="#D14C32";
    structureMars.style.color="white";
    surfaceMars.style.color="white";
    realMars.style.display="block";
    marsPlanetamobile.style.display="block";
    marsInteralmobile.style.display="none";
    marsGeologymobile.style.display="none";
    overviewPMars.style.display="block";
    structurePMars.style.display="none";
    surfacePMars.style.display="none";
    arrowJupiter.style.rotate="0deg";
    realJupiter.style.display="none";
    realSaturn.style.display="none";
    arrowUranus.style.rotate="0deg";
    realUranus.style.display="none";
    arrowNeptune.style.rotate="0deg";
    realNeptune.style.display="none";
  })
  overviewMars.addEventListener("click",()=>{
    overviewMars.style.color="#D14C32";
    structureMars.style.color="white";
    surfaceMars.style.color="white";
    marsPlanetamobile.style.display="block";
    marsInteralmobile.style.display="none";
    marsGeologymobile.style.display="none";
    overviewPMars.style.display="block";
    structurePMars.style.display="none";
    surfacePMars.style.display="none";
  })
  structureMars.addEventListener("click",()=>{
    overviewMars.style.color="white";
    structureMars.style.color="#D14C32";
    surfaceMars.style.color="white";
    marsPlanetamobile.style.display="none";
    marsInteralmobile.style.display="block";
    marsGeologymobile.style.display="none";
    overviewPMars.style.display="none";
    structurePMars.style.display="block";
    surfacePMars.style.display="none";
  })
  surfaceMars.addEventListener("click",() =>{
    overviewMars.style.color="white";
    structureMars.style.color="white";
    surfaceMars.style.color="#D14C32";
    marsPlanetamobile.style.display="none";
    marsInteralmobile.style.display="none";
    marsGeologymobile.style.display="block";
    overviewPMars.style.display="none";
    structurePMars.style.display="none";
    surfacePMars.style.display="block";
  })

  // jupiter js
  const arrowJupiter=document.querySelector(".arrow-jupiter");
  const realJupiter=document.querySelector('.real-jupiter');
  const overviewJupiter=document.querySelector(".overview-jupiter");
  const structureJupiter=document.querySelector(".structure-jupiter");
  const surfaceJupiter=document.querySelector('.surface-jupiter');
  const jupiterPlanetaMobile=document.querySelector('.jupiter-planeta-mobile');
  const jupiterInteralMobile=document.querySelector(".jupiter-interal-mobile");
  const jupiterGeologyMobile=document.querySelector(".jupiter-geology-mobile");
  const overviewPJupiter=document.querySelector('.overview-p-jupiter');
  const structurePJupiter=document.querySelector(".structure-p-jupiter");
  const surfacePJupiter=document.querySelector('.surface-p-jupiter');


  arrowJupiter.addEventListener("click",()=>{
    arrowJupiter.style.rotate="90deg";
    arrowMars.style.rotate="0deg";
    realMars.style.display="none";
    realEarth.style.display="none";
    arrowEarth.style.rotate="0deg"
    realVenus.style.display='none';
    arrowVenus.style.rotate="0deg";
    mercuryInfo.style.display="none";
    arrowMercury.style.rotate="0deg";
    realJupiter.style.display="block";
    overviewJupiter.style.color="#D83A34";
    structureJupiter.style.color="white";
    surfaceJupiter.style.color="white";
    jupiterPlanetaMobile.style.display="block";
    jupiterInteralMobile.style.display='none';
    jupiterGeologyMobile.style.display="none"
    overviewJupiter.style.display="block";
    structurePJupiter.style.display="none";
    surfacePJupiter.style.display="none";
    realSaturn.style.display="none";
    arrowUranus.style.rotate="0deg";
    realUranus.style.display="none";
    arrowNeptune.style.rotate="0deg";
    realNeptune.style.display="none";

  })
  overviewJupiter.addEventListener('click',() =>{
    overviewJupiter.style.color="#D83A34";
    structureJupiter.style.color="white";
    surfaceJupiter.style.color="white";
    jupiterPlanetaMobile.style.display="block";
    jupiterInteralMobile.style.display='none';
    jupiterGeologyMobile.style.display="none"
    overviewJupiter.style.display="block";
    structurePJupiter.style.display="none";
    surfacePJupiter.style.display="none";

  })
  structureJupiter.addEventListener("click",()=>{
    overviewJupiter.style.color="white";
    structureJupiter.style.color="#D83A34";
    surfaceJupiter.style.color="white";
    jupiterPlanetaMobile.style.display="none";
    jupiterInteralMobile.style.display='block';
    jupiterGeologyMobile.style.display="none";
    overviewPJupiter.style.display="none";
    structurePJupiter.style.display="block";
    surfacePJupiter.style.display="none";

  })
  surfaceJupiter.addEventListener("click",()=>{
    overviewJupiter.style.color="white";
    structureJupiter.style.color="white";
    surfaceJupiter.style.color="#D83A34";
    jupiterPlanetaMobile.style.display="none";
    jupiterInteralMobile.style.display='none';
    jupiterGeologyMobile.style.display="block";
    overviewPJupiter.style.display="none";
    structurePJupiter.style.display="none";
    surfacePJupiter.style.display="block";
  })
  // satunr js 
  const arrowSaturn=document.querySelector(".arrow-saturn");
  const overviewSaturn=document.querySelector(".overview-saturn");
  const structureSaturn=document.querySelector(".structure-saturn");
  const surfaceSaturn=document.querySelector(".surface-saturn");
  const saturnPlanetaMobile=document.querySelector(".saturn-planeta-mobile");
  const saturnInteralMobile=document.querySelector(".saturn-interal-mobile");
  const saturnGeologyMobile=document.querySelector(".saturn-geology-mobile");
  const realSaturn=document.querySelector(".real-saturn");
  const overviewPSaturn=document.querySelector(".overview-p-saturn");
  const structurePSaturn=document.querySelector('.structure-p-saturn');
  const surfacePSaturn=document.querySelector(".surface-p-saturn");

  arrowSaturn.addEventListener("click",()=>{
    arrowSaturn.style.rotate="90deg"
    arrowJupiter.style.rotate="0deg";
    realJupiter.style.display="none"
    arrowMars.style.rotate="0deg";
    realMars.style.display="none";
    realEarth.style.display="none";
    arrowEarth.style.rotate="0deg"
    realVenus.style.display='none';
    arrowVenus.style.rotate="0deg";
    mercuryInfo.style.display="none";
    arrowMercury.style.rotate="0deg";
    overviewSaturn.style.color="#CD5120";
    structureSaturn.style.color="white";
    surfaceSaturn.style.color="white";
    saturnPlanetaMobile.style.display="block";
    saturnInteralMobile.style.display="none";
    saturnGeologyMobile.style.display="none";
    realSaturn.style.display="block";
    overviewPSaturn.style.display="block";
    structurePSaturn.style.display="none";
    surfacePSaturn.style.display="none"
    arrowUranus.style.rotate="0deg";
    realUranus.style.display="none";
    arrowNeptune.style.rotate="0deg";
    realNeptune.style.display="none";
  })
  overviewSaturn.addEventListener("click",()=>{
    overviewSaturn.style.color="#CD5120";
    structureSaturn.style.color="white";
    surfaceSaturn.style.color="white";
    saturnPlanetaMobile.style.display="block";
    saturnInteralMobile.style.display="none";
    saturnGeologyMobile.style.display="none"
    overviewPSaturn.style.display="block";
    structurePSaturn.style.display="none";
    surfacePSaturn.style.display="none"
  })
  structureSaturn.addEventListener("click",()=>{
    overviewSaturn.style.color="white";
    structureSaturn.style.color="#CD5120";
    surfaceSaturn.style.color="white";
    saturnPlanetaMobile.style.display="none";
    saturnInteralMobile.style.display="block";
    saturnGeologyMobile.style.display="none"
    overviewPSaturn.style.display="none";
    structurePSaturn.style.display="block";
    surfacePSaturn.style.display="none";

  })
  surfaceSaturn.addEventListener("click",()=>{
    overviewSaturn.style.color="white";
    structureSaturn.style.color="white";
    surfaceSaturn.style.color="#CD5120";
    saturnPlanetaMobile.style.display="none";
    saturnInteralMobile.style.display="none";
    saturnGeologyMobile.style.display="block";
    overviewPSaturn.style.display="none";
    structurePSaturn.style.display="none";
    surfacePSaturn.style.display="block";
  })
  // uranus js 

  const arrowUranus=document.querySelector(".arrow-uranus");
  const overviewUranus=document.querySelector(".overview-uranus");
  const structureUranus=document.querySelector(".structure-uranus");
  const surfaceUranus=document.querySelector('.surface-uranus');
  const uranusPlanetaMobile=document.querySelector(".uranus-planeta-mobile");
  const uranusInteralMobile=document.querySelector(".uranus-interal-mobile");
  const uranusGeologyMobile=document.querySelector(".uranus-geology-mobile");
  const realUranus=document.querySelector(".real-uranus");
  const overviewPUranus=document.querySelector(".overview-p-uranus");
  const structurePUranus=document.querySelector(".structure-p-uranus");
  const surfacePUranus=document.querySelector(".surface-p-uranus");
  

  arrowUranus.addEventListener("click",() =>{
    arrowUranus.style.rotate="90deg";
    arrowSaturn.style.rotate="0deg";
    realSaturn.style.display="none"
    arrowJupiter.style.rotate="0deg";
    realJupiter.style.display="none"
    arrowMars.style.rotate="0deg";
    realMars.style.display="none";
    realEarth.style.display="none";
    arrowEarth.style.rotate="0deg"
    realVenus.style.display='none';
    arrowVenus.style.rotate="0deg";
    mercuryInfo.style.display="none";
    arrowMercury.style.rotate="0deg";
    overviewUranus.style.color="#1EC1A2";
    structureUranus.style.color="white";
    surfaceUranus.style.color="white";
    uranusPlanetaMobile.style.display="block";
    uranusInteralMobile.style.display="none";
    uranusGeologyMobile.style.display="none";
    realUranus.style.display="block";
    overviewPUranus.style.display="block";
    structurePUranus.style.display="none";
    surfacePUranus.style.display="none";
    arrowNeptune.style.rotate="0deg";
    realNeptune.style.display="none";
  })
  overviewUranus.addEventListener("click",()=>{
    overviewUranus.style.color="#1EC1A2";
    structureUranus.style.color="white";
    surfaceUranus.style.color="white";
    uranusPlanetaMobile.style.display="block";
    uranusInteralMobile.style.display="none";
    uranusGeologyMobile.style.display="none";
    overviewPUranus.style.display="block";
    structurePUranus.style.display="none";
    surfacePUranus.style.display="none"

  })
  structureUranus.addEventListener("click",()=>{
    overviewUranus.style.color="white";
    structureUranus.style.color="#1EC1A2";
    surfaceUranus.style.color="white";
    uranusPlanetaMobile.style.display="none";
    uranusInteralMobile.style.display="block";
    uranusGeologyMobile.style.display="none";
    overviewPUranus.style.display="none";
    structurePUranus.style.display="block";
    surfacePUranus.style.display="none"

  })
  surfaceUranus.addEventListener("click",()=>{
    overviewUranus.style.color="white";
    structureUranus.style.color="white";
    surfaceUranus.style.color="#1EC1A2";
    uranusPlanetaMobile.style.display="none";
    uranusInteralMobile.style.display="none";
    uranusGeologyMobile.style.display="block";
    overviewPUranus.style.display="none";
    structurePUranus.style.display="none";
    surfacePUranus.style.display="block"
  })
// neptune js
  const arrowNeptune=document.querySelector(".arrow-neptune");
  const overviewNeptune=document.querySelector(".overview-neptune");
  const structureNeptune=document.querySelector(".structure-neptune");
  const surfaceNeptune=document.querySelector(".surface-neptune");
  const neptunePlanetaMobile=document.querySelector(".neptune-planeta-mobile");
  const neptuneInteralMobile=document.querySelector(".neptune-interal-mobile");
  const neptuneGeologyMobile=document.querySelector(".neptune-geology-mobile");
  const realNeptune=document.querySelector(".real-neptune");

  arrowNeptune.addEventListener("click",()=>{
    arrowNeptune.style.rotate="90deg"
    arrowUranus.style.rotate="0deg";
    realUranus.style.display="none";
    arrowSaturn.style.rotate="0deg";
    realSaturn.style.display="none"
    arrowJupiter.style.rotate="0deg";
    realJupiter.style.display="none"
    arrowMars.style.rotate="0deg";
    realMars.style.display="none";
    realEarth.style.display="none";
    arrowEarth.style.rotate="0deg"
    realVenus.style.display='none';
    arrowVenus.style.rotate="0deg";
    mercuryInfo.style.display="none";
    arrowMercury.style.rotate="0deg";
    overviewNeptune.style.color="#2D68F0";
    structureNeptune.style.color="white";
    surfaceNeptune.style.color="white";
    neptunePlanetaMobile.style.display="block";
    neptuneInteralMobile.syle.display="none";
    neptuneGeologyMobile.style.display='none';
    realNeptune.style.display="block";
  })

  overviewNeptune.addEventListener("click",()=>{
    overviewNeptune.style.color="#2D68F0";
    structureNeptune.style.color="white";
    surfaceNeptune.style.color="white";
    neptunePlanetaMobile.style.display="block";
    neptuneInteralMobile.syle.display="none";
    neptuneGeologyMobile.style.display='none';

  })
  structureNeptune.addEventListener("click",()=>{
    overviewNeptune.style.color="white";
    structureNeptune.style.color="#2D68F0";
    surfaceNeptune.style.color="white";
    neptunePlanetaMobile.style.display="none";
    neptuneInteralMobile.syle.display="block";
    neptuneGeologyMobile.style.display='none';

  })
  surfaceNeptune.addEventListener("click",()=>{
    overviewNeptune.style.color="white";
    structureNeptune.style.color="white";
    surfaceNeptune.style.color="#2D68F0";
    neptunePlanetaMobile.style.display="none";
    neptuneInteralMobile.syle.display="none";
    neptuneGeologyMobile.style.display='block';

  })


 
   