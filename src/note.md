/ useEffect(()=>{

// })

function App() {
const [text ,setText] =useState('')

// // in run every change in ui
//   useEffect(()=>{
//     console.log("Call UseEFFEct1")
//   })
// //it not run change in ui it call one at reander only
// useEffect(()=>{
//   console.log("Call UseEFFEct2")
// },[])
//--applicatio--

useEffect(()=>{
  //then call this--the application of this ex is add event listener 
  console.log("listener add")
  return ()=>{
    //first it call --the application of this ex is remove event listener 
      console.log("listener end")
  }
})

  function changeHandle(event){
    console.log(text)
    setText(event.target.value) 
  }
  // console.log("it called")
  return (
    <div className='App'>
      <input typeof='text' onChange={changeHandle}></input>
    </div>
  
  );
}