import { useLocation } from 'react-router';

function NoMatch() {
    let location = useLocation();
    return (
        <div className='no-match'>
            <h1 className='no-match-title'>404</h1>
            <h3 className='no-match-content'>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}
export default NoMatch;
