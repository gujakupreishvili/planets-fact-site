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
  const overviewPNeptune=document.querySelector(".overview-p-neptune");
  const structurePNeptune=document.querySelector(".structure-p-neptune");
  const surfacePNeptune=document.querySelector(".surface-p-neptune");

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
    neptuneInteralMobile.style.display="none";
    neptuneGeologyMobile.style.display='none';
    realNeptune.style.display="block";
    overviewPNeptune.style.display="block";
    structurePNeptune.style.display="none";
    surfacePNeptune.style.display="none";
  })

  overviewNeptune.addEventListener("click",()=>{
    overviewNeptune.style.color="#2D68F0";
    structureNeptune.style.color="white";
    surfaceNeptune.style.color="white";
    neptunePlanetaMobile.style.display="block";
    neptuneInteralMobile.style.display="none";
    neptuneGeologyMobile.style.display='none';
    overviewPNeptune.style.display="block";
    structurePNeptune.style.display="none";
    surfacePNeptune.style.display="none";

  })
  structureNeptune.addEventListener("click",()=>{
    overviewNeptune.style.color="white";
    structureNeptune.style.color="#2D68F0";
    surfaceNeptune.style.color="white";
    neptunePlanetaMobile.style.display="none";
    neptuneInteralMobile.style.display="block";
    neptuneGeologyMobile.style.display='none';
    overviewPNeptune.style.display="none";
    structurePNeptune.style.display="block";
    surfacePNeptune.style.display="none";

  })
  surfaceNeptune.addEventListener("click",()=>{
    overviewNeptune.style.color="white";
    structureNeptune.style.color="white";
    surfaceNeptune.style.color="#2D68F0";
    neptunePlanetaMobile.style.display="none";
    neptuneInteralMobile.style.display="none";
    neptuneGeologyMobile.style.display='block';
    overviewPNeptune.style.display="none";
    structurePNeptune.style.display="none";
    surfacePNeptune.style.display="block";
  })
  // tablet js
  const mercury=document.getElementById("mercury");
  const overviewdivMercury=document.querySelector(".overview-div-mercury");
  const structuredivMercury=document.querySelector(".structure-div-mercury");
  const surfacedivMercury=document.querySelector(".surface-div-mercury");


  mercury.addEventListener("click",() =>{
    mercuryInfo.style.display="block";
    mercury.style.color="#419EBB";
    interalMercury.style.display="none";
    planetMercury.style.display="block";
    overviewP.style.display="block";
    structureP.style.display ="none";
    geologyMercury.style.display='none';
    surfaceP.style.display="none";
    structureMercury.style.color="white";
    surface.style.color="white";
    overviewdivMercury.style.backgroundColor="#419EBB";
    realVenus.style.display="none"
    venus.style.color="white"
    realEarth.style.display="none";
    earth.style.color="white";
    structuredivMercury.style.backgroundColor="#4b4b4b";//nacrisferi
    surfacedivMercury.style.backgroundColor="#4b4b4b";
    mars.style.color="white";
    realMars.style.display="none";
    jupiter.style.color="white";
    realJupiter.style.display="none";
    saturn.style.color="white"
    realSaturn.style.display="none";
    uranus.style.color="white";
    realUranus.style.display="none";
    neptune.style.color="white";
    realNeptune.style.display="none";
  })
  overviewdivMercury.addEventListener("click",() =>{
    interalMercury.style.display="none";
      planetMercury.style.display="block";
      overviewP.style.display="block";
      structureP.style.display ="none";
      geologyMercury.style.display='none';
      overviewMercury.style.color='white';
      structureMercury.style.color="white";
      surface.style.color="white";
      surfaceP.style.display="none";
      overviewdivMercury.style.backgroundColor="#419EBB";//lurji
      structuredivMercury.style.backgroundColor="#4b4b4b";//nacrisferi
      surfacedivMercury.style.backgroundColor="#4b4b4b";
      overviewMercury.style.color="white";
      structureMercury.style.color="white";
      surfaceV.style.color="white";
  })
  structuredivMercury.addEventListener("click",() =>{
      structureMercury.style.color="white";
      overviewMercury.style.color='white';
      interalMercury.style.display="block";
      planetMercury.style.display="none";
      overviewP.style.display="none";
      structureP.style.display ="block";
      geologyMercury.style.display='none';
      surface.style.color="white";
      surfaceP.style.display="none";
      structuredivMercury.style.backgroundColor="#419EBB";
      overviewdivMercury.style.backgroundColor="#4b4b4b";
      surfacedivMercury.style.backgroundColor="#4b4b4b";
      overviewMercury.style.color="white";
      structureMercury.style.color="white";
      surfaceV.style.color="white";
      
    })
    surfacedivMercury.addEventListener("click", () =>{
    geologyMercury.style.display='block';
    interalMercury.style.display="none";
    planetMercury.style.display="block";
    structureMercury.style.color="White";
    surface.style.color="white";
    overviewMercury.style.color="white";
    planetMercury.style.display="none";
    surfaceP.style.display="block";
    overviewP.style.display="none";
    structureP.style.display ="none";
    arrowEarth.style.rotate="0deg";
    structuredivMercury.style.backgroundColor="#4b4b4b";
    overviewdivMercury.style.backgroundColor="#4b4b4b";
    surfacedivMercury.style.backgroundColor="#419EBB";
    overviewMercury.style.color="white";
    structureMercury.style.color="white";
    surfaceV.style.color="white";
  })
  // venus
  const venus=document.getElementById("venus");
  const overviewdivVenus=document.querySelector(".overview-div-venus");
  const structuredivVenus=document.querySelector(".structure-div-venus");
  const surfacedivVenus=document.querySelector(".surface-div-venus");

  venus.addEventListener("click",()=>{
    realVenus.style.display="block";
    mercuryInfo.style.display="none";
    venus.style.color="#EDA249";
    mercury.style.color="white";
    overviewdivVenus.style.backgroundColor='#EDA249';
    structuredivVenus.style.backgroundColor="#4b4b4b";
    surfacedivVenus.style.backgroundColor="#4b4b4b";
    venusPlanetaMobile.style.display="block";
    venusinteralMobile.style.display="none";
    venusGeologyMobile.style.display="none";
    overviewVenus.style.color="white";
    structureV.style.color="white";
    surfaceV.style.color="white";
    overviewpVenus.style.display="block";
    surfacepVenus.style.display="none";
    structurepVenus.style.display="none";
    realEarth.style.display="none";
    earth.style.color="white";
    mars.style.color="white";
    realMars.style.display="none"
    jupiter.style.color="white";
    realJupiter.style.display="none";
    saturn.style.color="white"
    realSaturn.style.display="none";
    uranus.style.color="white";
    realUranus.style.display="none";
    neptune.style.color="white";
    realNeptune.style.display="none";
  })
  overviewdivVenus.addEventListener("click",()=>{
    overviewdivVenus.style.backgroundColor='#EDA249';
    structuredivVenus.style.backgroundColor="#4b4b4b";
    surfacedivVenus.style.backgroundColor="#4b4b4b";
    venusPlanetaMobile.style.display="block";
    venusinteralMobile.style.display="none";
    venusGeologyMobile.style.display="none";
    overviewVenus.style.color="white";
    structureV.style.color="white";
    surfaceV.style.color="white";
    overviewpVenus.style.display="block";
    surfacepVenus.style.display="none";
    structurepVenus.style.display="none";
    overviewVenus.style.color="white";
    structureV.style.color="white";
    surfaceV.style.color="white";
  })
  structuredivVenus.addEventListener("click",()=>{
    overviewdivVenus.style.backgroundColor='#4b4b4b';
    structuredivVenus.style.backgroundColor="#EDA249";
    surfacedivVenus.style.backgroundColor="#4b4b4b";
    venusPlanetaMobile.style.display="none";
    venusinteralMobile.style.display="block";
    venusGeologyMobile.style.display="none";
    overviewVenus.style.color="white";
    structureV.style.color="white";
    surfaceV.style.color="white";
    overviewpVenus.style.display="none";
    surfacepVenus.style.display="block";
    structurepVenus.style.display="none";
    overviewVenus.style.color="white";
    structureV.style.color="white";
    surfaceV.style.color="white";
  })
  surfacedivVenus.addEventListener("click",()=>{
    overviewdivVenus.style.backgroundColor='#4b4b4b';
    structuredivVenus.style.backgroundColor="#4b4b4b";
    surfacedivVenus.style.backgroundColor="#EDA249";
    venusPlanetaMobile.style.display="block";
    venusinteralMobile.style.display="none";
    venusGeologyMobile.style.display="block";
    overviewVenus.style.color="white";
    structureV.style.color="white";
    surfaceV.style.color="white";
    overviewpVenus.style.display="none";
    surfacepVenus.style.display="none";
    structurepVenus.style.display="block";
    overviewVenus.style.color="white";
    structureV.style.color="white";
    surfaceV.style.color="white";
  })
  // earth
  const earth=document.getElementById("earth");
  const overviewdivEarth=document.querySelector(".overview-div-earth");
  const structuredivEarth=document.querySelector(".structure-div-earth");
  const surfacedivEarth=document.querySelector(".surface-div-earth");

  earth.addEventListener("click",()=>{
    venus.style.color="white";
    mercury.style.color="white";
    earth.style.color="#6D2ED5";
    mercuryInfo.style.display='none';
    realVenus.style.display="none";
    realEarth.style.display="block";
    overviewdivEarth.style.backgroundColor="#6D2ED5";
    overviewEarth.style.color="white";
    structuredivEarth.style.backgroundColor="#4b4b4b";
    surfacedivEarth.style.backgroundColor='#4b4b4b';
    earthplanetaMobile.style.display="block";
    earthinteralMobile.style.display="none";
    earthGeologyMobile.style.display="none";
    overviewpEarth.style.display="block";
    structurepEarth.style.display="none";
    surfacepEarth.style.display="none"
    mars.style.color="white";
    realMars.style.display="none";
    jupiter.style.color="white";
    realJupiter.style.display="none";
    saturn.style.color="white"
    realSaturn.style.display="none";
    uranus.style.color="white";
    realUranus.style.display="none";
    neptune.style.color="white";
    realNeptune.style.display="none";
  })
  overviewdivEarth.addEventListener("click",()=>{
    overviewdivEarth.style.backgroundColor="#6D2ED5";
    overviewEarth.style.color="white";
    structuredivEarth.style.backgroundColor="#4b4b4b";
    structureEarth.style.color="white";
    surfacedivEarth.style.backgroundColor='#4b4b4b';
    earthplanetaMobile.style.display="block";
    earthinteralMobile.style.display="none";
    earthGeologyMobile.style.display="none";
    overviewpEarth.style.display="block";
    structurepEarth.style.display="none";
    surfacepEarth.style.display="none";
    overviewEarth.style.color="white";
    structureEarth.style.color="white";
    surfaceEarth.style.color="white";
  })
  structuredivEarth.addEventListener("click",()=>{
    structuredivEarth.style.backgroundColor="#6D2ED5";
    structureEarth.style.color="white";
    surfacedivEarth.style.backgroundColor='#4b4b4b';
    surfaceEarth.style.color="white";
    overviewdivEarth.style.backgroundColor="#4b4b4b";
    overviewEarth.style.color="white";
    earthplanetaMobile.style.display="none";
    earthinteralMobile.style.display="block";
    earthGeologyMobile.style.display="none";
    overviewpEarth.style.display="none";
    structurepEarth.style.display="block";
    surfacepEarth.style.display="none";
    overviewEarth.style.color="white";
    structureEarth.style.color="white";
    surfaceEarth.style.color="white";


  })
  surfacedivEarth.addEventListener("click",()=>{
    structuredivEarth.style.backgroundColor="#4b4b4b";
    structureEarth.style.color="white";
    surfacedivEarth.style.backgroundColor='#6D2ED5';
    surfaceEarth.style.color="white";
    overviewdivEarth.style.backgroundColor="#4b4b4b";
    overviewEarth.style.color="white";
    earthplanetaMobile.style.display="block";
    earthinteralMobile.style.display="none";
    earthGeologyMobile.style.display="block";
    overviewpEarth.style.display="none";
    structurepEarth.style.display="none";
    surfacepEarth.style.display="block";
    overviewEarth.style.color="white";
    structureEarth.style.color="white";
    surfaceEarth.style.color="white";

  })
  // mars
  const mars=document.getElementById("mars");
  const overviewdivMars=document.querySelector(".overview-div-mars");
  const structuredivMars=document.querySelector(".structure-div-mars");
  const surfacedivMars=document.querySelector(".surface-div-mars");

  mars.addEventListener("click",()=>{
    venus.style.color="white";
    mercury.style.color="white";
    earth.style.color="white";
    mars.style.color="#D14C32";
    mercuryInfo.style.display='none';
    realVenus.style.display="none";
    realEarth.style.display="none";
    realMars.style.display="block";
    overviewdivMars.style.backgroundColor="#D14C32";
    structuredivMars.style.backgroundColor="#4b4b4b";
    surfacedivMars.style.backgroundColor='#4b4b4b';
    marsPlanetamobile.style.display="block";
    marsInteralmobile.style.display="none";
    marsGeologymobile.style.display="none";
    overviewPMars.style.display="block";
    structurePMars.style.display="none";
    surfacePMars.style.display="none";
    jupiter.style.color="white";
    realJupiter.style.display="none";
    saturn.style.color="white"
    realSaturn.style.display="none";
    uranus.style.color="white";
    realUranus.style.display="none";
    neptune.style.color="white";
    realNeptune.style.display="none";
  })
  overviewdivMars.addEventListener("click",()=>{
    overviewdivMars.style.backgroundColor="#D14C32";
    structuredivMars.style.backgroundColor="#4b4b4b";
    surfacedivMars.style.backgroundColor='#4b4b4b';
    marsPlanetamobile.style.display="block";
    marsInteralmobile.style.display="none";
    marsGeologymobile.style.display="none";
    overviewPMars.style.display="block";
    structurePMars.style.display="none";
    surfacePMars.style.display="none";
    overviewMars.style.color="white";
    structureMars.style.color="white";
    surfaceMars.style.color="white";

  })
  structuredivMars.addEventListener("click",()=>{
    overviewdivMars.style.backgroundColor="#4b4b4b";
    structuredivMars.style.backgroundColor="#D14C32";
    surfacedivMars.style.backgroundColor='#4b4b4b';
    marsPlanetamobile.style.display="none";
    marsInteralmobile.style.display="block";
    marsGeologymobile.style.display="none";
    overviewPMars.style.display="none";
    structurePMars.style.display="block";
    surfacePMars.style.display="none";
    overviewMars.style.color="white";
    structureMars.style.color="white";
    surfaceMars.style.color="white";
  })
  surfacedivMars.addEventListener("click",()=>{
    overviewdivMars.style.backgroundColor="#4b4b4b";
    structuredivMars.style.backgroundColor="#4b4b4b";
    surfacedivMars.style.backgroundColor='#D14C32';
    marsPlanetamobile.style.display="block";
    marsInteralmobile.style.display="none";
    marsGeologymobile.style.display="block";
    overviewPMars.style.display="none";
    structurePMars.style.display="none";
    surfacePMars.style.display="block";
    overviewMars.style.color="white";
    structureMars.style.color="white";
    surfaceMars.style.color="white";
  })

  // jupiter
  const jupiter=document.getElementById("jupiter");
  const overviewdivJupiter=document.querySelector(".overview-div-jupiter");
  const structuredivJupiter=document.querySelector(".structure-div-jupiter");
  const surfacedivJupiter=document.querySelector(".surface-div-jupiter");



  jupiter.addEventListener("click",()=>{
    jupiter.style.color="#D83A34";
    realJupiter.style.display="block";
    venus.style.color="white";
    mercury.style.color="white";
    earth.style.color="white";
    mars.style.color="white";
    mercuryInfo.style.display='none';
    realVenus.style.display="none";
    realEarth.style.display="none";
    realMars.style.display="none";
    overviewdivJupiter.style.backgroundColor="#D83A34";
    structuredivJupiter.style.backgroundColor="#4b4b4b";
    surfacedivJupiter.style.backgroundColor="#4b4b4b";
    overviewEarth.style.color="white";
    structureJupiter.style.color="white";
    surfaceJupiter.style.color="white";
    jupiterPlanetaMobile.style.display="block";
    jupiterInteralMobile.style.display="none";
    jupiterGeologyMobile.style.display="none";
    overviewPJupiter.style.display="block";
    structurePJupiter.style.display="none";
    surfacePJupiter.style.display="none";
    saturn.style.color="white"
    realSaturn.style.display="none";
    uranus.style.color="white";
    realUranus.style.display="none";
    neptune.style.color="white";
    realNeptune.style.display="none";
  })
  overviewdivJupiter.addEventListener("click",()=>{
    overviewdivJupiter.style.backgroundColor="#D83A34";
    structuredivJupiter.style.backgroundColor="#4b4b4b";
    surfacedivJupiter.style.backgroundColor="#4b4b4b";
    overviewJupiter.style.color="white";
    structureJupiter.style.color="white";
    surfaceJupiter.style.color="white";
    jupiterPlanetaMobile.style.display="block";
    jupiterInteralMobile.style.display="none";
    jupiterGeologyMobile.style.display="none";
    overviewPJupiter.style.display="block";
    structurePJupiter.style.display="none";
    surfacePJupiter.style.display="none";

  })
  structuredivJupiter.addEventListener("click",()=>{
    overviewdivJupiter.style.backgroundColor="#4b4b4b";
    structuredivJupiter.style.backgroundColor="#D83A34";
    surfacedivJupiter.style.backgroundColor="#4b4b4b";
    overviewEarth.style.color="white";
    structureJupiter.style.color="white";
    surfaceJupiter.style.color="white";
    jupiterPlanetaMobile.style.display="none";
    jupiterInteralMobile.style.display="block";
    jupiterGeologyMobile.style.display="none";
    overviewPJupiter.style.display="none";
    structurePJupiter.style.display="block";
    surfacePJupiter.style.display="none";

  })
  surfacedivJupiter.addEventListener("click",()=>{
    overviewdivJupiter.style.backgroundColor="#4b4b4b";
    structuredivJupiter.style.backgroundColor="#4b4b4b";
    surfacedivJupiter.style.backgroundColor="#D83A34";
    overviewEarth.style.color="white";
    structureJupiter.style.color="white";
    surfaceJupiter.style.color="white";
    jupiterPlanetaMobile.style.display="block";
    jupiterInteralMobile.style.display="none";
    jupiterGeologyMobile.style.display="block";
    overviewPJupiter.style.display="none";
    structurePJupiter.style.display="none";
    surfacePJupiter.style.display="block";
  })
  // saturn
  const saturn=document.getElementById("saturn");
  const overviewdivSaturn=document.querySelector(".overview-div-saturn");
  const structuredivSaturn=document.querySelector(".structure-div-saturn");
  const surfacedivSaturn=document.querySelector(".surface-div-saturn");

  saturn.addEventListener("click",()=>{
    saturn.style.color="#CD5120"
    realSaturn.style.display="block";
    jupiter.style.color="white";
    realJupiter.style.display="none";
    venus.style.color="white";
    mercury.style.color="white";
    earth.style.color="white";
    mars.style.color="white";
    mercuryInfo.style.display='none';
    realVenus.style.display="none";
    realEarth.style.display="none";
    realMars.style.display="none";
    overviewdivSaturn.style.backgroundColor="#CD5120";
    structuredivSaturn.style.backgroundColor="#4b4b4b";
    surfacedivSaturn.style.backgroundColor='#4b4b4b';
    overviewSaturn.style.color="white";
    structureSaturn.style.color="white";
    surfaceSaturn.style.color="white";
    saturnPlanetaMobile.style.display="block";
    saturnInteralMobile.style.display="none";
    saturnGeologyMobile.style.display="none";
    overviewPSaturn.style.display="block";
    structurePSaturn.style.display="none";
    surfacePSaturn.style.display="none";
    uranus.style.color="white";
    realUranus.style.display="none";
    neptune.style.color="white";
    realNeptune.style.display="none";

  })
  overviewdivSaturn.addEventListener("click",()=>{
    overviewdivSaturn.style.backgroundColor="#CD5120";
    structuredivSaturn.style.backgroundColor="#4b4b4b";
    surfacedivSaturn.style.backgroundColor='#4b4b4b';
    overviewSaturn.style.color="white";
    structureSaturn.style.color="white";
    surfaceSaturn.style.color="white";
    saturnPlanetaMobile.style.display="block";
    saturnInteralMobile.style.display="none";
    saturnGeologyMobile.style.display="none";
    overviewPSaturn.style.display="block";
    structurePSaturn.style.display="none";
    surfacePSaturn.style.display="none";

  })
  structuredivSaturn.addEventListener("click",()=>{
    overviewdivSaturn.style.backgroundColor="#4b4b4b";
    structuredivSaturn.style.backgroundColor="#CD5120";
    surfacedivSaturn.style.backgroundColor='#4b4b4b';
    overviewSaturn.style.color="white";
    structureSaturn.style.color="white";
    surfaceSaturn.style.color="white";
    saturnPlanetaMobile.style.display="none";
    saturnInteralMobile.style.display="block";
    saturnGeologyMobile.style.display="none";
    overviewPSaturn.style.display="none";
    structurePSaturn.style.display="block";
    surfacePSaturn.style.display="none";

  })
  surfacedivSaturn.addEventListener("click",()=>{
    overviewdivSaturn.style.backgroundColor="#4b4b4b";
    structuredivSaturn.style.backgroundColor="#4b4b4b";
    surfacedivSaturn.style.backgroundColor='#CD5120';
    overviewSaturn.style.color="white";
    structureSaturn.style.color="white";
    surfaceSaturn.style.color="white";
    saturnPlanetaMobile.style.display="block";
    saturnInteralMobile.style.display="none";
    saturnGeologyMobile.style.display="block";
    overviewPSaturn.style.display="none";
    structurePSaturn.style.display="none";
    surfacePSaturn.style.display="block";
  })
  // uranus
  const uranus=document.getElementById("uranus");
  const overviewdivUranus=document.querySelector(".overview-div-uranus");
  const structuredivUranus=document.querySelector(".structure-div-uranus");
  const surfacedivUranus=document.querySelector(".surface-div-uranus");

  uranus.addEventListener("click",()=>{
    uranus.style.color="#1EC1A2";
    realUranus.style.display="block";
    saturn.style.color="white";
    realSaturn.style.display="none";
    jupiter.style.color="white";
    realJupiter.style.display="none";
    venus.style.color="white";
    mercury.style.color="white";
    earth.style.color="white";
    mars.style.color="white";
    mercuryInfo.style.display='none';
    realVenus.style.display="none";
    realEarth.style.display="none";
    realMars.style.display="none";
    overviewdivUranus.style.backgroundColor="#1EC1A2";
    structuredivUranus.style.backgroundColor="#4b4b4b";
    surfacedivUranus.style.backgroundColor="#4b4b4b";
    overviewUranus.style.color="white";
    structureUranus.srtyle.color="white";
    surfaceUranus.style.color="white";
    uranusPlanetaMobile.style.display='block';
    uranusInteralMobile.style.display="none";
    uranusGeologyMobile.style.display="none";
    overviewPUranus.style.display="block";
    structurePUranus.style.display="none";
    surfacePUranus.style.display="none";
    neptune.style.color="white";
    realNeptune.style.display="none";
  })
  overviewdivUranus.addEventListener("click",()=>{
    overviewdivUranus.style.backgroundColor="#1EC1A2";
    structuredivUranus.style.backgroundColor="#4b4b4b";
    surfacedivUranus.style.backgroundColor="#4b4b4b";
    overviewUranus.style.color="white";
    structureUranus.style.color="white";
    surfaceUranus.style.color="white";
    uranusPlanetaMobile.style.display='block';
    uranusInteralMobile.style.display="none";
    uranusGeologyMobile.style.display="none";
    overviewPUranus.style.display="block";
    structurePUranus.style.display="none";
    surfacePUranus.style.display="none";

  })
  structuredivUranus.addEventListener("click",()=>{
    overviewdivUranus.style.backgroundColor="#4b4b4b";
    structuredivUranus.style.backgroundColor="#1EC1A2";
    surfacedivUranus.style.backgroundColor="#4b4b4b";
    overviewUranus.style.color="white";
    structureUranus.style.color="white";
    surfaceUranus.style.color="white";
    uranusPlanetaMobile.style.display='none';
    uranusInteralMobile.style.display="block";
    uranusGeologyMobile.style.display="none";
    overviewPUranus.style.display="none";
    structurePUranus.style.display="block";
    surfacePUranus.style.display="none";

  })
  surfacedivUranus.addEventListener("click",()=>{
    overviewdivUranus.style.backgroundColor="#4b4b4b";
    structuredivUranus.style.backgroundColor="#4b4b4b";
    surfacedivUranus.style.backgroundColor="#1EC1A2";
    overviewUranus.style.color="white";
    structureUranus.style.color="white";
    surfaceUranus.style.color="white";
    uranusPlanetaMobile.style.display='block';
    uranusInteralMobile.style.display="none";
    uranusGeologyMobile.style.display="block";
    overviewPUranus.style.display="none";
    structurePUranus.style.display="none";
    surfacePUranus.style.display="block";
  })
  // neptune
  const neptune=document.getElementById("neptune");
  const overviewdivNeptune=document.querySelector(".overview-div-neptune");
  const structuredivNeptune=document.querySelector(".structure-div-neptune");
  const surfacedivNeptune=document.querySelector(".surface-div-neptune");

  neptune.addEventListener("click",()=>{
    neptune.style.color="#2D68F0"
    realNeptune.style.display="block";
    uranus.style.color="white";
    realUranus.style.display="none";
    saturn.style.color="white";
    realSaturn.style.display="none";
    jupiter.style.color="white";
    realJupiter.style.display="none";
    venus.style.color="white";
    mercury.style.color="white";
    earth.style.color="white";
    mars.style.color="white";
    mercuryInfo.style.display='none';
    realVenus.style.display="none";
    realEarth.style.display="none";
    realMars.style.display="none";
    overviewdivNeptune.style.backgroundColor="#2D68F0";
    structuredivNeptune.style.backgroundColor="#4b4b4b";
    surfacedivNeptune.style.backgroundColor="#4b4b4b";
    neptunePlanetaMobile.style.display="block";
    neptuneInteralMobile.style.display="none";
    neptuneGeologyMobile.style.display="none";
    overviewPNeptune.style.display="block";
    structurePNeptune.style.display="none";
    surfacePNeptune.style.display="none";
    overviewNeptune.style.color="white";
    surfaceNeptune.style.color="white";
    structureNeptune.style.color="white";
  })
  overviewdivNeptune.addEventListener("click",()=>{
    overviewdivNeptune.style.backgroundColor="#2D68F0";
    structuredivNeptune.style.backgroundColor="#4b4b4b";
    surfacedivNeptune.style.backgroundColor="#4b4b4b";
    neptunePlanetaMobile.style.display="block";
    neptuneInteralMobile.style.display="none";
    neptuneGeologyMobile.style.display="none";
    overviewPNeptune.style.display="block";
    structurePNeptune.style.display="none";
    surfacePNeptune.style.display="none";
    overviewNeptune.style.color="white";
    surfaceNeptune.style.color="white";
    structureNeptune.style.color="white";

  })
  structuredivNeptune.addEventListener("click",()=>{
    overviewdivNeptune.style.backgroundColor="#4b4b4b";
    structuredivNeptune.style.backgroundColor="#2D68F0";
    surfacedivNeptune.style.backgroundColor="#4b4b4b";
    neptunePlanetaMobile.style.display="none";
    neptuneInteralMobile.style.display="block";
    neptuneGeologyMobile.style.display="none";
    overviewPNeptune.style.display="none";
    structurePNeptune.style.display="block";
    surfacePNeptune.style.display="none";
    overviewNeptune.style.color="white";
    structureNeptune.style.color="white";
    surfaceNeptune.style.color="white";

  })
  surfacedivNeptune.addEventListener("click",()=>{
    overviewdivNeptune.style.backgroundColor="#4b4b4b";
    structuredivNeptune.style.backgroundColor="#4b4b4b";
    surfacedivNeptune.style.backgroundColor="#2D68F0";
    neptunePlanetaMobile.style.display="block";
    neptuneInteralMobile.style.display="none";
    neptuneGeologyMobile.style.display="block";
    overviewPNeptune.style.display="none";
    structurePNeptune.style.display="none";
    surfacePNeptune.style.display="block";
    overviewNeptune.style.color="white";
    structureNeptune.style.color="white";
    surfaceNeptune.style.color="white";

  })



 
   