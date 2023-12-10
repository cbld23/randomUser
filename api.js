const fetchRandomUser = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];
        return user;
    } catch (error) {
        console.error('Error fetching random user:', error);
        throw error;
    }
};
const fetchCurrentTime = async (location) => {
    try {
        const [city] = location.split(',');

        const response = await fetch(`https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${city.trim()}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com',
                'X-RapidAPI-Key': '76653f255amsh78eeca4ec1679e7p13f53ejsnf04b02fbfad9', 
            },
        });
        const data = await response.json();
        //console.log('API Response:', data);

        const datetime = data && data.datetime;

        // Extrae solo la hora, minutos y segundos de la cadena 
        const [hour, minute, second] = datetime.split(' ')[1].split(':');

        // Construye un nuevo objeto con la información de la hora
        const currentTime = {
            hour,
            minute,
            second,
        };

        return currentTime;
    } catch (error) {
        console.error('Error fetching current time:', error);
        throw error;
    }
};


