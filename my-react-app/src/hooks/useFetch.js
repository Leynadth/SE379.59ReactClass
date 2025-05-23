const useFetch = (url) => {
    const [posts, setPosts] = useState([]);
   
     useEffect(() => {
       const getData = async () => {
         try {
           const response = await axios.get('http://localhost:3000/posts');
           setPosts(response.data);
         } catch (error) {
           console.log('An error occurred:', error);
         }
       };
   
       getData();
     }, []);
   }