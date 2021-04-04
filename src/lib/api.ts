import axios from "axios"


const instance = axios.create({
      baseURL: 'https://api.edamam.com',
      paramsSerializer(params) {
            const searchParams = new URLSearchParams();
            for (const key of Object.keys(params)) {
              const param = params[key];
              if (Array.isArray(param)) {
                for (const p of param) {
                  searchParams.append(key, p);
                }
              } else {
                searchParams.append(key, param);
              }
            }
            return searchParams.toString();
      }
}); 

instance.defaults.timeout = 2000;

instance.interceptors.request.use(config => {

      config.params = {
            app_id: process.env.NEXT_PUBLIC_EDAMAM_APP_ID,
            app_key: process.env.NEXT_PUBLIC_EDAMAM_API_KEY,
            ...config.params,
      }

      return config;
})
    
export default instance; 