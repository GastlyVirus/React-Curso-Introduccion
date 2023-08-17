import React from 'react';
import Swal from 'sweetalert2';

function ToDosError() {
    React.useEffect(() => {
        const showErrorAlert = () => {
            Swal.fire({
                icon: "error",
                title: 'Hubo un error',
                text: 'Espere mientras se resuelve...',
                color: '#03091e',
                confirmButtonColor: "#3085d6",
                confirmButtonText: 'Entendido',
            })
        };

        showErrorAlert();

        return () => {
            Swal.close();
        };
    }, []);
    

    return null;
}

export { ToDosError };