import "bootstrap/dist/css/bootstrap.min.css";
import "./main_user.css";

export const Main_user = () => {
    return (
        <div className="container-fluid app-container">
            <div className="row">
                <div className="col-12 header">
                    <div className="user-info">
                        <p><strong>User:</strong> King Juarez</p>
                        <p><strong>No. Cuenta:</strong> 123456</p>
                    </div>
                </div>
            </div>
            <div className="row content-row">
                <div className="col-12 content">
                    <div className="account-card">
                        <div className="card-body">
                            <h5 className="card-title">Cuenta Ahorro</h5>
                            <p className="card-text">cesar escriba</p>
                            <a href="#" className="card-link">Depositos</a>
                            <p className="amount">GTQ 100.00</p>
                            <div className="star-icon">★</div>
                        </div>
                    </div>
                    <div className="account-card">
                        <div className="card-body">
                            <h5 className="card-title">Cuenta Monetaria</h5>
                            <p className="card-text">cesar escriba</p>
                            <a href="#" className="card-link">Depositos</a>
                            <p className="amount">GTQ 100.00</p>
                            <div className="star-icon">★</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};