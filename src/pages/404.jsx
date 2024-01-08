import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="flex items-center justify-center text-4xl min-h-screen"> 
            <h1>404 - {error.statusText || error.message}</h1>
        </div>
    );


}