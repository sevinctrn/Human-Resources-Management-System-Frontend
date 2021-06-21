
import axios from 'axios';

export default class resumeService {

    getResumes(){
     return axios.get("http://localhost:8080/api/resumes/getall");
    }
}
