import './App.css';
import Navbar from "./components/navbar/Navbar.jsx";
import HomeController from "./controller/Home.Controller.jsx";

function App() {
    // const [count, setCount] = useState(0);
    // const [allProducts, setAllProducts] = useState([]);
    // const [resp, setResp] = useState([]);
    // const onEdit = ()=>{};
    // const onDelete = ()=>{};
    //
    // const getAllProducts = async () => {
    //     try {
    //         const response = await fetch('/api/tasks/all');
    //         console.log(response);
    //         if (!response.ok) {
    //             // const errorText = await response.text();
    //             // throw new Error(`Network response was not ok: ${response.statusText} - ${errorText}`);
    //             console.log("Error in response status");
    //         }
    //         const data = await response.json();
    //         console.log("Hello", data);
    //         console.log(data.data);
    //         setAllProducts(data.data); // Assuming the response is an array of products
    //     } catch (error) {
    //         console.log("Error Occurred");
    //         console.error("There was a problem with the fetch operation: " + error + "  " + error.message);
    //     }
    // };
    // const deleteProduct = async (product) => {
    //     console.log("delete product called");
    //     const id = product._id;
    //     try {
    //         const response = await fetch(`/api/tasks/${id}`,{
    //             method: "DELETE",
    //         });
    //         const resBody = await response.json();
    //         console.log(response);
    //         console.log(resBody);
    //         if (!response.ok) {
    //             console.log("Error in response status");
    //             throw new Error("There was a problem with the fetch operation: " + response.status + resBody.message );
    //         }
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }
    //
    // useEffect(() => {
    //     getAllProducts();
    // }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <>  <Navbar />
            <HomeController />
        </>
    );
}

export default App;
