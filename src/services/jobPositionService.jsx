import React from 'react'
import axios from 'axios'

export default class jobPositionService {

    getJobPositions(){
        return axios.get("http://localhost:8080/api/jobs/getall")
        }
    
}
