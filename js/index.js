(
  ()=>{

    //Global variables.
  var isOpen=0;   //tracks the ifram window
  var gumroadButton; //gumroadButton
  var frameParent;
  var Body;         // parent div of the all the frame and div

  //filter the gumroad links.
  var anchors = document.querySelectorAll('a[href]');
  anchors.forEach(function(a) {
     var url = a.href;
     if(url.includes("https://gumroad.com/l/")
     || url.includes("https://gumroad.com")
     || url.includes("https://gum.co")){       
       createGumroadButton(a);
     a.addEventListener('click', (e)=>{
       e.preventDefault();
        prepareFrame(url);
        document.addEventListener("click",handler,true);      
     })
      
     }
 });

 function prepareFrame(url) {
  frameParent = document.createElement('div');
  styleFrame(url);

  Body.addEventListener("click", ()=>{
    isOpen++;
    if(frameParent.parentNode !=null && isOpen>=1){
      isOpen=0;
      document.removeEventListener('click', handler)
      Body.parentNode.removeChild(Body);
      document.body.style.background="rgba(127, 127, 127, 0)";

    }
  }, true)
  document.body.style.background="rgba(127, 127, 127, 0.7)";
}

function styleFrame(url){
  Body = document.createElement('div');
  Body.style.width = "100vw";
  Body.style.height = "100vh";
  Body.style.zIndex="5";
  Body.style.position="absolute";
  Body.style.top = "0";
  Body.style.bottom = "0";
  Body.style.left = "0";
  Body.style.right = "0";
  Body.style.margin = "auto"
  Body.style.cursor = "pointer";
  frameParent.style.overflow = 'hidden';
  frameParent.style.width="70%"
  frameParent.style.height="80%";
  frameParent.style.position = "absolute";
  frameParent.style.top = "0";
  frameParent.style.bottom = "0";
  frameParent.style.left = "0";
  frameParent.style.right = "0";
  frameParent.style.margin = "auto"
  frameParent.style.borderRadius="10px";

  var ifrm = document.createElement("iframe");
  ifrm.setAttribute("src", url);
  ifrm.setAttribute("allowfullscreen", "true");
  ifrm.style.display="flex";
  ifrm.style.alignItems="center";
  ifrm.style.justifyContent="center";
  ifrm.style.width = "102%";
  ifrm.style.height="100%";
  ifrm.style.marginTop="20px";
  ifrm.style.borderRadius = "10px";
  ifrm.style.borderTopRightRadius="25px";
  ifrm.style.height = "100%";
  ifrm.style.borderStyle="none";
  ifrm.style.overflow = "hidden";
  frameParent.appendChild(ifrm);
  Body.appendChild(frameParent);
  document.body.appendChild(Body);
}

function  createGumroadButton(a){
  a.style['text-decoration']="none";
  a.style['font-size']='16px';
  a.style['margin-left'] = '7px';
  a.style['color']="#999";
  var iconTag = document.createElement('img');
  iconTag.setAttribute("src", "https://pbs.twimg.com/profile_images/1091453452171919360/MOhXon35.jpg");
  iconTag.style.width = "35px";
  iconTag.style.height = "35px";
  iconTag.style.marginTop="8px";

  //parent div
  gumroadButton = document.createElement("div");
  gumroadButton.appendChild(iconTag);
  gumroadButton.appendChild(a);

  //style the div tag.
  gumroadButton.style.display="inline-flex";
  gumroadButton.style.margin="15px";
  gumroadButton.style.fontWeight="500"
  gumroadButton.style.lineHeight="50px"
  gumroadButton.style.padding="0 15px";
  gumroadButton.style.borderTopStyle="solid"
  gumroadButton.style.borderTopWidth="5px";
  gumroadButton.style.borderTopColor="red"; 
  gumroadButton.style.boxShadow="rgb(0 0 0 / 40%) 0 0 2px";
  gumroadButton.style.alignItems="flex-start";
  gumroadButton.style.borderRadius="4px";

  document.body.appendChild(gumroadButton);
}

function handler(e){
  //e.stopPropagation();
  e.preventDefault();
}

})()
