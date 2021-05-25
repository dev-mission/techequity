import './Submitted.scss';
import { useAuthContext } from "../AuthContext";
import { Link } from 'react-router-dom';

function Submitted() {
    const { user } = useAuthContext();

    {/*For Program Directors and Non-profit partners after a succesful application*/ }
    return (
        <main className="container">
            <div className="row">
                <div className="success col-md-8 offset-2">
                    <div className="message col-md-10 offset-1">
                        <br />
                        <h2><strong>Application Submitted.</strong></h2>
                        <p className="text-center">
                            Your application was succesfully submitted
                            <br />
                            and is currently under review. We will email
                            <br />
                            you a confimation within 72 hours.
                        </p>
                        <hr />
                        <div className="row">
                            <div className="col-md">
                                <button type="button" class="btn btn-outline-secondary">Send request update</button>
                            </div>
                            <div className="col-md 4 offset-4">
                                <Link to="/" className="btn btn-primary">Return to home page </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Submitted;
