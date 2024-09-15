export async function fetchData(url) {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Error fetching data')
        }
        return response.json();
    }catch (error){
        console.log(error);
        throw error;
    }
}