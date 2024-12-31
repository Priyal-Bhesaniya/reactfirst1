import * as React from "react";

class Statexyz extends React.Component {
    state = { 
        first: false,
        second: 1.29,
        third: "hello",
        four: "red",
        fifth: "blue",
    };

    constructor() {
        super();
        // Setting interval to update state
        setInterval(() => {
            this.setState({
                first: true,
                second: 10,
                third: "world",
                four: "pink",
                fifth: "black",
            });
        }, 90); // Updates every 90 seconds
    }

    render() {
        const { first, second, third, four, fifth } = this.state;

        return (
            <div>
                {/* Button styling and alignment */}
                <button
                    disabled={first}
                    style={{
                        backgroundColor: "pink",
                        borderColor: "green",
                        textAlign: "center",
                    }}
                >
                    <h1>My Button</h1>
                </button>

                {/* Displaying state variables with proper styling */}
                <p style={{ color: four, textAlign: "center" }}>
                    Value of first variable is <strong>{second}</strong>
                </p>
                <p style={{ color: fifth, textAlign: "center" }}>
                    Value of second variable is <strong>{third}</strong>
                </p>
            </div>
        );
    }
}

export default Statexyz;
