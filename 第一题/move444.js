
var brOK444=false;
var mie444=false;
var aver444=parseInt(navigator.appVersion.substring(0,1));
var aname444=navigator.appName;

function checkbrOK444()
{if(aname444.indexOf("Internet Explorer")!=-1)
{if(aver444>=4) brOK444=navigator.javaEnabled();
mie444=true;
}

if(aname444.indexOf("Netscape")!=-1)
{if(aver444>=4) brOK444=navigator.javaEnabled();}
}



var vmin=2;
var vmax=5;
var vr=2;
var timer444;

function Chip444(chipname,width,height)
{this.named=chipname;
this.vx=vmin+vmax*Math.random();
this.vy=vmin+vmax*Math.random();
this.w=width;
this.h=height;
this.xx=160;
this.yy=0;
this.timer444=null;
}



function movechip444(chipname)
{
if(brOK444)
{eval("chip="+chipname);
if(!mie444)
{pageX=window.pageXOffset;
pageW=window.innerWidth;
pageY=window.pageYOffset;
pageH=window.innerHeight;
}
else
{pageX=window.document.body.scrollLeft;
pageW=window.document.body.offsetWidth-8;
pageY=window.document.body.scrollTop;
pageH=window.document.body.offsetHeight;
}

chip.xx=chip.xx+chip.vx;
chip.yy=chip.yy+chip.vy;
chip.vx+=vr*(Math.random()-0.5);
chip.vy+=vr*(Math.random()-0.5);

if(chip.vx>(vmax+vmin))  chip.vx=(vmax+vmin)*2-chip.vx;
if(chip.vx<(-vmax-vmin)) chip.vx=(-vmax-vmin)*2-chip.vx;
if(chip.vy>(vmax+vmin))  chip.vy=(vmax+vmin)*2-chip.vy;
if(chip.vy<(-vmax-vmin)) chip.vy=(-vmax-vmin)*2-chip.vy;

if(chip.xx<=pageX)
{chip.xx=pageX;
chip.vx=vmin+vmax*Math.random();
}

if(chip.xx>=pageX+pageW-chip.w)
{chip.xx=pageX+pageW-chip.w;
chip.vx=-vmin-vmax*Math.random();
}

if(chip.yy<=pageY)
{chip.yy=pageY;
chip.vy=vmin+vmax*Math.random();
}

if(chip.yy>=pageY+pageH-chip.h)
{chip.yy=pageY+pageH-chip.h;
chip.vy=-vmin-vmax*Math.random();
}

if(!mie444)
{eval('document.'+chip.named+'.top ='+chip.yy);
eval('document.'+chip.named+'.left='+chip.xx);
}
else
{eval('document.all.'+chip.named+'.style.pixelLeft='+chip.xx);
eval('document.all.'+chip.named+'.style.pixelTop ='+chip.yy);
}

chip.timer444=setTimeout("movechip444('"+chip.named+"')",100);
}

}


var movelogo444;
var chip;
checkbrOK444();
movelogo444=new Chip444("movelogo444",100,100);
if(brOK444)
{ 
	movechip444("movelogo444");
}

