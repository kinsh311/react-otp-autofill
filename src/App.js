import React, { useEffect, useState } from "react";

const App = () => {
  const controller = new AbortController();
  useEffect(() => {
    console.log("use effect");
    const runThis = async () => {
      try {
        if (navigator.credentials) {
          try {
            console.log("stage: 1")
            await navigator.credentials
              .get({ signal: controller.signal, otp: { transport: ["sms"] } })
              .then((content) => {
                console.log("stage: 2")
                if (content) {
                  alert(content)
                  console.log("content", content)
                }
              })
              .catch((e) => {
                console.log("error in then content", e);
              });
          } catch (e) {
            console.log("error in then content", e);
            return
          }
        }
      } catch (err) {
        
        console.log("error in then content", err)
      }
    }
    runThis()



  })

  return <div className="App">
    <h2>Your Otp is:  </h2>
    < form action="ok.html" method="POST">
      < input type="text" className="form-control" id="OTP" placeholder="OTP" autoComplete="one-time-code"/>
      < button className="btn btn-primary btn-style" id="validateOTP">Verify</button>
    </form>
  </div>
}

export default App;

