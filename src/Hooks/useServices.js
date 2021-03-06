import React, { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mighty-basin-01559.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return services;
};

export default useServices;