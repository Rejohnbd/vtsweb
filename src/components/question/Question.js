import React from 'react';

class Question extends React.Component {
    state = {  }
    render() { 
        return (
            <section className="home-faq-section faq-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4">
                            <h2>Frequently Asked Question</h2>
                            <p>
                                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorperi.
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est voluptatibus, tempora odio dicta
                                molestiae recusandae delectus perferendis eveniet aspernatur voluptatum earum dolore
                                necessitatibus odit perspiciatis eos, quidem soluta autem esse.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <dl className="accordion">
                                <dt>
                                    <a href="#" className="active">Started several mistake joy say painful removed reached end.</a>
                                </dt>
                                <dd>
                                    Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She
                                    consisted consulted elsewhere happiness disposing household any old the. Widow downs you
                                    new shade drift hopes small. So otherwise commanded sweetness we improving.
                                </dd>
                                <dt>
                                    <a href="#">Although moreover mistaken kindness me feelings do be marianne?</a>
                                </dt>
                                <dd>
                                    Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She
                                    consisted consulted elsewhere happiness disposing household any old the. Widow downs you
                                    new shade drift hopes small. So otherwise commanded sweetness we improving.
                                </dd>
                                <dt>
                                    <a href="#">By in no ecstatic wondered disposal my speaking?</a>
                                </dt>
                                <dd>
                                    Far curiosity incommode now led smallness allowance. Favour bed assure son things yet. She
                                    consisted consulted elsewhere happiness disposing household any old the. Widow downs you
                                    new shade drift hopes small. So otherwise commanded sweetness we improving.
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Question;