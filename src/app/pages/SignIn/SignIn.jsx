import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log("Name: " + profile.getName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    return (
        <div>
            <Link to={"./signin"}>
                <div
                    class="g-signin2"
                    data-onsuccess="onSignIn"
                    onClick={onSignIn}
                ></div>
            </Link>
        </div>
    );
}

export default SignIn;