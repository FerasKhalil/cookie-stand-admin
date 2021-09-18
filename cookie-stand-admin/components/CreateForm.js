// export default function CreateForm(props)
// {
//     return(
//         <div>
//         <div className="flex flex-col items-center justify-center w-full flex-1 px-2 text-center">
//         <form onSubmit={props.onCreate} className="bg-green-300 w-1/2 mx-auto my-4 h-90 object-contain">
//         <h1 className="my-3 text-2xl text-center">Create Cookie Stand</h1>
//         <br></br><br></br><br></br>
//         <label for="location" className="float-left ml-20 text-2xl h-10">Location </label>
//         <input type ="text" name="location" className="float-left ml-6 w-1/2 mx-auto my-2 h-7" placeholder="Barcelona" ></input>
//         <br></br><br></br><br></br><br></br>
//         <label for="minimum" className="float-left ml-6 text-2xl"> Minimum Customers per Hour  </label>
//         <label for="maximum" className="float-left ml-6 text-2xl"> Maximum Customers per Hour  </label>
//         <label for="average" className="float-left ml-6 text-2xl"> Average Cookies per Sale  </label>
//         <input type ="submit" value="Create" className="h-20 w-20 bg-green-500"></input>
//         <input type ="text" name="minimum" className=" float-left ml-40 m5-4 h-7 py-1 mb-5 w " placeholder="" ></input>
//         <input type ="text" name="maximum" className="  mr-96 h-7" placeholder="" ></input>
//         <input type ="text" name="average" className="  float-right h-7 mr-60 py-1 mb-5 m5-4" placeholder="" ></input>
//         </form>
//         </div>
//         </div>
//     )
// }
export default function CreateForm(props) {
    return (
        <form className=" mx-auto w-5/6 flex-col  bg-green-300 my-8  border  border-green-300 rounded-md" onSubmit={props.submitHandler}>
            <h1 className="p-3 text-2xl font-semibold text-center"> Create Cookie Stand </h1>
            <div className="flex mx-3 my-4">
                <label className="mr-2 font-bold " for='location'> Location </label>
                <input name="location" className="flex-auto "/>
            </div>

            <div className="flex mx-3 my-4  justify-evenly w-7/8">
                <div className="font-bold  w-1/4 p-1 mr-2 text-sm  text-center bg-green-200 rounded ">
                    <label for="minimum">Minimum Customers per Hour</label>
                    <input name="minimum"/>
                </div>
                <div className="w-1/4 p-1 mr-2 text-sm font-bold text-center bg-green-200 rounded">
                    <label for='maximum'>Maximum Customers per Hour</label>
                    <input name="maximum"/>
                </div>
                <div className="w-1/4 p-1 mr-2 text-sm font-bold text-center bg-green-200 rounded">
                    <label for='average' > Average Cookies per Sale </label>
                    <input name="average"/>
                </div>
                <button className="w-1/4 font-semibold bg-green-500 rounded h-20 "> Create </button>
            </div>

        </form>
    )
}   