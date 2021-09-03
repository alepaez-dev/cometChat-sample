
import { Component } from "react";
import * as CONSTANTS  from 'consts/consts';

export default class CometChatNoSSR extends Component{
    constructor(props){
        super(props);
        this.state={
          user:undefined
        }
      }
    componentDidMount(){
            let appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(CONSTANTS.APP_REGION).build();
            CometChat.init(CONSTANTS.APP_ID, appSetting).then(
              () => {            
                var UID = "Superhero2";
                var apiKey = CONSTANTS.AUTH_KEY;
                CometChat.login(UID, apiKey).then(
                  user => {
                    this.setState({user})
                  },
                  error => {
                    console.log("Login failed with exception:", {
                      error
                    });
                  }
                );
                // You can now call login function.
              },
              error => {
                console.log("Initialization failed with error:", error);
                // Check the reason for error and take appropriate action.
              }
            );  
    }
    render(){
      console.log('constants', CONSTANTS);
      console.log("Rendering");
      if(this.state.user){
        return (<div>{JSON.stringify(this.state.user)}</div>);        
      }else{
        return (<div>Waiting....</div>);
      }
    }
 }