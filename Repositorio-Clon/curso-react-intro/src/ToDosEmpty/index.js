import React from 'react';
import Swal from 'sweetalert2';

function ToDosEmpty() {
    React.useEffect(() => {
        const showEmptyAlert = () => {
            Swal.fire({
                icon: "info",
                title: 'Lista vacia',
                text: 'Escribe tu primer tarea',
                color: '#03091e',
                iconColor:"#3085d6", 
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'Entendido', 
                allowOutsideClick: false 
            })
        };

        showEmptyAlert();

        return () => {
            Swal.close();
        };
    }, []);
    

    return null;
}

export { ToDosEmpty };