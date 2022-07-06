import React from 'react';
import {useMoralis} from 'react-moralis'
import {Button,Container,Heading} from '@chakra-ui/react'
function App() {
  const { authenticate, isAuthenticated, user,logout} = useMoralis();

    return (
      <Container>
      {isAuthenticated  ?
       (
        <div>
        <h1>Welcome {user.get("username")}</h1>
        <Button onClick={() => logout()}>Logout</Button>
      

        </div>
        ) : 
        
        (
          <Container>
           <Heading>  Welcome to moralis Dapp</Heading>
        
           <Button  onClick={() => authenticate()}>Authenticate</Button>
      
          </Container>
      )}

      </Container>

    )

  // if (!isAuthenticated) {
  //   return (
  //     <div>
  //       <Button onClick={() => authenticate()}>Authenticate</Button>
  //     </div>
  //   );
  // }

  // return (
  //   <div>
  //     <h1>Welcome {user.get("username")}</h1>
  //   </div>
  // );
}

export default App;
