import axios from "axios";

const Test_BASE_REST_API_URL = 'http://localhost:8080/tests';



class TestService{

    getAllTest(){
        return axios.get(Test_BASE_REST_API_URL)
    }
   
    createTest(test){
        return axios.post(Test_BASE_REST_API_URL, test);
    }

    getTestById(testId)
    {
        return  axios.get(Test_BASE_REST_API_URL + '/' +testId);
    }

    updateTest(testId,test)
    {
        return  axios.put(Test_BASE_REST_API_URL + '/' +testId,test);
    }

    deleteTest(testId)
    {
        return  axios.delete(Test_BASE_REST_API_URL + '/' +testId);
    }
}

export default new TestService();