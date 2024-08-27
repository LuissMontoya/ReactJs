// export function App(){
//     return (<h1>Hola Mundo!!</h1>);
// }

const newMessage = {
  message:"Hola Mundo",
  title:"Luis"
};

const getResult = (a,b) => {
  return a+b;
}


export const FirstApp = () => {
  return (
    <>
    <h1>Luis Montoya</h1>
    {/*<h1>{ getResult(4,5) }</h1>*/}
       {/*<code>{ JSON.stringify(newMessage) }</code>*/}
       <p>Este es un párrafo</p>
    </>
   
  )
}
