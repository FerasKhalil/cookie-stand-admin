import React,{ useState } from "react";
export default function Main(props) {
    const [hasAllValues , setValues]=useState([])
    function submitHandler(event){
        event.preventDefault();
        const allResults={
            location:event.target.location.value,
            minimum:event.target.minimum.value,
            maximum:event.target.maximum.value,
            average:event.target.average.value

        }
        let allValues=allResults
        // console.log(allValues)
        allValues=JSON.stringify(allValues)
        console.log(allValues)
        setValues(allValues)

    }


    return (
        
        <div>
            <div className="flex flex-col items-center justify-center w-full flex-1 px-2 text-center">
            <form onSubmit={submitHandler} className="bg-green-300 w-1/2 mx-auto my-4 h-90 object-contain">
            <h1 className="my-3 text-2xl text-center">Create Cookie Stand</h1>
            <br></br><br></br><br></br>
            <label for="location" className="float-left ml-20 text-2xl h-10">Location </label>
            <input type ="text" name="location" className="float-left ml-6 w-1/2 mx-auto my-2 h-7" placeholder="Barcelona" ></input>
            <br></br><br></br><br></br><br></br>
            <label for="minimum" className="float-left ml-6 text-2xl"> Minimum Customers per Hour  </label>
            <label for="maximum" className="float-left ml-6 text-2xl"> Maximum Customers per Hour  </label>
            <label for="average" className="float-left ml-6 text-2xl"> Average Cookies per Sale  </label>
            <input type ="submit" value="Create" className="h-20 w-20 bg-green-500"></input>
            <input type ="text" name="minimum" className=" float-left ml-40 m5-4 h-7 py-1 mb-5 w " placeholder="" ></input>
            <input type ="text" name="maximum" className="  mr-96 h-7" placeholder="" ></input>
            <input type ="text" name="average" className="  float-right h-7 mr-60 py-1 mb-5 m5-4" placeholder="" ></input>
            </form>
            </div>

            <div>
            {hasAllValues && <p>{hasAllValues} </p>}
            </div>

            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    );
}