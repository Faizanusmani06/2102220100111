

const Home = async() => {
  const response = await fetch(`https://localhost:7000/api/getProducts`);
    if(!response.ok) {
        throw new Error("Error fetching stations")
    }
  
    console.log(response)
  return (
    <div>
        
    </div>
  )
};

export default Home;
