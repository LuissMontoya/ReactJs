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

import PropTypes from 'prop-types';

export const FirstApp = ({ 
  title, 
  subTitle
}) => {
  return (
    <>
    <h1>{ title }</h1>
    {/*<h1>{ getResult(4,5) }</h1>*/}
       {/*<code>{ JSON.stringify(newMessage) }</code>*/}
       <p>{ subTitle }</p>
    </>
   
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  title: 'Sin titulo'
}