import axios from "axios";

const URL = "http://localhost:5000/api/";
class IdeasServices {
    //GET methods
    static async getIdeas() {
            const response = await axios.get(URL);
            return response.data;
        }
        //POST methods
    static async insertIdea(idea) {
            const response = await axios.post(URL, { idea });
            return response.data;
        }
        //PUT method
    static async updateVoteIdea({ id, vote }) {
            const response = await axios.put(`${URL}${id}`, { vote });
            return response.data;
        }
        //DELETE method
    static async deleteIdea(id) {
        return axios.delete(`${URL}${id}`);
    }
}

export default IdeasServices;