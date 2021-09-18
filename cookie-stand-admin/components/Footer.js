export default function Footer(props) {
    return (
        <footer className="flex  justify-between items-center p-4 mt-4 bg-green-500">
            <h1 className="font-bold text-xl"> {props.report.length} Locations World Wide </h1>
            <h1 className="text-xl font-bold">&copy; 2021</h1>
        </footer>
    )
}