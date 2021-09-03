
import { Component } from "react";
import * as CONSTANTS from 'consts/consts';
import { CometChatUI } from "pages/components/index";
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
                var url_string = window.location;
                var url = new URL(url_string);
                // var uid = url.searchParams.get("uid");                
                var UID = "superhero2";
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
      console.log("Rendering");
      if(this.state.user){        
        return <div style={{width: '100vw', height:'100vh' }}>
        <CometChatUI />
      </div>
      }else{
        return (<div>Loading...</div>);        
      }
    }
 }