export const getStaticpaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();


    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString() }
        }
    })
    
    return {
        paths,
        fallback: false
    };
}


const Details = ({ninja}) => {
    return ( 
        <div>
            <h1>Details Page</h1>
        </div>
     );
}
 
export default Details;