//require react to have access to the library
var React = require("react");

//create the form, the main component
var Form = React.createClass({

    //get the initial state of the search field
    getInitialState: function () {
        return { Topic: "", StartYear: 0, EndYear: 0 };
    },

    // ok so lets think about this: you just created a form, 
    //  next you need something to happen when your user enters in values
    handleChange: function () {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState)
    },

    //ok so above we caught the FORM's state as it changes
    // next we have to render these changes ... RIGHT !?!? 
    // you just entered something, the next thing, you caught that the state has changed
    // next you have to render your search term ,.... for user experience
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron" >
                        <h2> New York Times API </h2>
                        <p>
                            <em> Please enter your search parameters </em>
                        </p>
                    </div>
                    <div className="col-sm-12" >
                        <div className="panel panel-default" >
                            <div className="panel-heading" >
                                <h3 className="panel-title text-center" > API Search </h3>
                            </div>
                            <form>
                                <div className="form-group" >
                                    <h4 className="">
                                        <strong > Search Keyword </strong> </h4>
                                    <input type="text"
                                        value={this.state.Topic}
                                        className="form-control"
                                        id="Topic"
                                        onChange={this.handleChange}
                                        required
                                    />


                                    <strong> Start Year </strong>
                                    <input type="number"
                                        value={this.state.StartYear}
                                        className="form-control"
                                        id="StartYear"
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <h4>
                                        <strong> End Year </strong> </h4>
                                    <input type="number"
                                        value={this.state.EndYear}
                                        className="form-control"
                                        id="EndYear"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title text-center" > Searching For: </h3>
                        </div>
                        <div className="panel-body text-center" >
                            <form>
                                <h2> {this.state.Topic} + ", " + {this.state.StartYear} + ", " + {this.state.EndYear}
                                </h2>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                        );
    }
});

module.exports = Form;