import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UseOptimistic from "./useOptimistic"
import UseActionState from './useActionState1'
import UseTarnsition from './useTransition1'
import UseRef1 from './useRef1'
import UseDebugValue11 from './useDebugValue11'
import UseId1 from "./useId1"
import UseImperativeRefParent from './UseImperativeRefParent '
import UseInsertionEffect from "./UseInsertionEffect "
import UseSyncExternalStore from './UseSyncExternalStore'
import WidthUseSyncExternalStore from './WidthUseSyncExternalStore'
import UserReducer from './UserReducer'
import UserFormStatus from './useFormStatus1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <UseActionState /> */}
    {/* <UseOptimistic /> */}
    {/* <UseDebugValue11 /> */}
    {/* <UseId1 /> */}
    {/* <UseImperativeRefParent /> */}
    {/* < UseInsertionEffect /> */}
    {/* <UseSyncExternalStore /> */}
    {/* <WidthUseSyncExternalStore /> */}
    {/* <UserReducer />  */}

    < UserFormStatus />
  </StrictMode>
)
