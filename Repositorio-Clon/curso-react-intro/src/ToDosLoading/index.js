import React from 'react';
import Swal from 'sweetalert2';

function ToDosLoading() {
    React.useEffect(() => {
        const showLoadingAlert = () => {
            Swal.fire({
                title: 'Cargando...',
                color: '#03091e',
            })
            Swal.showLoading();
        };

        showLoadingAlert();

        return () => {
            Swal.close();
        };
    }, []);

    return null;
}

export { ToDosLoading };