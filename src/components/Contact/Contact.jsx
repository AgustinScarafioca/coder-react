import { getFirestore, collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import Swal from 'sweetalert2';



const Contact = () => {
    
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [consulta, setConsulta] = useState()

    const question = {
        phone,
        email,
        consulta
    }
    const contactSubmit  = () =>{
            const db = getFirestore();
            const orderCollection = collection(db, 'consultas');
            addDoc(orderCollection, question)
            .then(() =>{
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Su consulta ha sido enviada, muchas gracias',
                    showConfirmButton: false,
                    timer: 3000
                }
                )
            })
            }


    return (
        <>
            <main className="container-fluid">
                <div className="p-5 m-0">
                    <div className="col text-center lead">
                        <h2 className="p-3 m-1">¡Contactese con nosotros!</h2>
                    </div>
                    {/* Form */}
                    <div className="col text-center">
                    <form className="m-5" action>
                        <div className="p-3">
                            <label className="col-12 col-md-4 form-group m-md-3 text-center" htmlFor="phone">Ingrese su numero de telefono:</label>
                            <input className="col-12 col-md-4" type="number" name="phone" id placeholder="Telefono" required onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div>
                            <label className="col-12 col-md-4 form-group m-md-3 text-center" htmlFor="email">Ingrese su Email:</label>
                            <input className="col-12 col-md-4" type="email" name="email" id placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className>
                            <label className="col-12 col-md-6 p-3 m-1 form-group text-center" htmlFor="extra">Consulta:</label>
                            <textarea className="col-12 col-md-6 m-md-3" name="extra" id cols={25} rows={8} placeholder="Ingrese aqui su consulta" onChange={(e) => setConsulta(e.target.value)}/>
                        </div>
                        <div>
                            <button type="button" className="btn btn-success m-2" onClick={contactSubmit}>Enviar</button>
                        </div>
                    </form>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Contact;
