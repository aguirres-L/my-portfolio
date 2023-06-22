import git from "../iconos/git.png";
import link from "../iconos/link.png";
import React from "react";
import { useForm } from "../Components/Hooks/useForm";

import Loader from "../Components/Loader/ball-triangle.svg"
import Message from "../SubComponents/Mensaje"

import "./Contact.css"

const initialForm ={  // Aplico los valores iniciales de los input, de esta form idnico que son string basios
name:" ",
email:" ",
subject:" ",
comments:" "
} 
const validateForm =(form)=>{
    
    

    let errors={} // creo esta variabel para poder almacenar o manejrar con los erros que me devuelven validateForm en el  modulo "useForm"
    
    // creo variable para poder almacenar los valores de expreciones regulares 
    
    let  regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let  regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,20}$/;
    
    
    if(!form.name.trim()){
        errors.name = "El campo Nombre es requerido"
    }else if(!regexName.test(form.name.trim())){                // El metodo "test()" analiza lo que se va a testear con lo que tenemos en expre
        errors.name= "El campo 'Nombre' solo recibe letras y espacios en blanco "   // en este caso si el user pasa number lanza el error
    }
    
    if(!form.email.trim()){
        errors.email = "El campo 'Correo' es requerido"
    }else if(!regexEmail.test(form.email.trim())){              
        errors.email= "El campo 'Email' no es valido "   
    }
    
    
    if(!form.subject.trim()){ // Comoo el input de subject no hace falta validarlo ya que no tiene mucha importancia 
        errors.subject = "El campo Asuntos es requerido"
    }
    
    if(!form.comments.trim()){
        errors.comments = "El campo no puede estar vacio"
    }else if(!regexComments.test(form.comments.trim())){
         errors.comments = "El campo recibe un limite de 20 palabras "
    }
    
    return errors;
 }
 
 
 
 let styles = {
    color:"#dc3545",
    fontWeight:"bold"
 }
 

export default function FormDom(){

const { // destrucuto los valores de state y las functions 
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSumbit
        }= useForm(initialForm,validateForm)

return(
<div>
    <form onSubmit={handleSumbit} >
    <input  type="text" name="name"
            placeholder="Escribe tu nombre" 
            onChange={handleChange}
            onBlur={handleBlur} // el obBlur sirve para cuando se pierde el foco del input. Esto quiere decir que handleBlur ejecuta las validaciones de los input justo cuando pierden su foco
            value={form.name} 
            required
            />
    {errors.name && <p style={styles}>{errors.name}</p>}  {/** Cargo el mensaje de error que se generea en validateForm() */}
    
    <input type="email" 
           name="email" 
           placeholder="Escribe tu correo"
           onChange={handleChange}
           onBlur={handleBlur}
           value={form.email} // fomr. "name"
           required
           />
    {errors.email &&  <p style={styles}>{errors.email}</p>}
      
           
     <input type="text" 
           name="subject" 
           placeholder="Asunto a tratar"
           onChange={handleChange}
           onBlur={handleBlur}
           value={form.subject}
           required
           />
    {errors.subject &&  <p style={styles}>{errors.subject}</p>}
     
     <textarea name="comments" 
               cols="50"
               rows="5"
               placeholder="Escribe tu comentarios" 
               onChange={handleChange}
               onBlur={handleBlur}
               value={form.comments}
               required
               ></textarea>
    {errors.comments &&  <p style={styles}>{errors.comments}</p>}
    
    
    
    <input type="submit" />
    
    </form>
    

    {loading &&  <div style={{marginLeft:"50%"}}><img src={Loader} alt="" /></div> }
    
    {response && <Message msj="Mensaje Enviado" color="green"/>}
    
      <div className="enlaces">
        <a href="https://github.com/aguirres-L">
          <img className="git" src={git} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/agust%C3%ADn-aguirres-63b39a129/">
          <img className="link" src={link} alt="" />
        </a>
      </div>
    </div>
  );
}
