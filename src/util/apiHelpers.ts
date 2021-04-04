export const fetchGetJSON = async (url: string) =>{ 
      try {
            const data = await fetch(url, {
                  method: 'GET',
                  headers: {
                      'Content-Type': 'application/json'
                  }
            }).then((res) => res.json());
            return data;
      } catch (err) {
            throw new Error(err.message);
      }
}


export async function fetchPostJSON(url: string, data?: {}) {
      try {
        
        const response = await fetch(url, {
          method: 'POST', 
          mode: 'cors',
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json',
         
          },
          redirect: 'follow', 
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data || {}), 
        });
        return await response.json();
      } catch (err) {
        throw new Error(err.message);
      }
}