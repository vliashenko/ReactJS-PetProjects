
class imageService {
    constructor() {
        this._apiBase ="https://api.pexels.com/v1/";
        this._apiKey = "563492ad6f91700001000001907d694d21b54d5a953346fee2c426d1"
        this._query = 'architecture';
        this._offset = 10;
    }
    
    fetchImages = async (baseURL) => {
        const res = await fetch(baseURL, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: this._apiKey
            }
        });

        if(!res.ok) {
            throw new Error(`Could not fetch ${baseURL}, status: ${res.status}`)
        }

        const data = await res.json()

        return data.photos
    }

    getImages = async(offset = this._offset) => {

        const baseURL = `${this._apiBase}search?query=${this._query}&per_page=${offset}`
        
        const data = this.fetchImages(baseURL)

        return data
    }

}

export default imageService;