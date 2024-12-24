import * as React from "react";
class HtmlComponent extends React.Component {
    render() {
        return (
            <div>
                <label>Textbox</label>
                <br/>
                <input type="text" id="textbox" name="textbox" />
                <br/>
                <label>Checkbox</label>
                <input type="checkbox" id="checkbox" name="checkbox"/>
                <br />
                <label>Radio but</label>
                <input type="radio" id="radio1" name="radio" value="option1"/>
                <br />
                <label>File</label>
                <input type="file" id="file" name="file"/>
                <br />
                <label>Date</label>
                <input type="date" id="date" name="date"/>

            </div>
        );
    }
}

export default HtmlComponent;