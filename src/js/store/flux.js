const getState = ({

    getStore,
    getActions,
    setStore

}) => {
    return {
        store: {
            listaPersonajes: [],
            listaPlanetas: [],
            listaVehiculos: [],
            detallesPersonajes: {},
            detallesPlanetas: {},
            detallesVehiculos: {},

            listaFavoritos: [],
        },

        actions: {


            // / FETCH CONT. PERSONAJES

            getInfoContentPersonajes: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/people/") //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        listaPersonajes: data.results
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },

            // FETCH CONT. PLANETAS

            getInfoContentPlanetas: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/planets/") //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        listaPlanetas: data.results
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },

            // FETCH CONT. VEHICULOS

            getInfoContentVehiculos: async () => {
                try {
                    const response = await fetch("https://swapi.dev/api/vehicles/") //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        listaVehiculos: data.results
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },

            // FETCH DETAILS PERSONAJES

            getInfoDetailsPersonajes: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/people/" + id) //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        detallesPersonajes: data
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },

            // FETCH DETAILS PLANETAS

            getInfoDetailsPlanetas: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/planets/" + id) //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        detallesPlanetas: data
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },

            // FETCH DETAILS VEHICULOS

            getInfoDetailsVehiculos: async (id) => {
                try {
                    const response = await fetch("https://swapi.dev/api/vehicles/" + id) //ir a buscar
                    const data = await response.json();
                    console.log(data)
                    console.log(data.results)
                    setStore({
                        detallesVehiculos: data
                    }); //promesa 2
                } catch (err) {
                    console.log(err);
                }
            },



            // FETCH DETAILS VEHICULOS

            setListaFavoritos: (itemfavoritos) => {

                let store = getStore()
                if (store.listaFavoritos.includes(itemfavoritos)) {
                    getActions().eliminarFavoritos(itemfavoritos)


                } else {
                    setStore({
                        listaFavoritos: [...store.listaFavoritos, itemfavoritos]
                    })
                }

            },

            eliminarFavoritos: (itemfavoritos) => {
                let store = getStore()
                setStore({
                    listaFavoritos: store.listaFavoritos.filter((item) => item !== itemfavoritos)
                })
            }
        }
    };
};

export default getState;