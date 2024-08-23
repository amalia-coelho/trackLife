import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import '../styles/Navbar.css';

function Navbar() {

    return (
        <>
            <header>
                <div className="navbar-geral">
                    <div className="navbar-top">
                        <div className="navbar-logo">
                            <span className="project-logo"> X </span> 
                            <span className="project-name">TRACKLIFE</span>
                        </div>
                        <div className="navbar-item">
                            <FontAwesomeIcon icon="fa-solid fa-calendar-week" color="white"/>
                            <span className="navbar-title">Today</span>
                        </div>
                        <div className="navbar-item">
                            <FontAwesomeIcon icon={faInbox} color="white"/>    
                            <span className="navbar-title">Inbox</span>
                        </div>
                    </div>
                    <div className="navbar-navigation">
                        <div className="navbar-item">
                            <FontAwesomeIcon icon="fa-solid fa-house" color="white"/>
                            <span className="navbar-title">Tarefas</span>
                        </div>
                        <div className="navbar-item">
                            <FontAwesomeIcon icon="fa-solid fa-inbox" color="white"/>    
                            <span className="navbar-title">Hábitos</span>
                        </div>
                    </div>
                </div>
                <div className="navbar-config">

                </div>
            </header>
        </>
    )
}

export default Navbar