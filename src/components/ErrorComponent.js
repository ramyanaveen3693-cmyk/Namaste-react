import { useRouteError } from "react-router"
const ErrorComponent = () =>{
  const err = useRouteError();
    return(
        <div>
            <h3>{err.status}</h3>
            <h3>{err.statusText}</h3>
            <h3>Page Not Found!!!!</h3>
        </div>
    )
}
export default ErrorComponent