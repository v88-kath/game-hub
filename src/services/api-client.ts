import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f1f94c7d2f1448de96c4cdb70151ae8c'
    }
})