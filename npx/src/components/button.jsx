function Button({ bgColor , title  , onClick}) {
   return (
     <button 
     onClick={onClick}
     
     style={
      { backgroundColor:  bgColor }}>
         {title}</button>
   );
 }
 
 export default Button;