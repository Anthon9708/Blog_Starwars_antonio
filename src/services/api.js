
export const getData = async ( type ) => {

    try {
        const response = await fetch(`https://swapi.dev/api/${type}/`);
        if(!response.ok) throw new Error('error in obtaining ' + type);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }

}

export const getDataId = async ( type , id ) => {

    try {
        const response = await fetch(`https://swapi.dev/api/${type}/${id}`);
        if(!response.ok) throw new Error('Error in obtaining ' + type + id)
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error(error);
    }

}

export const getIdURL = ( item ) => {
    return item.split("/").filter(Boolean).pop();
}