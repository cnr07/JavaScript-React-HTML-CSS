import logo from './logo.svg';
import './App.css';
import React ,{useState}from 'react'

function x(){
  return(
    <header className="round3">
    <h5 style={{marginTop:'-5px',fontWeight:'normal'}}>New Title</h5>
    <h5 style={{marginTop:'-9px',fontWeight:'normal',borderBlock:'solid',marginRight:'-65px',borderBlockColor:'white'}}></h5>
    </header>
  )
  
}


function App() {


var im = new Image();

function getW() {
  while(loading){

  }
  console.warn(im.width);
  return(im.width);
}
const [okok, setOk]=useState(0)
const [data,setData]=useState(null)
const [data2,setData2]=useState(null)
const [print,setPrint]=useState(false)
const [image,setImage]=useState('')
const [loading,setLoading]=useState(false)
const uploadImage=async e => {
  setPrint(false)
  
  const files = e.target.files
  const dataimg= new FormData()
  dataimg.append('file',files[0])
  dataimg.append('upload_preset','cnr0734')
  setLoading(true)
  const res=await fetch('https://api.cloudinary.com/v1_1/dgzx5qlvs/image/upload',{
    method:'POST',
    body: dataimg
  })
  const file = await res.json()
  
  

  setImage(file.secure_url)
  setLoading(false)
  
  if(!loading){
    //file.maxWidth='sm';
    //file.maxHeight='sm';
    //im.style={maxWidth:'280px',maxHeight:'210px',width:'auto',height:file.height}
    im.width=file.width;
    im.height=file.height;
    //im.src={image}; 
    //file.style={maxWidth:'280px',maxHeight:'210px',width:'auto',height:'auto'}
    var xx=im.width; var yy=im.height; var oran=xx/yy; var xxfark=xx-280; var yyfark=yy-210;
    if(xx<280 & yy>210){
      yy=210; //x-- oran arttı
      var neworan=xx/yy; 
      while(true){if(neworan<=oran){break;}xx--;neworan=xx/yy;}
    }
    else if(xx>280 & yy<210){
      xx=280; //y-- oran azaldı
      var neworan=xx/yy;
      while(true){if(neworan>=oran){break;}yy--;neworan=xx/yy;}
    }
    else if(xx>280 & yy>210){
      if(xxfark>yyfark){
        xx=280; //y-- oran azaldı
        var neworan=xx/yy;
        while(true){if(neworan>=oran){break;}yy--;neworan=xx/yy;}
      }
      else if(yyfark > xxfark){
        yy=210; //x-- oran arttı
        var neworan=xx/yy;
        while(true){if(neworan<=oran){break;}xx--;neworan=xx/yy;}
      }
    }
    var ff=(280-xx)/2;
    console.warn(ff);setOk(ff);
  }

}

  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    if (print) {
      setPrint(false)
      setImage('')
      setLoading(false)  
    }
  }
  function getData2(val) {
    console.warn(val.target.value)
    setData2(val.target.value)
    if (print) {
      setPrint(false)
      setImage('')
      setLoading(false)  
    }
    
  }
  
  
  return (
    
    <div >
     <header style={{paddingRight:'100px'}} className="round2">
        {x()}
        <form>
          <input type="text" spellcheck="false" className="inp" defaultValue="New Title" onChange={getData} />
          <textarea type="text" spellcheck="false" className="inp2" defaultValue="New description" onChange={getData2}></textarea><br></br>
          <input type="file" name="file" id="file" className="inputfile" placeholder="UploadImage" onChange={uploadImage}></input>
          <label for="file" id="cfile" className="btnplaylist" ></label>
          <button type="reset" style={{backgroundColor:'lightgray',marginLeft:'63px',backgroundSize:'cover',display:'block',width:'27px',height:'30px',border:'none'}} onClick={()=>setPrint(true) } ></button>
        </form>
        
        <head1>
        {(loading & !print )?(
          <h3 style={{position:'absolute',marginLeft:'-50px',top:'274px'}}>Loading Image..</h3>
          
          
        ):null}
        </head1>
        
        <head1>
          {
            (!loading & !print & image!='')?(
              <label for="file" id="cfile" className="btnplaylist3" style={{position:'absolute',top:'269px'}} ></label>
            ):null
          }
        </head1>

        <head1>
          {
            (!loading & !print & image=='')?(
              <label for="file" id="cfile" className="btnplaylist" style={{position:'absolute',top:'269px'}} ></label>
            ):null
          }
        </head1>

        <head1 >
        {(!loading & !print & image!='')?(
          <img id="cncn" src={image}  style = {{display:'block',top:'274px',position:'absolute',textAlign:'center',verticalAlign:'middle',maxWidth:'280px',maxHeight:'210px',height:'auto',width:'auto',marginLeft:okok-190+'px'}}/>
          
        ):null}
        </head1>

        <head1>
          {
            (!loading & !print & image!='')?(
              <label for="file" id="cfile" className="btnplaylist2" style={{position:'absolute',top:'269px'}} ></label>
            ):null
          }
        </head1>

     </header>
     <hr/>
     <header style={{paddingRight:'100px'}} className="round2" >
        {x()}
        {
          print?
          <p2 className="inp">{data}</p2>
          :null
        }
        <br></br>
        {
          print?
          <p1 className="inp2">{data2}</p1>
          :null
        }
        
        <head1>
        {(loading & print )?(
          <h3>Loading Image..</h3>
          
          
        ):null}
        </head1>
        
        <head1>
        {(!loading & print )?(
          <img src={image} style = {{position:'absolute',top:'820px',maxWidth:'280px',maxHeight:'210px',height:'auto',width:'auto',marginLeft:okok-190+'px'}}/>
          
        ):null}
        </head1>

        
        
      </header>

    
    
    </div>
  );
}

export default App;