import { useRouteError,Link } from "react-router-dom"
import {FaHome} from 'react-icons/fa'

function ErrorPage() {
    const error = useRouteError()
    console.error(error)
  return (
    <div className='hero h-screen'>
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <h1 className="text-8xl font-bold mb-8">
                    Oops!
                </h1>
                <p className="text-5xl mb-8">
                    404 - <i>{error.statusText|| error.message }</i>
                </p>
                <Link to='/' className='btn bg-yellow-400 hover:bg-red-400 btn-lg'>
                    <FaHome className='mr-2' /> Back To Home</Link>
            </div>
        </div>
      
    </div>
  )
}

export default ErrorPage
