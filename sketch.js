var meta_size, meta_x, meta_y

function setup() {
  createCanvas(windowWidth, windowHeight);
  //angleMode(DEGREES)//加上此指令後，弧度由0~360度指定，否則為)0~2*PI
  //meta_x = width/2
  //meta_y = height/2
  meta_x = random(0,width)
  meta_y = random(0,height)
  meta_x2 = random(0,width)
  meta_y2 = random(0,height)
}


function draw() {
  background("#F8DAE2");
  // textSize(50)
  // text("X:"+mouseX+"  Y:"+mouseY,50,50)

 push()
 translate(width/2,height/2)

 if(mouseIsPressed)
    {
      textSize(40)
    fill("#ffebff")
    text("~METAMETAMON~",-133,140)
    fill("#bb9eb9")
    text("~METAMETAMON~",-130,140)
    }

  else
  {
   fill("#bb9eb9")
   textSize(40)
   text("~METAMETAMON~",-130,140)
  }
  pop()

  push()
  translate(meta_x,meta_y)//使原點座標移動(0,0)
  
  noStroke()//map即是將此物體定為圓心，並在此範圍內移動(0~-10)
  fill("#dbb1cd")
  ellipse(+30+map(mouseX,0,width,-10,10),-15+map(mouseY,0,height,-10,10),200)//身體
  ellipse(-50+map(mouseX,0,width,-10,10),-80+map(mouseY,0,height,-10,10),55,70)//左手
  ellipse(-50+map(mouseX,0,width,-10,20),-80+map(mouseY,0,height,-10,10),55,70)//左手(外伸)
  ellipse(+5+map(mouseX,0,width,-10,10),-100+map(mouseY,0,height,-10,10),70)//左邊的頭
  ellipse(+60+map(mouseX,0,width,-10,10),-100+map(mouseY,0,height,-10,10),50)//右邊的頭
  ellipse(+100+map(mouseX,0,width,-10,10),-80+map(mouseY,0,height,-10,10),60,80)//右手
  ellipse(+100+map(mouseX,0,width,-20,20),-80+map(mouseY,0,height,-10,10),60,80)//右手(外伸)
  ellipse(+90+map(mouseX,0,width,-20,20),+50+map(mouseY,0,height,-10,10),90,70)
  ellipse(-50+map(mouseX,0,width,-10,10),+50+map(mouseY,0,height,-10,10),70)
  ellipse(-50+map(mouseX,0,width,-10,20),+50+map(mouseY,0,height,-10,10),70)
  ellipse(+90+map(mouseX,0,width,-10,10),+50+map(mouseY,0,height,-10,10),90,70)
  rect(-50+map(mouseX,0,width,-10,10),55+map(mouseY,0,height,-10,10),135,30)
  rect(75+map(mouseX,0,width,-10,10),-75+map(mouseY,0,height,-10,10),55,135)
  rect(-75+map(mouseX,0,width,-10,10),-75+map(mouseY,0,height,-10,10),55,135)
  rect(-50+map(mouseX,0,width,-10,10),-108+map(mouseY,0,height,-10,10),100,30)
  
 

  fill("#4D3900")
  ellipse(+5+map(mouseX,0,width,-10,10),-90+map(mouseY,0,height,-10,10),5)
  ellipse(+60+map(mouseX,0,width,-10,10),-90+map(mouseY,0,height,-10,10),5)

  fill("#a52a2a")
  arc(30+map(mouseX,0,width,-10,10),-80+map(mouseY,0,height,-10,10),120,-5,0,PI)
   
  if(mouseIsPressed)
   {

    fill("#a52a2a")
    arc(30+map(mouseX,0,width,-10,10),-80+map(mouseY,0,height,-10,10),120,10,0,PI)

   }
 
  pop()

  push()
  translate(meta_x2,meta_y2)//使原點座標移動(0,0)
  
  noStroke()//map即是將此物體定為圓心，並在此範圍內移動(0~-10)
  fill("#b7cae0")
  ellipse(+30+map(mouseX,0,width,-10,10),-15+map(mouseY,0,height,-10,10),100)//身體
  ellipse(-27+map(mouseX,0,width,-10,10),-50+map(mouseY,0,height,-10,10),45,60)//左手
  ellipse(-27+map(mouseX,0,width,-10,20),-50+map(mouseY,0,height,-10,10),45,60)//左手(外伸)
  ellipse(+10+map(mouseX,0,width,-10,10),-60+map(mouseY,0,height,-10,10),60)//左邊的頭
  ellipse(+60+map(mouseX,0,width,-10,10),-60+map(mouseY,0,height,-10,10),45)//右邊的頭
  ellipse(+100+map(mouseX,0,width,-10,10),-50+map(mouseY,0,height,-10,10),40,60)//右手
  ellipse(+100+map(mouseX,0,width,-20,20),-50+map(mouseY,0,height,-10,10),40,60)//右手(外伸)
  ellipse(+85+map(mouseX,0,width,-20,20),+30+map(mouseY,0,height,-10,10),75,60)//右邊的腳
  ellipse(+85+map(mouseX,0,width,-10,10),+30+map(mouseY,0,height,-10,10),75,60)//右邊的腳(外伸)
  ellipse(-30+map(mouseX,0,width,-10,10),+30+map(mouseY,0,height,-10,10),60)//左邊的腳
  ellipse(-30+map(mouseX,0,width,-10,20),+30+map(mouseY,0,height,-10,10),60)//左邊的腳(外伸)
  rect(-30+map(mouseX,0,width,-10,10),25+map(mouseY,0,height,-10,10),100,35)
  rect(65+map(mouseX,0,width,-10,10),-75+map(mouseY,0,height,-10,10),45,125)
  rect(-40+map(mouseX,0,width,-10,10),-75+map(mouseY,0,height,-10,10),55,135)
  rect(-30+map(mouseX,0,width,-10,10),-78+map(mouseY,0,height,-10,10),100,30)
  
 

  fill("#4D3900")
  ellipse(+10+map(mouseX,0,width,-10,10),-55+map(mouseY,0,height,-10,10),5)
  ellipse(+60+map(mouseX,0,width,-10,10),-55+map(mouseY,0,height,-10,10),5)

  fill("#a52a2a")
  arc(35+map(mouseX,0,width,-10,10),-47+map(mouseY,0,height,-10,10),100,-5,0,PI)
   
  if(mouseIsPressed)
  {

     fill("#a52a2a")
     arc(35+map(mouseX,0,width,-10,10),-47+map(mouseY,0,height,-10,10),100,10,0,PI)

  }
 
  pop()
}





