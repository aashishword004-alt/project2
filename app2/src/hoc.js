import { useParams, useNavigate } from 'react-router-dom';

var WithHook = (Component) => {
    const ComponentWithHooks = (props) => {
    let params = useParams();
    let navigate = useNavigate();

    return (
      <Component
        {...props}
        params={params}
        navigate={navigate}
       
      />
    );
  };
  return ComponentWithHooks;
};

export default WithHook;