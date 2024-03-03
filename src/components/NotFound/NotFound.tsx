import type { ReactElement } from "react";
import { useLocation } from 'react-router-dom';

function NotFound(): ReactElement {
  const { pathname } = useLocation();
  
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>No match for <code>{pathname}</code></p>
    </div>
  );
}

export default NotFound;
