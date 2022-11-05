import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {

    const rel = [1, 2, 3, 4];

    render() {

        return (
            <div id="main">
                {/* Do not remove the main div */}
                <ol key="relativeList">

                    {
                        rel.map((e) => {

                            return <li key={`relativeListItem${e}`}>{e}</li>

                        })
                    }

                    <ol />
            </div>
        )
    }
}


export default App;
