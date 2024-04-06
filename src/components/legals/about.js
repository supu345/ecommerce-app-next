import parser from "html-react-parser";
import React from "react";
async function getData() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return (await (await fetch(`${process.env.HOST}/api/features/policies?type=about`)).json())['data']
}
const About = async () => {
    let data = await getData();
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-12">
                    <div className="card p-4">
                        {parser(data[0]['des'])}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;